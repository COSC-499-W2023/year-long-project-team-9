import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { StackContext, Bucket, Job } from "sst/constructs";

export const rekognitionPolicyStatement = new PolicyStatement({
  actions: ["rekognition:*", "rekognition:DetectFaces"],
  effect: Effect.ALLOW,
  resources: ["*"],
});

export function SteveJobs({ stack }: StackContext) {
  
  const inputBucket = new Bucket(stack, "inputBucket");
  const outputBucket = new Bucket(stack, "outputBucket");

  

   const steveJobs = new Job(stack, "SteveJobs", {
    runtime: "container",
    handler: "./job",
    container: {
      cmd: ["python3", "/var/task/app.py"],
    },
    bind: [inputBucket, outputBucket],
    permissions: ["s3", rekognitionPolicyStatement],
    environment: {
      INPUT_BUCKET: inputBucket.bucketName,
      OUTPUT_BUCKET: outputBucket.bucketName,
      INPUT_NAME: "test3.mp4",
      OUTPUT_NAME: "processed.mp4",
    },
    memorySize: "15 GB",
    timeout: "8 hours",
  });
  return {steveJobs, inputBucket, outputBucket};
}
