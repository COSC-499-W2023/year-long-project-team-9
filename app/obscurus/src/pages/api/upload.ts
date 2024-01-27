import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Api } from 'sst/node/api'
import {Bucket} from 'sst/node/bucket'
 
type ResponseData = {
  message: string
}
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const api = Api.Api.url;
    const bucket = Bucket.inputBucket.bucketName
    try {
        const command = new PutObjectCommand({
            ACL: "bucket-owner-full-control",
            Key: crypto.randomUUID(),
            Bucket: bucket,
          });
          const url = await getSignedUrl(new S3Client({}), command);
          res.status(200).send({url})
      } catch (err) {
        res.status(500).json({ error: 'Upload failed...' })
      }
  }
  