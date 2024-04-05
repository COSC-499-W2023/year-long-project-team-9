"use server";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Bucket } from "sst/node/bucket";

async function getProfileImgPresignedUrl(submissionId: string): Promise<string> {
  console.log("getProfileImgPresignedUrl called for email:", submissionId);
  const bucketName = Bucket.ChumBucket.bucketName;
  const objectKey = `${submissionId}`;
  
  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: objectKey,
  });

  const url = await getSignedUrl(new S3Client({}), command, {
    expiresIn: 3600,
  });
  console.log("Generated download URL:", url);
  return url;
}

export default getProfileImgPresignedUrl;
