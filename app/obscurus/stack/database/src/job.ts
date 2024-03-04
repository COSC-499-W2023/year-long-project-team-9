import { JobHandler } from "sst/node/job";

declare module "sst/node/job" {
  export interface JobTypes {
    SteveJobs: {
      submissionId: string;
    };
  }
}
