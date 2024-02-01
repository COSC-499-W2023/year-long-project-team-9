import { use, StackContext, Api as ApiGateway } from "sst/constructs";
import { Database as rds } from "./Database";
import { SteveJobs as steveJobs } from "./Process";

export function Api({ stack }: StackContext) {
  const api = new ApiGateway(stack, "Api", {
    defaults: {
      function: {
        bind: [use(rds)],
      },
      authorizer: "iam",
    },
    routes: {
      "GET /private": "./packages/functions/private.main",
      "GET /public": {
        function: "./packages/functions/public.main",
        authorizer: "none",
      },
      // "GET /start-machine": {
      //   function: {
      //     handler: "./packages/functions/startMachine.handler",
      //     environment: {
      //       STATE_MACHINE: stateMachine.stateMachineArn,
      //     },
      //   },
      // },
      "GET /getUsers": {
        function: {
          handler: "./packages/functions/listUsers.handler",
          timeout: 20,
        },
      },
      "GET /getRequests": {
        function: {
          handler: "./packages/functions/listRequests.handler",
          timeout: 20,
        },
      },
      "POST /secrets": {
        function: {
          handler: "./packages/functions/secrets.handler",
          timeout: 20,
        },
      },
      "POST /processVideo": {
        function: {
          handler: "./packages/functions/process.handler",
          timeout: 20,
          permissions: [steveJobs, inputBucket],
          bind: [steveJobs, inputBucket],
        },
      },
      "POST /createRequest": {
        function: {
          handler: "./packages/functions/createRequest.handler",
          timeout: 20,
          permissions: [steveJobs, inputBucket, rds],
          bind: [steveJobs, inputBucket, rds],
        },
      },
      "POST /createUser": {
        function: {
          handler: "./packages/functions/createUser.handler",
          timeout: 20,
          permissions: [steveJobs, inputBucket, rds],
          bind: [steveJobs, inputBucket, rds],
        },
      },
      "GET /getSubmissions": {
        function: {
          handler: "./packages/functions/listSubmissions.handler",
          timeout: 20
        },
      },
    },
  });
  stack.addOutputs({
    Api: api.url,
  });

  return api;
}
