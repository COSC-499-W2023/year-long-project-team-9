import Layout from "@/components/layout";
import crypto from "crypto";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/router";
import { useCurrentTheme } from "@/components/hooks/useCurrentTheme";
import NestedLayout from "@/components/nested-layout";
import { CalendarIcon, Circle, Pause } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { DotLoader, PulseLoader } from "react-spinners";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Webcam from "react-webcam";
import {Accept}  from "./accept";
import {Upload} from "./upload"

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.inputBucket.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}

const exampleText =
  "Hello everyone,\n\nFor this week's Spanish lesson, please record a video of yourselves ordering three separate items from a fast food menu in Castilian Spanish.\n\nFor one of the three items, add a modification like extra cheese or no tomato.";

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
      console.error("Upload failed:", response.statusText);
      return;
    }

    const location = response.headers.get("Location") || url.split("?")[0];
    window.location.href = location;
    console.log("Upload successful:", location);
  };

  const [file, setFile] = useState<File | undefined>(undefined);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const [record, setRecord] = useState(false);

  const webcamRef = useRef<Webcam>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [capturing, setCapturing] = useState<boolean>(false);
  const [recordedChunks, setRecordedChunks] = useState<BlobPart[]>([]);

  const handleStartCaptureClick = () => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current!.stream!, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data && event.data.size > 0) {
      setRecordedChunks((prev) => prev.concat(event.data));
    }
  };

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current!.stop();
    setCapturing(false);
  };

  const handleSaveAndUpload = async () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const file = new File([blob], "webcam-video.webm", {
        type: "video/webm",
      });

      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "video/webm",
          },
          body: file,
        });

        if (response.ok) {
          const location =
            response.headers.get("Location") || url.split("?")[0];
          window.location.href = location;
          console.log("Upload successful:", location);
        } else {
          console.error("Upload failed:", response.statusText);
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };

  const primary = useCurrentTheme("primary");

  const background = useCurrentTheme("background");

  const router = useRouter();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, current]);

  return (
    <NestedLayout pos={1}>
        <Carousel setApi={setApi} className="w-full max-w-lg">
          <CarouselContent>
            <CarouselItem>
              <Accept />
            </CarouselItem>
            <CarouselItem>
              <Upload url={url} />
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold py-10">Confirm</div>
                <Card
                  id="previewCard"
                  className="drop-shadow-md border-2 border-accent bg-background "
                >
                  <CardContent className="grid h-full">
                    <div id="prevTitle" className="pt-6 grid grid-row-3 pb-6">
                      <CardTitle className="break-all text-2xl">
                        Spanish Lesson #2
                      </CardTitle>
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
                          <Label className="">Video Processing</Label>
                          <div className="w-full ">Blurred</div>
                        </div>
                        <div id="prevDate" className="pb-1.5 ">
                          <Label>Due Date</Label>
                          <div className="flex items-center">
                            <CalendarIcon
                              className="mr-2"
                              height={20}
                              width={20}
                            />
                            <div className="text-base">December 3, 2023</div>
                          </div>
                        </div>
                        <div id="prevLanguage" className="pb-1.5">
                          <Label>Video Language</Label>
                          <div className="w-full">Language</div>
                        </div>
                        <div
                          id="prevTerms"
                          className="flex items-center space-x-10"
                        >
                          <Label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-none">
                            See the{" "}
                            <a
                              href=""
                              target="_blank"
                              className="text-blue-600 hover:underline"
                            >
                              terms and conditions
                            </a>{" "}
                            here
                          </Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col justify-evenly items-center w-full h-full justify-items-center ">
                <div className="text-2xl font-bold">Processing...</div>
                <DotLoader color={useCurrentTheme("accent")} />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold py-10">End</div>
                <Card
                  id="previewCard"
                  className="drop-shadow-md border-2 border-accent bg-background"
                >
                  <CardContent className="grid h-full">
                    <div id="prevTitle" className="pt-6 grid grid-row-3 pb-6">
                      <CardTitle className="break-all text-2xl">
                        Spanish Lesson #2
                      </CardTitle>
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
                          <Label className="">Video Processing</Label>
                          <div className="w-full ">Blurred</div>
                        </div>
                        <div id="prevDate" className="pb-1.5 ">
                          <Label>Due Date</Label>
                          <div className="flex items-center">
                            <CalendarIcon
                              className="mr-2"
                              height={20}
                              width={20}
                            />
                            <div className="text-base">December 3, 2023</div>
                          </div>
                        </div>
                        <div id="prevLanguage" className="pb-1.5">
                          <Label>Video Language</Label>
                          <div className="w-full">Language</div>
                        </div>
                        <div
                          id="prevTerms"
                          className="flex items-center space-x-10"
                        >
                          <Label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-none">
                            See the{" "}
                            <a
                              href=""
                              target="_blank"
                              className="text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              terms and conditions
                            </a>{" "}
                            here
                          </Label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Pagination className="py-5">
          <PaginationContent>
            {/* <PaginationItem>
            <PaginationPrevious href="../"/>
          </PaginationItem> */}
            <PaginationItem>
              <PaginationLink
                variant={"ghost"}
                className={current === 1 ? "font-extrabold text-lg text-blue-400" : ""}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                variant={"ghost"}
                className={current === 2 ? "font-extrabold text-lg text-blue-400" : ""}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                variant={"ghost"}
                className={current === 3 ? "font-extrabold text-lg text-blue-400" : ""}
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                variant={"ghost"}
                className={current === 4 ? "font-extrabold text-lg" : ""}
              >
                4
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                variant={"ghost"}
                className={current === 5 ? "font-extrabold text-lg" : ""}
              >
                5
              </PaginationLink>
            </PaginationItem>
            {/* <PaginationItem>
            <PaginationNext href="" />
          </PaginationItem> */}
          </PaginationContent>
        </Pagination>
    </NestedLayout>
  );
};

export default Index;
