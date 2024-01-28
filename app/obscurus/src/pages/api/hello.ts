import type { NextApiRequest, NextApiResponse } from 'next'
import { Service } from 'sst/node/service'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from the API routing built into NextJS!' })
}