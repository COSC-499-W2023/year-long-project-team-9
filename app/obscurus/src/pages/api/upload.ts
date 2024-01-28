import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Lambda } from "@aws-sdk/client-lambda";
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { Function as f } from "sst/node/function";
import { Bucket } from "sst/node/bucket";
import { Api } from "sst/node/api"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const bucketName = Bucket.inputBucket.bucketName;
    const key = crypto.randomUUID();

    // Determine file extension based on client's input or other criteria
    const fileType = req.body.fileType; // Make sure to send this from your client

    if (fileType === "webm") {
      // Trigger the Lambda function for conversion
      const lambda = new Lambda({});
      console.log(f.ConvertToMp4.functionName);
      await lambda.invoke({
        FunctionName: f.ConvertToMp4.functionName,
        Payload: JSON.stringify({ bucket: bucketName, key: `${key}.mp4` }),
      });
    }

    const s3Client = new S3Client({});
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: `${key}.${fileType}`,
      ACL: "bucket-owner-full-control",
    });

    const url = await getSignedUrl(s3Client, command);

    

    res.status(200).json({ url });
  } catch (err) {
    console.error("Error in generating pre-signed URL:", err);
    res.status(500).json({ error: "Upload failed..." });
  }
}
