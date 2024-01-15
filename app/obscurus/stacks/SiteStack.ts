import {
  StackContext,
  NextjsSite,
  Bucket,
  RDS,
  Api,
  Service,
} from "sst/constructs";


export default function SiteStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");

  // add RDS construct
  const rds = new RDS(stack, "Database", {
    engine: "postgresql11.13",
    defaultDatabaseName: "obscurus",
    migrations: "./stacks/core/migrations/",
  });

  const api = new Api(stack, "Api", {
    routes: {
      "GET /users": {  function: {
        handler: "./stacks/lambdas/list.handler",
        timeout: 20,
        permissions: [rds],
        bind: [rds],
        environment: {DB_NAME: rds.clusterArn}
      },
    }
    },
  });
  
  const service = new Service(stack, "processVideo", {
    path: "./service",
    port: 8080,
    bind: [bucket],
    cdk: {
      applicationLoadBalancer: false,
      cloudfrontDistribution: false,
      fargateService: {
        circuitBreaker: { rollback: true },
      },
    },
  });

  const site = new NextjsSite(stack, "site", {
    bind: [bucket, rds, api, service],
  });

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
