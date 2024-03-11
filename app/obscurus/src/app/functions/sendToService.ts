"use server"
import { Job } from "sst/node/job";

const sendToService = async (submissionId: string) => {
  console.log("In job, received submissionId " + submissionId);


};

export { sendToService };
