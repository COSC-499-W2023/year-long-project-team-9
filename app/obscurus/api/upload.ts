import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Api } from 'sst/node/api'
import {Bucket} from 'sst/node/bucket'



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const bucket = Bucket.inputBucket.bucketName
    const { key, fileExt } = req.body
    console.log("data " + fileExt)
    try {
      const key = `${crypto.randomUUID()}.${fileExt}`;
        const command = new PutObjectCommand({
            ACL: "public-read",
            Key: key,
            Bucket: bucket,
          });
          const url = await getSignedUrl(new S3Client({}), command);
          res.status(200).send({key})
      } catch (err) {
        res.status(500).json({ error: 'Failed...' })
      }
    
  }