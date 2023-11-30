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
  new Service(stack, "processVideo", {
    path: "./service",
  });

  const site = new NextjsSite(stack, "site", {
    bind: [bucket, table],
    environment: { TABLE_NAME: table.tableName },
  });

  stack.addOutputs({
    SiteUrl: site.url,
  });
}
