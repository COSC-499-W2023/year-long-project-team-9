export async function GET(request: Request) {
  return new Response("This is my parent route");
}

import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import type { NextApiRequest, NextApiResponse } from "next";
import { Api } from "sst/node/api";
import { Bucket } from "sst/node/bucket";

export async function POST(request: Request) {
  const bucket = Bucket.inputBucket.bucketName;

  console.log(request)
  const key = crypto.randomUUID()
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: key,
    Bucket: bucket,
  });
  const url = await getSignedUrl(new S3Client({}), command);
  return new Response("Nice");
}
