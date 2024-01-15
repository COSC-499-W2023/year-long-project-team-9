import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  Function,
  Service,
} from "sst/constructs";

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
      OBJECT_KEY: "test.mov",
    },
    permissions: [rekognitionPolicyStatement],
    bind: [inputBucket]
    
  });

  startFaceDetection.attachPermissions([rekognitionPolicyStatement]);

  startFaceDetection.addToRolePolicy(
    new PolicyStatement({
      actions: ["rekognition:StartFaceDetection", "rekognition:DetectFaces"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );


  const getTimestamps = new Function(stack, "GetTimeStamps", {
    timeout: 600,
    memorySize: 512,
    runtime: "python3.7",
    handler:
      "./stacks/lambdas/rekopoc-get-timestamps-faces/lambda_function.lambda_handler",
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OBJECT_KEY: "test2.mov",
    },
    permissions: [rekognitionPolicyStatement],
    bind: [inputBucket]
    
  });

  getTimestamps.attachPermissions([rekognitionPolicyStatement]);

  getTimestamps.addToRolePolicy(
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
      OBJECT_KEY: "test2.mov",
    },
    permissions: [rekognitionPolicyStatement],
    bind: [inputBucket]
    
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
    handler:
      "./stacks/lambdas/rekopoc-apply-face-to-video-docker",
    environment: {
      OUTPUT_BUCKET: inputBucket.bucketName,
      OBJECT_KEY: "test2.mov",
    },
    permissions: ["s3"],
    bind: [outputBucket]
    
  });



  blurFaces.addToRolePolicy(
    new PolicyStatement({
      actions: ["S3:*"],
      effect: Effect.ALLOW,
      resources: ["*"],
    })
  );


  

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

  const site = new NextjsSite(stack, "site", {
    bind: [inputBucket, outputBucket, service, startFaceDetection],
  });

  site.attachPermissions([rekognitionPolicyStatement]);

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
