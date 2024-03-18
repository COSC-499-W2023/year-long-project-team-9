import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  Function,
  RDS,
  Api,
  Job,
  Service,
  Cognito,
  Config,
  Queue,
  Table,
  WebSocketApi,
} from "sst/constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { HostedZone } from "aws-cdk-lib/aws-route53";

export default function SiteStack({ stack }: StackContext) {
  const inputBucket = new Bucket(stack, "inputBucket");
  const outputBucket = new Bucket(stack, "outputBucket");

  const rekognitionPolicyStatement = new PolicyStatement({
    actions: ["rekognition:*", "rekognition:DetectFaces"],
    effect: Effect.ALLOW,
    resources: ["*"],
  });

  // add RDS construct
  const rds = new RDS(stack, "Database", {
    engine: "postgresql11.13",
    defaultDatabaseName: "obscurus",
    migrations: "./stack/database/migrations/",
  });

  // const steveJobs = new Job(stack, "SteveJobs", {
  //   runtime: "container",
  //   handler: "./stack/process-video",
  //   container: {
  //     cmd: ["python3", "/var/task/app.py"],
  //   },
  //   bind: [inputBucket, outputBucket],
  //   environment: {
  //     INPUT_BUCKET: inputBucket.bucketName,
  //     OUTPUT_BUCKET: outputBucket.bucketName,
  //     INPUT_NAME: "test3.mp4",
  //     OUTPUT_NAME: "processed.mp4",
  //   },
  //   memorySize: "15 GB",
  //   timeout: "8 hours",
  //   permissions: [rekognitionPolicyStatement],
  // });

  const sesPolicyStatement = new PolicyStatement({
    actions: ["ses:SendEmail", "ses:SendRawEmail", "ses:SendTemplatedEmail"],
    effect: Effect.ALLOW,
    resources: ["*"],
  });

  //Create secret keys
  const USER_POOL_WEB_CLIENT_ID_KEY = new Config.Secret(
    stack,
    "USER_POOL_WEB_CLIENT_ID_KEY"
  );

  // Create secret keys
  const USER_POOL_ID_KEY = new Config.Secret(stack, "USER_POOL_ID_KEY");

  const api = new Api(stack, "Api", {
    // defaults: {
    //   function: {
    //     bind: [USER_POOL_WEB_CLIENT_ID_KEY, USER_POOL_ID_KEY],
    //   },
    //   authorizer: "iam",
    // },
    routes: {
      "GET /private": "./stack/lambdas/private.main",
      "GET /public": {
        function: "./stack/lambdas/public.main",
        authorizer: "none",
      },
      // "GET /start-machine": {
      //   function: {
      //     handler: "./stack/lambdas/startMachine.handler",
      //     environment: {
      //       STATE_MACHINE: stateMachine.stateMachineArn,
      //     },
      //   },
      // },
      "GET /getUsers": {
        function: {
          handler: "./stack/lambdas/listUsers.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "GET /getRequests": {
        function: {
          handler: "./stack/lambdas/listRequests.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /secrets": {
        function: {
          handler: "./stack/lambdas/secrets.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "GET /secrets": {
        function: {
          handler: "./stack/lambdas/secrets.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /processVideo": {
        function: {
          handler: "./stack/lambdas/process.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "POST /createRequest": {
        function: {
          handler: "./stack/lambdas/createRequest.handler",
          timeout: 20,
          permissions: [inputBucket, rds, sesPolicyStatement],
          bind: [inputBucket, rds],
        },
      },
      "POST /createUser": {
        function: {
          handler: "./stack/lambdas/createUser.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "GET /getSubmissions": {
        function: {
          handler: "./stack/lambdas/listSubmissions.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /getNotificationsViaEmail": {
        function: {
          handler: "./stack/lambdas/getNotificationsViaEmail.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "POST /notificationRead": {
        function: {
          handler: "./stack/lambdas/getNotificationsViaEmail.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "POST /deleteNotification": {
        function: {
          handler: "./stack/lambdas/getNotificationsViaEmail.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "POST /getRequestsViaEmail": {
        function: {
          handler: "./stack/lambdas/getRequestsViaEmail.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /getSubmissionsViaEmail": {
        function: {
          handler: "./stack/lambdas/getSubmissionsViaEmail.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /getUserViaEmail": {
        function: {
          handler: "./stack/lambdas/getUserViaEmail.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /updateStatus": {
        function: {
          handler: "./stack/lambdas/updateStatus.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "GET /getStatus": {
        function: {
          handler: "./stack/lambdas/getStatus.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "POST /getRequest": {
        function: {
          handler: "./stack/lambdas/getRequest.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "GET /getRoomsViaEmail": {
        function: {
          handler: "./stack/lambdas/getRoomsViaEmail.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "GET /getMessages": {
        function: {
          handler: "./stack/lambdas/listMessages.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /createMessage": {
        function: {
          handler: "./stack/lambdas/createMessage.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "POST /setIsReadTrue": {
        function: {
          handler: "./stack/lambdas/setIsReadTrue.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "GET /listNotifications": {
        function: {
          handler: "./stack/lambdas/listNotifications.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /createNotification": {
        function: {
          handler: "./stack/lambdas/createNotification.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
      "POST /updateNotificationDate": {
        function: {
          handler: "./stack/lambdas/updateNotificationDate.handler",
          timeout: 20,
          permissions: [inputBucket, rds],
          bind: [inputBucket, rds],
        },
      },
    },
  });

  // const processVideo = new Service(stack, "ProcessVideo", {
  //   path: "./stack/process-video",
  //   port: 8080,
  //   bind: [inputBucket, outputBucket, api],
  //   cdk: {
  //     fargateService: {
  //       circuitBreaker: { rollback: true },
  //     },

  //   },
  //   environment: {
  //     INPUT_BUCKET: inputBucket.bucketName,
  //     OUTPUT_BUCKET: outputBucket.bucketName,
  //     INPUT_NAME: "test3.mp4",
  //     OUTPUT_NAME: "processed.mp4",
  //     API_URL: api.url,
  //   },
  //   permissions: ["s3", rekognitionPolicyStatement],
  //   cpu: "4 vCPU",
  //   memory: "8 GB",
  // });

  const steveJobs = new Job(stack, "SteveJobs", {
    runtime: "container",
    handler: "./stack/process-video",
    container: {
      cmd: ["python3", "/var/task/app.py"],
    },
    bind: [inputBucket, outputBucket],
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OUTPUT_BUCKET: outputBucket.bucketName,
      API_URL: api.url,
    },
    memorySize: "15 GB",
    timeout: "8 hours",
    permissions: [rekognitionPolicyStatement],
  });
  steveJobs.bind([api]);

  // Create auth provider
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
    // cdk: {
    //   userPool: {
    //     standardAttributes: {
    //       email: { required: true, mutable: false },
    //       givenName: { required: true, mutable: true },
    //       familyName: { required: true, mutable: true },
    //       birthdate: { required: true, mutable: false },
    //     },
    //   },
    // },
    // triggers: {
    //   preAuthentication: "./stack/database/src/preAuthentication.main",
    //   postAuthentication: "./stack/database/src/postAuthentication.main",
    // },
  });

  // Allow authenticated users invoke API
  auth.attachPermissionsForAuthUsers(stack, [api]);

  // const table = new Table(stack, "Connections", {
  //   fields: {
  //     id: "string",
  //   },
  //   primaryIndex: { partitionKey: "id" },
  // });

  const wsApi = new WebSocketApi(stack, "WSApi", {
    defaults: {
      function: {
        bind: [rds],
      },
    },
    routes: {
      $connect: "./stack/lambdas/chat/connect.main",
      $disconnect: "./stack/lambdas/chat/disconnect.main",
      sendmessage: "./stack/lambdas/chat/sendMessage.main",
    },
  });

  api.bind([wsApi]);

  const site = new NextjsSite(stack, "site", {
    bind: [inputBucket, outputBucket, rds, api, steveJobs],
    permissions: [rekognitionPolicyStatement],
    // environment: {
    //   NEXT_PUBLIC_SERVICE_URL: processVideo.url || ""
    // }
    // customDomain: {
    //   domainName: "obscurus.me",
    //   domainAlias: "www.obscurus.me",
    //   cdk: {
    //     hostedZone: HostedZone.fromHostedZoneAttributes(stack, "MyZone", {
    //       hostedZoneId: "Z09403151W7ZFKPC0YJEL",
    //       zoneName: "obscurus.me",
    //     }),
    //   },
    // },
  });

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
    WebSocketApiEndpoint: wsApi.url,
  });
}
