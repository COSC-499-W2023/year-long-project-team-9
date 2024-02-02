import { SSTConfig } from "sst";
// import { Api } from "stacks/Api";
// import { Auth } from "stacks/Auth";
// import { Database } from "stacks/Database";
// import Web from "stacks/Web";
// import { inputBucket, outputBucket } from "stacks/Buckets";
// import { SteveJobs } from "stacks/Process";
import SiteStack from "./stacks/SiteStack"

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