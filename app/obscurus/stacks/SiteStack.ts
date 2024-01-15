import {
  StackContext,
  NextjsSite,
  Bucket,
  Table,
  RDS,
  Api,
  Service,
} from "sst/constructs";
import { HostedZone } from "aws-cdk-lib/aws-route53";


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
    customDomain: {
      domainName: "obscurus.me",
      domainAlias: "www.obscurus.me",
      cdk: {
        hostedZone: HostedZone.fromHostedZoneAttributes(stack, "MyZone", {
          hostedZoneId: "Z09403151W7ZFKPC0YJEL",
          zoneName: "obscurus.me",
        }),
      },
    },
  });

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
