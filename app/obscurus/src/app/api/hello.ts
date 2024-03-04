import { NextApiRequest, NextApiResponse } from "next";
import { Job } from "sst/node/job";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const data = req.body.requestId


    console.log("Received requestId " + data);

    const { jobId } = await Job.SteveJobs.run ({
      payload: {
        submissionId: "x"
      },
    });

    res.status(200).send("Video processing started!");
  }
