"use server"
import { Job } from "sst/node/job";

const triggerJob = async (submissionId: string) => {
  console.log("In job, received submissionId " + submissionId);

  const { jobId } = await Job.SteveJobs.run({
    payload: {
      submissionId: submissionId,
    },
  });

  return("Video jobbed successfully");
};

export { triggerJob };
