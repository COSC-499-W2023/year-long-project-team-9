import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  RDS,
  Api,
  Job,
  Cognito,
  Config,
  WebSocketApi,
  Service,
} from "sst/constructs";
import * as cdk from "aws-cdk-lib";

export default function SiteStack({ stack }: StackContext) {
  const chumBucket = new Bucket(stack, "ChumBucket", {
    cdk: {
      bucket: {
        autoDeleteObjects: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
      },
    },
  });

  const rekognitionPolicyStatement = new PolicyStatement({
    actions: ["rekognition:*", "rekognition:DetectFaces"],
    effect: Effect.ALLOW,
    resources: ["*"],
  });

  const rds = new RDS(stack, "Database", {
    engine: "postgresql11.13",
    defaultDatabaseName: "obscurus",
    migrations: "stack/database/migrations/",
  });

  const sesPolicyStatement = new PolicyStatement({
    actions: ["ses:SendEmail", "ses:SendRawEmail", "ses:SendTemplatedEmail"],
    effect: Effect.ALLOW,
    resources: ["*"],
  });

  const USER_POOL_WEB_CLIENT_ID_KEY = new Config.Secret(
    stack,
    "USER_POOL_WEB_CLIENT_ID_KEY"
  );
  const USER_POOL_ID_KEY = new Config.Secret(stack, "USER_POOL_ID_KEY");

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        timeout: 20,
        permissions: [rds, chumBucket],
        bind: [rds, chumBucket],
        environment: { DB_NAME: rds.clusterArn },
      },
    },
    routes: {
      "GET /getUsers": {
        function: {
          handler: "stack/lambdas/listUsers.handler",
        },
      },
      "GET /getRequests": {
        function: {
          handler: "stack/lambdas/listRequests.handler",
        },
      },
      "POST /secrets": {
        function: {
          handler: "stack/lambdas/secrets.handler",
        },
      },
      "GET /secrets": {
        function: {
          handler: "stack/lambdas/secrets.handler",
        },
      },
      "POST /processVideo": {
        function: {
          handler: "stack/lambdas/process.handler",
        },
      },
      "POST /createRequest": {
        function: {
          handler: "stack/lambdas/createRequest.handler",
          permissions: [sesPolicyStatement],
        },
      },
      "POST /createUser": {
        function: {
          handler: "stack/lambdas/createUser.handler",
        },
      },
      "GET /getSubmissions": {
        function: {
          handler: "stack/lambdas/listSubmissions.handler",
        },
      },
      "POST /getNotificationsViaEmail": {
        function: {
          handler: "stack/lambdas/getNotificationsViaEmail.handler",
        },
      },
      "POST /readNotification": {
        function: {
          handler: "stack/lambdas/readNotification.handler",
        },
      },
      "POST /deleteNotification": {
        function: {
          handler: "stack/lambdas/getNotificationsViaEmail.handler",
        },
      },
      "POST /getRequestsViaEmail": {
        function: {
          handler: "stack/lambdas/getRequestsViaEmail.handler",
        },
      },
      "POST /getUserViaEmail": {
        function: {
          handler: "stack/lambdas/getUserViaEmail.handler",
        },
      },
      "POST /updateStatus": {
        function: {
          handler: "stack/lambdas/updateStatus.handler",
        },
      },
      "POST /getStatus": {
        function: {
          handler: "stack/lambdas/getStatus.handler",
        },
      },
      "POST /getRequest": {
        function: {
          handler: "stack/lambdas/getRequest.handler",
        },
      },
      "GET /getRoomsViaEmail": {
        function: {
          handler: "stack/lambdas/getRoomsViaEmail.handler",
        },
      },
      "GET /getMessages": {
        function: {
          handler: "stack/lambdas/listMessages.handler",
        },
      },
      "POST /createMessage": {
        function: {
          handler: "stack/lambdas/createMessage.handler",
        },
      },
      "POST /setIsReadTrue": {
        function: {
          handler: "stack/lambdas/setIsReadTrue.handler",
        },
      },
      "GET /listNotifications": {
        function: {
          handler: "stack/lambdas/listNotifications.handler",
        },
      },
      "POST /createNotification": {
        function: {
          handler: "stack/lambdas/createNotification.handler",
        },
      },
      "POST /updateNotificationDate": {
        function: {
          handler: "stack/lambdas/updateNotificationDate.handler",
        },
      },
      "POST /getUserDataByEmail": {
        function: {
          handler: "stack/lambdas/getUserDataByEmail.handler",
        },
      },
      "GET /getUserNames": {
        function: {
          handler: "stack/lambdas/getUserNames.handler",
        },
      },
      "POST /getRequestsAndSubmissionsByEmail": {
        function: {
          handler: "stack/lambdas/getRequestsAndSubmissionsByEmail.handler",
        },
      },
    },
  });

  const wsApi = new WebSocketApi(stack, "WSApi", {
    defaults: {
      function: {
        bind: [rds],
      },
    },
    routes: {
      $connect: "stack/lambdas/chat/connect.main",
      $disconnect: "stack/lambdas/chat/disconnect.main",
      sendmessage: "stack/lambdas/chat/sendMessage.main",
      updateSubmissionStatus: "stack/lambdas/updateSubmissionStatus.main",
    },
  });

  const processVideo = new Service(stack, "ProcessVideo", {
    path: "stack/process-video",
    port: 8080,
    bind: [chumBucket, api, wsApi, rds],
    cdk: {
      fargateService: {
        circuitBreaker: { rollback: true },
      },
    },
    environment: {
      BUCKET_NAME: chumBucket.bucketName,
      API_URL: api.url,
      WS_API_URL: wsApi.url,
    },
    permissions: ["s3", rekognitionPolicyStatement],
    cpu: "4 vCPU",
    memory: "8 GB",
  });



  // const steveJobs = new Job(stack, "SteveJobs", {
  //   runtime: "container",
  //   handler: "stack/process-video",
  //   container: {
  //     cmd: ["python3", "/var/task/app.py"],
  //   },
  //   bind: [chumBucket],
  //   environment: {
  //     BUCKET_NAME: chumBucket.bucketName,
  //     API_URL: api.url,
  //     WS_API_URL: wsApi.url,
  //   },
  //   memorySize: "15 GB",
  //   timeout: "8 hours",
  //   permissions: [rekognitionPolicyStatement],
  // });
  // steveJobs.bind([api]);

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
    //   preAuthentication: "stack/database/src/preAuthentication.main",
    //   postAuthentication: "stack/database/src/postAuthentication.main",
    // },
  });

  auth.attachPermissionsForAuthUsers(stack, [api]);

  api.bind([wsApi]);

  const site = new NextjsSite(stack, "site", {
    bind: [chumBucket, chumBucket, rds, api, wsApi, processVideo],
    permissions: [rekognitionPolicyStatement, wsApi],
    environment: { NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT: wsApi.url },
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
