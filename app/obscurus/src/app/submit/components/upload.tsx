"use client";
import { upload } from "@/app/functions/upload";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Circle,
  LucideUploadCloud,
  Pause,
  Square,
} from "lucide-react";
import crypto from "crypto";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { FormEvent, Suspense, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { useCurrentTheme } from "@/components/hooks/useCurrentTheme";
import { type CarouselApi } from "@/components/ui/carousel";
import Webcam from "react-webcam";
import { Progress } from "@/components/ui/progress";
import { FadeLoader } from "react-spinners";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Upload({ uploadVideo }: any) {
  const [file, setFile] = useState<File | undefined>(undefined);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const triggerJob = async (filename: any) => {
    "Triggering job...";
    console.log(filename);

    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        requestId: filename,
      }),
    });

    if (response.ok) {
      const response = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestId: filename,
        }),
      });
    } else {
      console.error("Error jobbing video:", response.statusText);
    }

    console.log("Video jobbed successfully");
  };

  const handleUploadClick = (e: React.FormEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const file = fileInputRef.current?.files?.[0];
    setFile(file);
    if (!file) {
      console.error("No file selected");
      return;
    }

    const fileExt = file.name.split(".").pop();
    const apiUrl = "/api/upload";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: "hello",
          extension: fileExt,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Response from server:", data);
    } catch (error) {
      console.error("Error during fetch:", error);
    }
    // const response = await fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": file.type,
    //     "Content-Disposition": `attachment; filename*=UTF-8''${s3Key}`,
    //   },
    //   body: file,
    // });

    // if (response.ok) {
    //   console.log("Upload successful");
    //   await triggerJob(s3Key);
    // } else {
    //   console.error("Upload failed:", response.statusText);
    // }

    // const completionStatus = await triggerJob(s3Key);
    // console.log(completionStatus)
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
    setCapturing(false);
    mediaRecorderRef.current?.stop();
  };

  const handleSaveAndUpload = async () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const file = new File([blob], "webcam-video.webm", {
        type: "video/webm",
      });

      const encodedFilename = encodeURIComponent(file.name);

      try {
        console.log("File:", file);
        // const response = await fetch(url, {
        //   method: "PUT",
        //   headers: {
        //     "Content-Type": "video/mp4",
        //     "Content-Disposition": `attachment; filename*=UTF-8''${encodedFilename}`,
        //   },
        //   body: file,
        // });

        // if (response.ok) {
        //   // const location =
        //   //   response.headers.get("Location") || url.split("?")[0];
        //   // window.location.href = location;
        //   console.log("Upload successful:", location);
        //   setIsUploaded(true);
        // } else {
        //   console.error("Upload failed:", response.statusText);
        // }
      } catch (error) {
        console.error("Upload error:", error);
      } finally {
        await triggerJob("test3.mp4");
        console.log("Finished job");
      }
    }
  };

  const primary = useCurrentTheme("primary");

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // const determineNextButtonDisabled = () => {
  //   if (current === count) return true;

  //   if (current === 2 && !file) return true;

  //   return false;
  // };

  // useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     console.log("current");
  //     if (!determineNextButtonDisabled()) {
  //       setCurrent(api.selectedScrollSnap() + 1);
  //     }
  //   });
  // }, [api, current]);

  const [processing, setProcessing] = useState(true);

  const endProcessing = () => {
    console.log("Processing finished!");
  };

  const [isUploaded, setIsUploaded] = useState(false);

  return (
    <div className="flex h-full flex-col p-10 space-y-5">
      <Progress className="my-5" value={10} />

      <div className="flex flex-col h-full w-full justify-content-center  ">
        <form
          onSubmit={handleSubmit}
          className="bg-accent w-full h-full   shadow-sm flex flex-col justify-center items-center space-y-3 border "
        >
          {!record ? (
            <>
              <LucideUploadCloud className="w-48 h-48" />
              <div className="flex justify-center w-full">
                <Label htmlFor="video" className=" text-center text-lg">
                  No file selected
                </Label>
              </div>
              <input
                id="file-input"
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleSubmit}
                accept="video/*.mp4, *.mov"
              />
              <div className="grid grid-cols-2 gap-10">
                <input
                  id="file-input"
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleSubmit}
                  accept="video/*,.mp4"
                />

                <div className="justify-self-start">
                  <Button onClick={handleUploadClick}>Upload</Button>
                </div>
                <div className="justify-self-end">
                  <Button onClick={() => setRecord(true)}>Record</Button>
                </div>
              </div>
              <Separator className="border bg-accent" />
              <div className="flex flex-col space-y-2 items-center text-sm justify-center w-full">
                <div className="font-semibold text-base">
                  Accepted filetypes:
                </div>

                <div className="text-sm text-center text-muted-foreground">
                  {" "}
                  MP4, MOV
                </div>
              </div>
            </>
          ) : (
            <div className="grid grid-rows-[90%__10%] w-full rounded-lg h-full items-center  ">
              <div className=" flex items-center justify-center rounded-md">
                <Suspense fallback={<div>Failed to load webcam</div>}>
                  <div className="container">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      className=" w-full h-full rounded-md"
                    />
                  </div>
                </Suspense>
              </div>

              <div className="flex flex-row items-center  justify-between align-middle p-3 px-5 rounded-lg mx-5 pb-6 h-full">
                {capturing ? (
                  <>
                    <div className="flex justify-center w-full mr-10">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleStopCaptureClick}
                          >
                            <Square className=" fill-primary h-6 w-6 " />
                            <span className="sr-only">Stop Recording</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Stop Recording</TooltipContent>
                      </Tooltip>
                    </div>
                    {/*
                    <Button
                      onClick={handleSaveAndUpload}
                      disabled={!recordedChunks.length}
                      variant={"default"}
                    >
                      Upload
                    </Button> */}
                  </>
                ) : (
                  <>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setRecord(false)}
                        >
                          <ArrowLeft className="h-4 w-4" />
                          <span className="sr-only">Back to upload</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Back</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleStartCaptureClick}
                        >
                          <Circle className="fill-primary h-6 w-6" />
                          <span className="sr-only">Record</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Record</TooltipContent>
                    </Tooltip>
                    <Button type="submit" disabled={!file}>
                      Upload
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Upload;
