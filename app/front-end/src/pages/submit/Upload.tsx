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

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.public.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}
const Upload = ({ url }: { url: string }) => {
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
          <rect x="49" y="24" width="160" height="12.8" fill="#0F172A" />
          <Link href="/submit">
            <circle
              cx="30"
              cy="30"
              r="27"
              fill="#0F172A"
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
          <circle
            cx="229"
            cy="30"
            r="27"
            fill="white"
            stroke="#0F172A"
            stroke-width="6"
          />
        </svg>

        <div className="grid justify-items-center border-dashed border-black border rounded-lg w-[500px] bg-secondary">
          <form onSubmit={handleSubmit} className="">
            <div className="grid w-full gap-10 h-full  max-w-sm items-center rounded-xl p-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 364.92"
                width={150}
                fill="0F172A"
                className="justify-self-center"
              >
                <path
                  fill-rule="nonzero"
                  d="M359.34 124.66c-13.56 6.7-25.71 15.36-37.41 24.9l-20.13-23.03c14.81-13.74 32.08-24.49 50.64-32.39-37.56-66.54-128.4-83.94-188.3-37.42-21.75 16.84-38.26 42.04-44.61 75.42l-2 10.43-10.4 1.84c-10.19 1.78-19.29 4.24-27.27 7.36-49.8 19.27-63.78 74.7-33.31 116.79 13.04 17.91 29.66 36.17 51.47 39.21h30.49c-.21 3-.32 6.02-.32 9.07 0 7.34.62 14.53 1.82 21.53H97.53l-1.92-.17c-30.53-3.88-55.62-26.61-73.75-51.72C-20.41 228.28.4 149.83 68.93 123.25c7.15-2.79 14.8-5.12 22.86-6.99 9.15-36.34 28.65-64.32 53.72-83.74C222.7-27.29 338.58-1.8 382.79 86.08c6.65-1.05 13.31-1.58 19.92-1.5 98.9.73 138.01 127.2 86.69 195.33-20.57 27.29-52.12 50.51-84.61 58.05l-3.41.41h-19.81a128.362 128.362 0 0 0 1.5-30.6h16.61c24.15-5.81 49.91-25.68 65.23-46.16 36.46-48.56 10.58-146.05-62.41-146.51-14.26-.12-29.11 3.33-43.16 9.56zM234.73 364.92h42.56c9.95 0 18.11-8.16 18.11-18.11v-58.64h31.04c6.54-.28 11.18-2.44 13.87-6.52 7.27-10.91-2.66-21.68-9.55-29.27-19.55-21.46-53.22-53.23-62.87-64.59-7.32-8.08-17.72-8.08-25.04 0-9.97 11.64-44.84 45.77-63.43 66.64-6.45 7.27-14.42 17.17-7.72 27.22 2.76 4.08 7.35 6.24 13.89 6.52h31.04v58.64c0 9.84 8.15 18.11 18.1 18.11z"
                />
              </svg>
              {/* <Label htmlFor="picture">Video</Label> */}
              {/* <Input id="picture" type="file" className="bg-secondary" /> */}
              <div className="grid grid-cols-2 gap-5">
                <Button
                  type="submit"
                  className=" justify-self-start px-8 font-extrabold"
                >
                  Upload
                </Button>
                <Button
                  type="submit"
                  className=" justify-self-end font-extrabold"
                >
                  Record Video
                </Button>
              </div>
              <div className="grid items-center text-sm justify-items-center w-full font-bold">
                <div>MP4, WMV, MOV, and AV1</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Upload;
