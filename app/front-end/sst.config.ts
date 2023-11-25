import { SSTConfig } from "sst";
import { Bucket, NextjsSite, Table, StackContext } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "front-end",
      region: "ca-central-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket = new Bucket(stack, "public");
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
      });
      
      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
