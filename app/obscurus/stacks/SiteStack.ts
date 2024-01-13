import {
  StackContext,
  NextjsSite,
  Bucket,
  Table,
  RDS,
} from "sst/constructs";

export default function SiteStack({ stack }: StackContext) {
  const bucket = new Bucket(stack, "public");
  const table = new Table(stack, "counter", {
    fields: { counter: "string" },
    primaryIndex: { partitionKey: "counter" },
  });

  // add RDS construct
  const rds = new RDS(stack, "Database", {
    engine: "postgresql11.13",
    defaultDatabaseName: "obscurus",
    migrations: "./migrations/",
  });

  const site = new NextjsSite(stack, "site", {
    bind: [bucket, table, rds],
    environment: { TABLE_NAME: table.tableName },
  });

  stack.addOutputs({
    Site: site.customDomainUrl || site.url,
  });
}
