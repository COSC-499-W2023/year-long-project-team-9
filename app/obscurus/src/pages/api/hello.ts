import { NextApiRequest, NextApiResponse } from "next";
import { Job } from "sst/node/job";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    const data = req.body.requestId

  
    console.log(data);
  
    const { jobId } = await Job.SteveJobs.run ({
      payload: {
        requestId: data,
      },
    });
  
    res.status(200).send("Video processing started!");
  }
