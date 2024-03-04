"use server";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Bucket } from "sst/node/bucket";
async function getPresignedUrl(submissionId: string) {
  console.log("getPresignedUrl called")
  const bucket = Bucket.inputBucket.bucketName;
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: submissionId,
    Bucket: bucket,
  });
  const url =  await getSignedUrl(new S3Client({}), command);
  console.log("Url", url);
  return url;
}
export default getPresignedUrl;
