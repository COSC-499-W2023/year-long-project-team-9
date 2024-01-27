import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  RDS,
  Api,
  Service,
  Cognito,
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
    cdk: {
      cluster: {
        vpc: ec2.Vpc.fromLookup(stack, "VPC", {
          vpcId: "vpc-0dc613d0620101e74",
        }),
      },
  }});

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
    },
  });

  // Create auth provider
  const auth = new Cognito(stack, "Auth", {
    login: ["email"],
  });

  // Allow authenticated users invoke API
  auth.attachPermissionsForAuthUsers(stack, [api]);

  const processVideo = new Service(stack, "processVideo", {
    path: "./service",
    port: 8080,
    bind: [inputBucket, outputBucket, api],
    cdk: {
      fargateService: {
        circuitBreaker: { rollback: true },
      },
      vpc: ec2.Vpc.fromLookup(stack, "VPC2", {
        vpcId: "vpc-0dc613d0620101e74",
      }),
      
    },
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OUTPUT_BUCKET: outputBucket.bucketName,
      INPUT_NAME: "test3.mp4",
      OUTPUT_NAME: "processed.mp4",
      API_URL: api.url,
    },
    permissions: ["s3", rekognitionPolicyStatement],
    cpu: "4 vCPU",
    memory: "8 GB",
  });



  const site = new NextjsSite(stack, "site", {
    bind: [inputBucket, outputBucket, rds, api, processVideo],
    permissions: [rekognitionPolicyStatement],
  });

  site.attachPermissions([rekognitionPolicyStatement]);

  processVideo.attachPermissions([rekognitionPolicyStatement]);

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
    ProcessVideo: processVideo.url,
  });
}
