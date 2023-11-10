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
import { useEffect, useState } from "react";
<<<<<<< Updated upstream
=======
import { Button } from "@/components/ui/button";
>>>>>>> Stashed changes

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.public.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

  const get = new GetCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      counter: "hits",
    },
  });
  const results = await db.send(get);

  let count = results.Item ? results.Item.tally : 0;

  const update = new UpdateCommand({
    TableName: Table.counter.tableName,
    Key: {
      counter: "hits",
    },
    UpdateExpression: "SET tally = :count",
    ExpressionAttributeValues: {
      ":count": ++count,
    },
  });

  await db.send(update);

<<<<<<< Updated upstream
  return { props: { count } };
}
const TestSST = ({url}:{url: string}, count: string) => {
  return (
    <Layout>
      <div>
        {count}
        <div className="grid justify-center items-center">
          <h1 className="text-3xl font-extrabold">My Requests</h1>
          <div>
            <form
              onSubmit={async (e) => {
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
                const location =
                  response.headers.get("Location") || url.split("?")[0];
                window.location.href = location;
                console.log("Upload successful:", location);
              }}
            >
              <input
                title="upload"
                name="file"
                type="file"
                accept="image/jpeg, image/png, video/mp4"
              />
              <button type="submit">Upload</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

=======
  return { props: { count, url } };
}

const TestSST = ({ url, count }: { url: string; count: string }) => {
  return (
    <Layout>
      <div>
        <div className="grid justify-center items-center">
          <h1 className="text-3xl font-extrabold">My Requests</h1>
          <div>
            <form
              onSubmit={async (e) => {
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
                const location =
                  response.headers.get("Location") || url.split("?")[0];
                window.location.href = location;
                console.log("Upload successful:", location);
              }}
            >
              <input
                title="upload"
                name="file"
                type="file"
                accept="image/jpeg, image/png, video/mp4"
              />
              <button type="submit">Upload</button>
            </form>
          </div>
        </div>
        <div className="grid justify-center items-center py-36">
          <div>
            The table in DyanamoDB has been updated {count} times, and does so on render.
          </div>
        </div>
      </div>
    </Layout>
  );
};

>>>>>>> Stashed changes
export default TestSST;
