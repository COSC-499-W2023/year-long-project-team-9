import { SSTConfig } from "sst";
import { Bucket, NextjsSite} from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "front-end",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const bucket = new Bucket(stack, "public");
      const site = new NextjsSite(stack, "site", {
        bind: [bucket],
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
