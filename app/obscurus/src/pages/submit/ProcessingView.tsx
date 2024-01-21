import Layout from "@/components/layout";
import crypto from "crypto";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { FormEvent, useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/router";
import { useCurrentTheme } from "@/components/hooks/useCurrentTheme";
import { useTheme } from "next-themes";
import { CalendarIcon } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.inputBucket.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}


const exampleText = "Hello everyone,\n\nFor this week's Spanish lesson, please record a video of yourselves ordering three separate items from a fast food menu in Castilian Spanish.\n\nFor one of the three items, add a modification like extra cheese or no tomato.";

const ProcessingView = ({ url }: { url: string }) => {
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
      console.error("Upload failed:", response.statusText);
      return;
    }

    const location = response.headers.get("Location") || url.split("?")[0];
    window.location.href = location;
    console.log("Upload successful:", location);
  };

  const router = useRouter();

  

  return (
    <Layout>
      <div className="grid  justify-items-center items-center p-10 gap-10">
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
            id="first"
              cx="30"
              cy="30"
              r="27"
              fill={useCurrentTheme("background")}
              stroke={useCurrentTheme("primary")}
              strokeWidth="6"
            />
          </Link>

          <circle
            cx="826"
            cy="30"
            r="27"
            fill={useCurrentTheme("background")}
            stroke="#CBD5E1"
            strokeWidth="6"
          />
          <circle
            cx="627"
            cy="30"
            r="27"
            fill={useCurrentTheme("background")}
            stroke="#CBD5E1"
            strokeWidth="6"
          />
          <circle
            cx="428"
            cy="30"
            r="27"
            fill={useCurrentTheme("background")}
            stroke="#CBD5E1"
            strokeWidth="6"
          />
          <Link href="/submit/Upload">
            <circle
              cx="229"
              cy="30"
              r="27"
              fill={useCurrentTheme("background")}
              stroke="#CBD5E1"
              strokeWidth="6"
            />
          </Link>
        </svg>

        <div className="grid py-5 gap-3">
          <div className="text-3xl font-bold py-5">
            Here is the video request from <span className="text-blue-600">Daniel Woods</span>
          </div>
          <Card id="previewCard" className="drop-shadow-md border-2 border-accent bg-background h-[500px[">
            <CardContent className="grid h-full">
              <div id="prevTitle" className="pt-6 grid grid-row-3 pb-6">
                  <CardTitle className="break-all text-2xl">Spanish Lesson #2</CardTitle>
                
              </div>

              <div id="prevClient">
                <Label className="font-bold">From</Label>
                  <ul>
                      <div className="break-all text-primary indent-2 pt-2 pb-2 font-bold">
                        daniel.woods@gmail.com
                      </div>
                  </ul>
              </div>
              <div
                id="prevDescAndData"
                className="grid grid-cols-2 left-justify gap-5 pt-2"
              >
                <div id="prevDesc">
                  <Label className="font-bold">Request Description</Label>
                  <Textarea
                    className="bg-accent resize-none"
                    value={exampleText}
                    readOnly
                    rows={9}

                  />
                </div>
                <div className="grid grid-row-4 font-bold">
                  <div id="prevBlurred">
                    <Label className=''>Video Processing</Label>
                      <div className="w-full ">
                        Blurred
                      </div>
                  </div>
                  <div id="prevDate" className="pb-1.5 ">
                    <Label>Due Date</Label>
                    <div className="flex items-center" >
                      <CalendarIcon className="mr-2"  height={20} width={20}/>
                      <div className="text-base">December 3, 2023</div>
                    </div>
                  </div>
                  <div id="prevLanguage" className="pb-1.5">
                    <Label>Video Language</Label>
                      <div className="w-full" >
                        Language
                      </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center gap-10 justify-end py-5">
            <div className="flex gap-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I accept this request
              </label>
            </div>
            <div className="flex gap-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{" "}
                <a className="visited:text-purple-500 text-blue-500">
                  terms of service
                </a>
              </label>
            </div>
            <div>
              <Button
                type="submit"
                className=" justify-self-end px-8 font-extrabold"
                onClick={() => router.push("/submit/Upload")}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProcessingView;
