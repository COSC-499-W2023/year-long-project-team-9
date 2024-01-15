import {
  StackContext,
  NextjsSite,
  Bucket,
  Function,
  Service
} from "sst/constructs";

export default function SiteStack({ stack }: StackContext) {
  const inputBucket = new Bucket(stack, "inputBucket");
  const outputBucket = new Bucket(stack, "outputBucket");

  const startFaceDetection = new Function(stack, "StartFaceDetection", 
    {
      timeout: 600,
      memorySize: 512, 
      runtime: "python3.7",
      handler: "./stacks/lambdas/rekopoc-start-face-detect/lambda_function.lambda_handler",
      environment: {
        INPUT_BUCKET: inputBucket.bucketName
      }
    }
  )
  
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

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
