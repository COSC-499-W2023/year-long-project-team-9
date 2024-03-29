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
      "POST /notificationRead": {
        function: {
          handler: "stack/lambdas/getNotificationsViaEmail.handler",
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
      "POST /getSubmissionsViaEmail": {
        function: {
          handler: "stack/lambdas/getSubmissionsViaEmail.handler",
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
    },
  });

  // const processVideo = new Service(stack, "ProcessVideo", {
  //   path: "stack/process-video",
  //   port: 8080,
  //   bind: [chumBucket, chumBucket, api],
  //   cdk: {
  //     fargateService: {
  //       circuitBreaker: { rollback: true },
  //     },

  //   },
  //   environment: {
  //     INPUT_BUCKET: chumBucket.bucketName,
  //     OUTPUT_BUCKET: chumBucket.bucketName,
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
    handler: "stack/process-video",
    container: {
      cmd: ["python3", "/var/task/app.py"],
    },
    bind: [chumBucket],
    environment: {
      BUCKET_NAME: chumBucket.bucketName,
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
    // triggers: {
    //   preAuthentication: "stack/database/src/preAuthentication.main",
    //   postAuthentication: "stack/database/src/postAuthentication.main",
    // },
  });

  auth.attachPermissionsForAuthUsers(stack, [api]);

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

  api.bind([wsApi]);

  const site = new NextjsSite(stack, "site", {
    bind: [chumBucket, chumBucket, rds, api, steveJobs, wsApi],
    permissions: [rekognitionPolicyStatement, wsApi],
    environment: {
      NEXT_PUBLIC_REGION: stack.region,
      NEXT_PUBLIC_USER_POOL_ID: auth.userPoolId,
      NEXT_PUBLIC_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId ?? "",
      NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID: auth.userPoolClientId,
      NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT: wsApi.url,
    },
  });

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    Region: stack.region,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
    WebSocketApiEndpoint: wsApi.url,
  });
}
