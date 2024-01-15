import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  Function,
  Service,
  Api,
} from "sst/constructs";
import { LambdaInvoke } from "aws-cdk-lib/aws-stepfunctions-tasks";
import { Chain, Choice, Condition, DefinitionBody, Fail, StateMachine, Succeed, Wait, WaitTime } from "aws-cdk-lib/aws-stepfunctions";
import { Duration } from "aws-cdk-lib/core";
import { wait } from "node_modules/@testing-library/user-event/dist/types/utils";


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


  const getTimestampsAndFaces = new Function(stack, "GetTimeStamps", {
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
      INPUT_BUCKET: inputBucket.bucketName,
      OUTPUT_BUCKET: outputBucket.bucketName,
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

  

  const wait1 = new Wait(stack, "Wait 1 Second", {
    time: WaitTime.duration(Duration.seconds(1))
  } )

  const jobFailed = new Fail(stack, "Job Failed...", {
    cause: "Face Detection Failed",
    error: "Could not get jobStatus === 'SUCCEEDED'"
  })

  const jobSucceeded = new Succeed(stack, "Execution Succeeded!")

  const updateJobStatus = new LambdaInvoke(stack, "Check Job Status", {
    lambdaFunction: checkStatus,
    inputPath: "$.body",
    outputPath: "$.Payload"
  })

  const getTimestampsAndFacesTask = new LambdaInvoke(stack, "Get Timestamps and Faces", {
    lambdaFunction: getTimestampsAndFaces,
    inputPath: "$.body",
    outputPath: "$.Payload"
  })

  const detectFacesTask = new LambdaInvoke(stack, "Start Face Detection", {
    lambdaFunction: startFaceDetection,
    inputPath: "$.body",
    outputPath: "$.Payload"
  })

  const blurFacesTask = new LambdaInvoke(stack, "Blur Faces in the Video", {
    lambdaFunction: blurFaces,
    inputPath: "$.body",
    outputPath: "$.Payload"
  })

  const choice = new Choice(stack, "Job finished?")

  choice.when(Condition.stringEquals("$.body.job_status", "IN_PROGRESS"), wait1.next(updateJobStatus) )

  choice.when(Condition.stringEquals("$.body.job_status", "SUCCEEDED"), getTimestampsAndFacesTask.next(blurFacesTask).next(jobSucceeded))

  choice.otherwise(jobFailed)


  const stateDefinition = Chain.start(detectFacesTask).next


  const definitionBody = DefinitionBody.fromChainable(updateJobStatus.next(choice))




  const stateMachine = new StateMachine(stack, "StateMachine", {
    definitionBody: definitionBody
  })

  const api = new Api(stack, "Api",
    {
      routes: {
        "GET /start-machine": {
          function: {
            handler: "./stacks/lambdas/startMachine.handler",
            environment: {
              STATE_MACHINE: stateMachine.stateMachineArn
            }
          }
        }
      }
    }
  )

  api.attachPermissionsToRoute("GET /start-machine", [[stateMachine, "grantStartExecution"],])

  


  

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
    ApiEndpoint: api.url
  });
}
