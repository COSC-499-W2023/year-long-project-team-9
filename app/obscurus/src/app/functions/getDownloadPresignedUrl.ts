"use server"
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Bucket } from "sst/node/bucket";

async function getDownloadPresignedUrl(submissionId: string) {
  console.log("getDownloadPresignedUrl called");
  const bucket = Bucket.outputBucket.bucketName;
  const command = new GetObjectCommand({
    Key: submissionId + ".mp4",
    Bucket: bucket,
  });
  const url = await getSignedUrl(new S3Client({}), command, { expiresIn: 3600 });
  console.log("Download URL", url);
  return url;
}

export default getDownloadPresignedUrl;
