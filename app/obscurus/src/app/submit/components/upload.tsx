"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Circle, LucideUploadCloud, Square } from "lucide-react";
import { FormEvent, Suspense, useRef, useState } from "react";
import { useCurrentTheme } from "@/components/hooks/useCurrentTheme";
import { type CarouselApi } from "@/components/ui/carousel";
import Webcam from "react-webcam";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import VideoPlayer from "../video-player";
import { useQueryState } from "nuqs";
import { Separator } from "@/components/ui/separator";

const Upload = ({
  getPresignedUrl,
  triggerJob,
}: {
  getPresignedUrl: (submissionId: string, fileExt: string) => Promise<string>;
  triggerJob: (submissionId: string) => Promise<string>;
}) => {
  const [requestId, setRequestId] = useQueryState("requestId");
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [file, setFile] = useState<File | undefined>(undefined);

  console.log("submissionId in upload", submissionId);

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.FormEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleProcessVideo = async (e: any) => {
    setLoading(true);
    if (submissionId) {
      const res = await triggerJob(submissionId);
      console.log(res);
      return res;
    } else {
      return "Failed to run Job";
    }
  };

  const [uploading, setUploading] = useState(false)
  const [objectURL, setObjectURL] = useState<string | null>(null);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setUploading(true)
    const file = fileInputRef.current?.files?.[0];
    setFile(file);
    if (!file) {
      console.error("No file selected");
      return;
    }
    const fileExt = file.name.split(".").pop() || "mp4";

    console.log(fileExt);
    console.log(submissionId);

    if (submissionId) {
      const url = await getPresignedUrl(submissionId, fileExt);

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
          "Content-Disposition": `attachment; filename*=UTF-8''${submissionId}`,
        },
        body: file,
      });

      if (response.ok) {
        console.log("Upload successful");
        const src = URL.createObjectURL(file);
        console.log("ObjectURL", src)

        setObjectURL(src);

      } else {
        console.error("Upload failed:", response.statusText);
      }
    } else {
      return 500;
    }
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

  const handleDataAvailable: (event: BlobEvent) => void = (event) => {
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
        const fileExt = file.name.split(".").pop() || "mp4";

        console.log(fileExt);
        console.log(submissionId);

        if (submissionId) {
          const url = await getPresignedUrl(submissionId, fileExt);
          const response = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "video/mp4",
              "Content-Disposition": `attachment; filename*=UTF-8''${encodedFilename}`,
            },
            body: file,
          });
          console.log("fine here")

          if (response.ok) {
            console.log("Upload successful");
            console.log("hello")
            const src = URL.createObjectURL(file);
            setObjectURL(src);
            console.log("ObjectURL", objectURL)
            return;
          } else {
            console.error("Upload failed:", response.statusText);
          }
        } else {
          console.log("No submissionid");
        }
      } catch (error) {
        console.error("Upload error:", error);
      } finally {
        console.log("Finished job");
      }
    }
  };

  const reset = () => {
    setFile(undefined);
    setObjectURL(null);
  };

  const [isUploaded, setIsUploaded] = useState(false);
  const [upload, setUpload] = useQueryState("upload");

  return (
    <>
      <div className="flex h-full flex-col p-10 space-y-5 items-center justify-center">
        {/* <Progress value={10} /> */}
        <div className="w-full h-full flex flex-col justify-center items-center space-y-3 border rounded-md border-card">
          {!record ? (
            <>
              {uploading ? (
                <div className="flex flex-col w-fit h-full">
                  <div className="flex p-3 flex-col">
                    <div className="flex flex-col w-full h-full">
                      <div className="">
                        <VideoPlayer
                          videoUrl={objectURL}
                          filename={file?.name || "No file selected."}
                        />
                      </div>

                      <div className="flex w-full mr-4 mt-4 justify-between">
                        <Button onClick={reset} variant={"outline"}>
                          Choose Another File
                        </Button>
                        <Button onClick={handleProcessVideo}>Upload</Button>
                        {loading ? <div>loading</div> : ""}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col w-full h-full p-10">
                  <div className="flex flex-col p-5 w-full h-full justify-end items-center">
                    <div className="w-full h-[50%] flex flex-col items-center ">
                      <LucideUploadCloud className="w-48 h-48 " />
                    </div>

                    <div className="flex flex-col justify-around w-full h-full p-4">
                      <input
                        id="file-input"
                        type="file"
                        ref={fileInputRef}
                        style={{ display: "none" }}
                        onChange={handleSubmit}
                        accept="video/*.mp4, *.mov"
                      />

                      <div className="grid grid-cols-2 space-x-3 w-full">
                        <div className=" flex justify-center">
                          <Button onClick={handleUploadClick}>Upload</Button>
                        </div>
                        <div className="flex justify-center">
                          <Button onClick={() => setRecord(true)}>
                            Record
                          </Button>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 items-center text-sm justify-center w-full">
                        <div className="font-semibold text-base">
                          Accepted filetypes:
                        </div>

                        <div className="text-sm text-center text-muted-foreground">
                          {" "}
                          MP4, MOV
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}{" "}
            </>
          ) : (
            <div className="grid grid-rows-[90%__10%] w-full rounded-lg h-full items-center  ">
              <div className=" flex items-center justify-center rounded-md">
                <Suspense fallback={<div>Failed to load webcam</div>}>
                  <div className=" relative ">
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      className=" w-full h-full rounded-md"
                    />

                    <div className="relative bottom-14 left-64">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={handleStartCaptureClick}
                          >
                            <Circle className="fill-red-400 h-6 w-6" />
                            <span className="sr-only">Record</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Record</TooltipContent>
                      </Tooltip>
                    </div>
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

                    <Button
                      onClick={handleSaveAndUpload}
                      disabled={!recordedChunks.length}
                      variant={"default"}
                    >
                      Upload
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Upload;
