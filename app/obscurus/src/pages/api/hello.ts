import { NextApiRequest, NextApiResponse } from "next";
import { Job } from "sst/node/job";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body.json()
  console.log(data);
  const { jobId } = await Job.request.run({
    payload: {
      requestId: data.requestId,
    },
  });

  res.status(200).send(jobId);
}
