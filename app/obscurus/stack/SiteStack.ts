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
  EventBus,
  Topic,
} from "sst/constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { HostedZone } from "aws-cdk-lib/aws-route53";
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
  const WEBSOCKET_API_ENDPOINT = new Config.Secret(
    stack,
    "WEBSOCKET_API_ENDPOINT"
  );

  const topic = new Topic(stack, "Topic", {
    subscribers: {
      receipt: "stack/lambdas/receipt.main",
      shipping: "stack/lambdas/shipping.main",
    },
  });

  const bus = new EventBus(stack, "Ordered", {
    rules: {
      rule1: {
        pattern: {
          source: ["myevent"],
          detailType: ["Order"],
        },
        targets: {
          receipt: "stack/lambdas/receipt.handler",
          shipping: "stack/lambdas/shipping.handler",
        },
      },
    },
  });

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        timeout: 20,
        permissions: [rds, chumBucket, topic, bus],
        bind: [rds, chumBucket, topic, bus],
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
      "GET /getWebsocketApiEndpoint": {
        function: {
          handler: "stack/lambdas/getWebsocketApiEndpoint.handler",
        },
      },
      "POST /order": "stack/lambdas/order.handler",
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
    },
  });

  api.bind([wsApi]);

  const videoProcessingQueue = new Queue(stack, "VideoProcessingQueue", {
    consumer: {
      function: {
        handler: "stack/lambdas/processVideo.handler",
        environment: {
          BUCKET_NAME: chumBucket.bucketName,
          API_URL: api.url,
        },
        permissions: [rekognitionPolicyStatement, chumBucket],
      },
    },
  });

  const site = new NextjsSite(stack, "site", {
    bind: [chumBucket, chumBucket, rds, api, steveJobs, bus, topic, wsApi],
    permissions: [rekognitionPolicyStatement],
    environment: {NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT: wsApi.url},
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
