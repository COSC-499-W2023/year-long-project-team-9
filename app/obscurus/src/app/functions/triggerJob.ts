"use server"
import axios from 'axios';

const triggerJob = async (submissionId: string) => {
  console.log("In job, received submissionId " + submissionId);
  const url = process.env.NEXT_PUBLIC_SERVICE_URL;

  console.log("Url", url);
  const response = await axios.post(`${url}/process-video`, {
    submissionId: submissionId,
  });

  if (response.status === 200) {
    return "Video job started successfully";
  } else {
    throw new Error('Failed to start video job');
  }
};


export { triggerJob };
