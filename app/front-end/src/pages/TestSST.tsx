import Layout from "@/components/layout";
// import crypto from "crypto";
// import { Bucket } from "sst/node/bucket";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Table } from "sst/node/table";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  GetCommand,
  UpdateCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import {useEffect, useState} from "react";

export async function getServerSideProps() {
  // const command = new PutObjectCommand({
  //   ACL: "public-read",
  //   Key: crypto.randomUUID(),
  //   Bucket: Bucket.public.bucketName,
  // });
  // const url = await getSignedUrl(new S3Client({}), command);

  const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

  const get = new GetCommand({
    TableName: process.env.TABLE_NAME,
    Key: {
      counter: "hits",
    },
  });
  const results = await db.send(get);

  let count = results.Item ? results.Item.tally : 0;

  // const update = new UpdateCommand({
  //   TableName: Table.counter.tableName,
  //   Key: {
  //     counter: "hits",
  //   },
  //   UpdateExpression: "SET tally = :count",
  //   ExpressionAttributeValues: {
  //     ":count": ++count,
  //   },
  // });

  // await db.send(update);

  return { props: { count } };
}
const TestSST = (count: string) => {


  return (
    <Layout>
      <div>
        {count}
      </div>
    </Layout>
  );
};

export default TestSST;
