import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  RDS,
  Api,
  Service,
  Cognito,
  Queue,
  Job,
  Function
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

  const api = new Api(stack, "Api", {
    defaults: {
      authorizer: "iam",
    },
    routes: {
      "GET /private": "./stacks/lambdas/private.main",
      "GET /public": {
        function: "./stacks/lambdas/public.main",
        authorizer: "none",
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
      "GET /getRequests": {
        function: {
          handler: "./stacks/lambdas/getRequests.handler",
          timeout: 20,
          permissions: [rds],
          bind: [rds],
          environment: { DB_NAME: rds.clusterArn },
        },
      },
      "POST /getStatus": {
        function: {
          handler: "./stacks/lambdas/getStatus.handler",
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
  });

  // Allow authenticated users invoke API
  auth.attachPermissionsForAuthUsers(stack, [api]);

  const steveJobs = new Job(stack, "SteveJobs", {
    runtime: "container",
    handler: "./job",
    container: {
      cmd: ["python3", "/var/task/app.py"],
    },
    bind: [inputBucket, outputBucket, api],
    permissions: ["s3", rekognitionPolicyStatement],
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OUTPUT_BUCKET: outputBucket.bucketName,
      INPUT_NAME: "test3.mp4",
      OUTPUT_NAME: "processed.mp4",
      API_URL: api.url,
    },
  });

  const site = new NextjsSite(stack, "site", {
    bind: [inputBucket, outputBucket, rds, api, steveJobs],
    permissions: [rekognitionPolicyStatement],
  });


  inputBucket.bind([site])


  site.attachPermissions([rekognitionPolicyStatement]);

  //processVideo.attachPermissions([rekognitionPolicyStatement]);

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    // UserPoolId: auth.userPoolId,
    // IdentityPoolId: auth.cognitoIdentityPoolId,
    // UserPoolClientId: auth.userPoolClientId,
  });
}
