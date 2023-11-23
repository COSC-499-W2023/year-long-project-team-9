import Layout from "@/components/layout";
import crypto from "crypto";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetCommand,
  UpdateCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import { FormEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.public.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}
const Index = ({ url }: { url: string }) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const file = (e.target as HTMLFormElement).file.files?.[0];
    if (!file) {
      console.error("No file selected");
      return;
    }

    const encodedFilename = encodeURIComponent(file.name);
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
        "Content-Disposition": `attachment; filename*=UTF-8''${encodedFilename}`,
      },
      body: file,
    });

    if (!response.ok) {
      // Handle the error situation
      console.error("Upload failed:", response.statusText);
      return;
    }

    // Assuming the PUT operation returns a URL to the uploaded object
    const location = response.headers.get("Location") || url.split("?")[0];
    window.location.href = location;
    console.log("Upload successful:", location);
  };

  const router = useRouter();

  return (
    <Layout>
      <div className="grid  justify-items-center items-center p-36 gap-10">
        <svg
          width="50%"
          height="60"
          viewBox="0 0 856 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="259" y="24" width="568" height="13" fill="#CBD5E1" />
          <rect x="49" y="24" width="160" height="12.8" fill="#CBD5E1" />
          <Link href="/submit">
            <circle
              cx="30"
              cy="30"
              r="27"
              fill="white"
              stroke="#0F172A"
              stroke-width="6"
            />
          </Link>

          <circle
            cx="826"
            cy="30"
            r="27"
            fill="white"
            stroke="#CBD5E1"
            stroke-width="6"
          />
          <circle
            cx="627"
            cy="30"
            r="27"
            fill="white"
            stroke="#CBD5E1"
            stroke-width="6"
          />
          <circle
            cx="428"
            cy="30"
            r="27"
            fill="white"
            stroke="#CBD5E1"
            stroke-width="6"
          />
          <Link href="/submit/Upload">
            <circle
              cx="229"
              cy="30"
              r="27"
              fill="white"
              stroke="#CBD5E1"
              stroke-width="6"
            />
          </Link>
        </svg>

        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to sell my soul
          </label>
          <Button
            type="submit"
            className=" justify-self-end px-8 font-extrabold"
            onClick={() => router.push("/submit/Upload")}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
