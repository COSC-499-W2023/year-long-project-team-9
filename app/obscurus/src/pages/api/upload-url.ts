import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Api } from 'sst/node/api';
import { Bucket } from 'sst/node/bucket';
import crypto from 'crypto'; // Import the crypto module

type ResponseData = {
  message: string;
  url?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
    const bucket = Bucket.inputBucket.bucketName; // Get the bucket name from SST Bucket
    const { key, fileExt } = req.body;
    console.log(key)
    try {
        // Generate a unique key if it's not provided
        const objectKey = key || `${crypto.randomUUID()}.${fileExt}`;

        const command = new GetObjectCommand({
            Bucket: bucket,
            Key: objectKey,
        });

        const url = await getSignedUrl(new S3Client({}), command);

        res.status(200).json({ message: 'Success', url });
    } catch  {
        res.status(500).json({ message: 'Upload failed...' });
    }
}
