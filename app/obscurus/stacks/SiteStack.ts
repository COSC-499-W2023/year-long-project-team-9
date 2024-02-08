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
    migrations: "./stacks/core/migrations/",
  });

  const steveJobs = new Job(stack, "SteveJobs", {
    runtime: "container",
    handler: "./job",
    container: {
      cmd: ["python3", "/var/task/app.py"],
    },
    bind: [inputBucket, outputBucket],
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OUTPUT_BUCKET: outputBucket.bucketName,
      INPUT_NAME: "test3.mp4",
      OUTPUT_NAME: "processed.mp4",
    },
    memorySize: "15 GB",
    timeout: "8 hours",
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
      // "GET /start-machine": {
      //   function: {
      //     handler: "./stacks/lambdas/startMachine.handler",
      //     environment: {
      //       STATE_MACHINE: stateMachine.stateMachineArn,
      //     },
      //   },
      // },
      "GET /getUsers": {
        function: {
          handler: "./stacks/lambdas/listUsers.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "GET /getRequests": {
        function: {
          handler: "./stacks/lambdas/listRequests.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /secrets": {
        function: {
          handler: "./stacks/lambdas/secrets.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /processVideo": {
        function: {
          handler: "./stacks/lambdas/process.handler",
          timeout: 20,
          permissions: [steveJobs, inputBucket],
          bind: [steveJobs, inputBucket],
        },
      },
      "POST /createRequest": {
        function: {
          handler: "./stacks/lambdas/createRequest.handler",
          timeout: 20,
          permissions: [steveJobs, inputBucket, rds],
          bind: [steveJobs, inputBucket, rds],
        },
      },
      "POST /createUser": {
        function: {
          handler: "./stacks/lambdas/createUser.handler",
          timeout: 20,
          permissions: [steveJobs, inputBucket, rds],
          bind: [steveJobs, inputBucket, rds],
        },
      },
      "GET /getSubmissions": {
        function: {
          handler: "./stacks/lambdas/listSubmissions.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
    },
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
    //     },
    //   },
    // },
    // triggers: {
    //   preAuthentication: "./stacks/core/src/preAuthentication.main",
    //   postAuthentication: "./stacks/core/src/postAuthentication.main",
    // },
  });

  // Allow authenticated users invoke API
  // auth.attachPermissionsForAuthUsers(stack, [api]);

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
      $connect: "./stacks/lambdas/chat/connect.main",
      $disconnect: "./stacks/lambdas/chat/disconnect.main",
      // $sendmessage: "./stacks/lambdas/chat/sendMessage.main",
    },
  });

  api.bind([wsApi]);

  const site = new NextjsSite(stack, "site", {
    bind: [inputBucket, outputBucket, rds, api, steveJobs, wsApi],
  });

  steveJobs.bind([site]);

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
    WebSocketApiEndpoint: wsApi.url,
  });
}
