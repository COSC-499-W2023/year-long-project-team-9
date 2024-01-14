import {
  StackContext,
  NextjsSite,
  Bucket,
  Table,
  Api,
  Function,
} from "sst/constructs";

export default function SiteStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");

  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        timeout: 20,
        permissions: [bucket],
      },
    },
    routes: {
      "POST    /lambda": {
        function: {
          handler: "lambdas/lambda.py",
          timeout: 10,
          environment: { bucketName: bucket.bucketName },
          permissions: [bucket],
        },
      }
    },
  });

  api.attachPermissions(["s3"]);

  const startFaceDetection = new Function(stack, "StartFaceDetection",
    {
        handler: "./functions/rekopoc-start-face-detect/lambda_function.lambda_handler",
        runtime: "python3.9",
        timeout: 10,
        environment: { bucketName: bucket.bucketName },
        permissions: [bucket],
    }
  )

  const site = new NextjsSite(stack, "site", {
    bind: [bucket, api],
  });

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
