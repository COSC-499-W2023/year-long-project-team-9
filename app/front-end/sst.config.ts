import { HostedZone } from "aws-cdk-lib/aws-route53";
import { SSTConfig } from "sst";
import { Bucket, NextjsSite, Table, StackContext } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "obscurus",
      region: "ca-central-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket =new Bucket(stack, "public");
      const table = new Table(stack, "counter", {
        fields: {
          counter: "string",
        },
        primaryIndex: { partitionKey: "counter" },
      });
      const site = new NextjsSite(stack, "site", {
        bind: [bucket, table],
        environment: {
          TABLE_NAME: table.tableName,
        },
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
    });
  },
} satisfies SSTConfig;
