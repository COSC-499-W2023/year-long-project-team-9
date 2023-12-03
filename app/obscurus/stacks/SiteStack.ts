import { HostedZone } from "aws-cdk-lib/aws-route53";
import {
  StackContext,
  NextjsSite,
  Bucket,
  Table,
  Service,
} from "sst/constructs";

export default function SiteStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");
  const table = new Table(stack, "counter", {
    fields: { counter: "string" },
    primaryIndex: { partitionKey: "counter" },
  });
//   const service = new Service(stack, "processVideo", {
//     path: "./service",
//     bind: [bucket],
//   });

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
}
