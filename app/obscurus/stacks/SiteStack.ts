import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  Function,
  RDS,
  Api,
  Service,
  Cognito,
  Config,
} from "sst/constructs";
import { LambdaInvoke } from "aws-cdk-lib/aws-stepfunctions-tasks";
import {
  Chain,
  Choice,
  Condition,
  DefinitionBody,
  Fail,
  StateMachine,
  Succeed,
  Wait,
  WaitTime,
} from "aws-cdk-lib/aws-stepfunctions";
import { Duration } from "aws-cdk-lib/core";

export default function SiteStack({ stack }: StackContext) {
  const inputBucket = new Bucket(stack, "inputBucket");
  const outputBucket = new Bucket(stack, "outputBucket");

  const rekognitionPolicyStatement = new PolicyStatement({
    actions: ["rekognition:*", "rekognition:DetectFaces"],
    effect: Effect.ALLOW,
    resources: ["*"],
  });

  const startFaceDetection = new Function(stack, "StartFaceDetection", {
    timeout: 600,
    memorySize: 512,
    runtime: "python3.7",
    handler:
      "./stacks/lambdas/rekopoc-start-face-detect/lambda_function.lambda_handler",
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OBJECT_KEY: "test3.mov",
    },
    permissions: [rekognitionPolicyStatement],
    bind: [inputBucket],
  });

  startFaceDetection.attachPermissions([rekognitionPolicyStatement]);

  startFaceDetection.addToRolePolicy(
    new PolicyStatement({
      actions: ["rekognition:StartFaceDetection", "rekognition:DetectFaces"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );

  const getTimestampsAndFaces = new Function(stack, "GetTimeStamps", {
    timeout: 600,
    memorySize: 512,
    runtime: "python3.7",
    handler:
      "./stacks/lambdas/rekopoc-get-timestamps-faces/lambda_function.lambda_handler",
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OBJECT_KEY: "test3.mov",
    },
    permissions: [rekognitionPolicyStatement],
    bind: [inputBucket],
  });

  // add RDS construct
  const rds = new RDS(stack, "Database", {
    engine: "postgresql11.13",
    defaultDatabaseName: "obscurus",
    migrations: "./stacks/core/migrations/",
  });

  getTimestampsAndFaces.attachPermissions([rekognitionPolicyStatement]);

  getTimestampsAndFaces.addToRolePolicy(
    new PolicyStatement({
      actions: ["rekognition:*"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );

  const checkStatus = new Function(stack, "CheckStatus", {
    timeout: 600,
    memorySize: 512,
    runtime: "python3.7",
    handler:
      "./stacks/lambdas/rekopoc-check-status/lambda_function.lambda_handler",
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OBJECT_KEY: "test3.mov",
    },
    permissions: [rekognitionPolicyStatement],
    bind: [inputBucket],
  });

  checkStatus.attachPermissions([rekognitionPolicyStatement]);

  checkStatus.addToRolePolicy(
    new PolicyStatement({
      actions: ["rekognition:*"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );

  const blurFaces = new Function(stack, "BlurFaces", {
    timeout: 600,
    memorySize: 2048,
    runtime: "container",
    handler: "./stacks/lambdas/rekopoc-apply-faces-to-video-docker",
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OUTPUT_BUCKET: outputBucket.bucketName,
      INPUT_NAME: "test3.mov",
      OUTPUT_NAME: "processed.mp4",
    },
    permissions: ["s3"],
    bind: [inputBucket, outputBucket],
  });

  blurFaces.addToRolePolicy(
    new PolicyStatement({
      actions: ["S3:*"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );

  const wait1 = new Wait(stack, "Wait 1 Second", {
    time: WaitTime.duration(Duration.seconds(1)),
  });

  const jobFailed = new Fail(stack, "Job Failed...", {
    cause: "Face Detection Failed",
    error: "Could not get jobStatus === 'SUCCEEDED'",
  });

  const jobSucceeded = new Succeed(stack, "Execution Succeeded!");

  const updateJobStatus = new LambdaInvoke(stack, "Check Job Status", {
    lambdaFunction: checkStatus,
    inputPath: "$.Payload",
  });

  const getTimestampsAndFacesTask = new LambdaInvoke(
    stack,
    "Get Timestamps and Faces",
    {
      lambdaFunction: getTimestampsAndFaces,
      inputPath: "$.Payload",
      outputPath: "$.Payload.body",
    }
  );

  const detectFacesTask = new LambdaInvoke(stack, "Start Face Detection", {
    lambdaFunction: startFaceDetection,
  });

  const blurFacesTask = new LambdaInvoke(stack, "Blur Faces in the Video", {
    lambdaFunction: blurFaces,
  });

  const choice = new Choice(stack, "Job finished?");

  choice.when(
    Condition.stringEquals("$.Payload.job_status", "IN_PROGRESS"),
    wait1.next(updateJobStatus)
  );

  choice.when(
    Condition.stringEquals("$.Payload.job_status", "SUCCEEDED"),
    getTimestampsAndFacesTask.next(blurFacesTask).next(jobSucceeded)
  );

  choice.otherwise(jobFailed);

  const stateDefinition = Chain.start(detectFacesTask)
    .next(updateJobStatus)
    .next(choice);

  const stateMachine = new StateMachine(stack, "StateMachine", {
    definition: stateDefinition,
    timeout: Duration.minutes(15),
  });

  checkStatus.addToRolePolicy(
    new PolicyStatement({
      actions: ["rekognition:*"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );

  // Create secret keys
  const USER_POOL_WEB_CLIENT_ID_KEY = new Config.Secret(
    stack,
    "USER_POOL_WEB_CLIENT_ID_KEY"
  );

  // Create secret keys
  const USER_POOL_ID_KEY = new Config.Secret(stack, "USER_POOL_ID_KEY");

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [USER_POOL_WEB_CLIENT_ID_KEY, USER_POOL_ID_KEY],
      },
      authorizer: "iam",
    },
    routes: {
      "GET /private": "./stacks/lambdas/private.main",
      "GET /public": {
        function: "./stacks/lambdas/public.main",
        authorizer: "none",
      },
      "GET /start-machine": {
        function: {
          handler: "./stacks/lambdas/startMachine.handler",
          environment: {
            STATE_MACHINE: stateMachine.stateMachineArn,
          },
        },
      },
      "GET /users": {
        function: {
          handler: "./stacks/lambdas/list.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /requests": {
        function: {
          handler: "./stacks/lambdas/requests.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
    },
  });

  // Create auth provider
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
    // triggers: {
    //   preAuthentication: "./stacks/core/src/preAuthentication.main",
    //   postAuthentication: "./stacks/core/src/postAuthentication.main",
    // },
  });

  // Allow authenticated users invoke API
  auth.attachPermissionsForAuthUsers(stack, [api]);

  api.attachPermissionsToRoute("GET /start-machine", [
    [stateMachine, "grantStartExecution"],
  ]);

  const service = new Service(stack, "processVideo", {
    path: "./service",
    port: 8080,
    bind: [inputBucket, outputBucket],
    cdk: {
      applicationLoadBalancer: false,
      cloudfrontDistribution: false,
      fargateService: {
        circuitBreaker: { rollback: true },
      },
    },
  });

  const amplifySecrets = new Function(stack, "AmplifySecrets", {
    handler: "./stacks/lambdas/secrets.handler",
    url: true,
    bind: [USER_POOL_ID_KEY, USER_POOL_WEB_CLIENT_ID_KEY],
  });

  const site = new NextjsSite(stack, "site", {
    bind: [inputBucket, outputBucket, rds, api, service],
    permissions: [rekognitionPolicyStatement],
  });

  site.attachPermissions([rekognitionPolicyStatement]);

  startFaceDetection.addToRolePolicy(
    new PolicyStatement({
      actions: ["rekognition:StartFaceDetection", "rekognition:DetectFaces"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });
}
