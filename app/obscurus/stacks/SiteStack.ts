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
  const service = new Service(stack, "processVideo", {
    path: "./service",
    bind: [bucket],
  });

  const site = new NextjsSite(stack, "site", {
    bind: [bucket, table, service],
    environment: { TABLE_NAME: table.tableName },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
