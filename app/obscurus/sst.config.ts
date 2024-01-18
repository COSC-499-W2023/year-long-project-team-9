import { SSTConfig } from "sst";
import SiteStack from "./stacks/SiteStack";

export default {
  config(_input) {
    return {
      name: "obscurus",
      region: "us-west-2",
    };
  },
  stacks(app) {
    app.stack(SiteStack);
  },
} satisfies SSTConfig;