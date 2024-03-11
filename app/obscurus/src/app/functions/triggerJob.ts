"use server"
import { Job } from "sst/node/job";
import updateStatus from "./updateStatus";
import { f } from "node_modules/nuqs/dist/serializer-RqlbYgUW";

const triggerJob = async (submissionId: string, fileExt: string) => {

  try {
    console.log("In job, received submissionId " + submissionId);
    console.log("In job, received fileExt " + fileExt);

    const { jobId } = await Job.SteveJobs.run({
      payload: {
        submissionId: submissionId,
        fileExt: fileExt,
      },
    });


    return("Video jobbed successfully");
  } catch {
    updateStatus("FAILED", submissionId);

    return("Failed to job...");
  }

};

export { triggerJob };
