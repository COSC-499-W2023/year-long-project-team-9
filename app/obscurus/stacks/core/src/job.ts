import { JobHandler } from "sst/node/job";

declare module "sst/node/job" {
  export interface JobTypes {
    SteveJobs: {
      requestId: string;
      submissionId: string;
    };
  }
}

