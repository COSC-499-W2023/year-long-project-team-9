import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import {
  StackContext,
  NextjsSite,
  Bucket,
  Function,
  Job,
  Service,
  Cognito,
  Config,
  Queue,
  use,
} from "sst/constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Api } from "./Api";
import { Database } from "./Database";
import {SteveJobs as steveJobs, rekognitionPolicyStatement} from "./Process"

export default function SiteStack({ stack }: StackContext) {


   //Create secret keys
   const USER_POOL_WEB_CLIENT_ID_KEY = new Config.Secret(
    stack,
    "USER_POOL_WEB_CLIENT_ID_KEY"
  );

  // Create secret keys
  const USER_POOL_ID_KEY = new Config.Secret(stack, "USER_POOL_ID_KEY");

  const api = use(Api);

  const rds = use(Database)

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
    //   preAuthentication: "./packages/core/src/preAuthentication.main",
    //   postAuthentication: "./packages/core/src/postAuthentication.main",
    // },
  });

  // Allow authenticated users invoke API
  // auth.attachPermissionsForAuthUsers(stack, [api]);

  const site = new NextjsSite(stack, "site", {
    path: "./packages/web",
    bind: [inputBucket, outputBucket, rds, api, steveJobs],
    permissions: [rekognitionPolicyStatement],
  });

  site.attachPermissions([rekognitionPolicyStatement]);

  steveJobs.bind([site]);

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
    ApiEndpoint: api.url,
    UserPoolId: auth.userPoolId,
    IdentityPoolId: auth.cognitoIdentityPoolId,
    UserPoolClientId: auth.userPoolClientId,
  });
}
