import {
  StackContext,
  NextjsSite,
  Bucket,
  Table,
  Service,
} from "sst/constructs";
import { Duration } from "aws-cdk-lib/core";

export default function SiteStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");
  const table = new Table(stack, "counter", {
    fields: { counter: "string" },
    primaryIndex: { partitionKey: "counter" },
  });

  new Service(stack, "MyService", {
    path: "./service",
    cdk: {
      container: {
        healthCheck: {
          command: ["CMD-SHELL", "curl -f <http://localhost/> || exit 1"],
          interval: Duration.seconds(15),
          retries: 10,
          startPeriod: Duration.seconds(15),
          timeout: Duration.minutes(1),
        },
      },
    },
  });

  const site = new NextjsSite(stack, "site", {
    bind: [bucket, table],
    environment: { TABLE_NAME: table.tableName },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
