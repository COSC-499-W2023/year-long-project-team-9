"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { useQueryState } from "nuqs";
import { FormEvent, Suspense, useEffect, useRef, useState } from "react";
import {
  Archive,
  Trash2,
  ArrowLeft,
  LucideUploadCloud,
  PlaySquare,
  XSquare,
  Square,
  Circle,
  LucideLoader2,
} from "lucide-react";
import { format, set, sub } from "date-fns";
import VideoDisplay from "./video-display";
import Webcam from "react-webcam";
import VideoPlayer from "../video-player";
import { useRouter } from "next/navigation";
import { DotLoader } from "react-spinners";
import { el } from "date-fns/locale";

export default function SubmitDisplay({
  requests,
  searchParams,
  submissions,
  getPresignedUrl,
  getDownloadPresignedUrl,
  triggerJob,
  updateStatus,
}: {
  requests: Requests[];
  searchParams?: {
    counter?: string | null[];
  };
  submissions: Submissions[];
  getPresignedUrl?: (submissionId: string) => Promise<string>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
  triggerJob?: (submissionId: string, fileExt: string) => Promise<string>;
  updateStatus?: (status: string, submissionId: string) => Promise<string>;
}) {
  const [requestId, setRequestId] = useQueryState("requestId");
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [upload, setUpload] = useQueryState("upload");
  const [showingVideo, setShowingVideo] = useQueryState("showVideo");

  const [processedVideo, setProcessedVideo] = useState<string | null>(null);

  if (!requestId) {
    setRequestId(requests && requests[0].requestId);
  }

  const selected = requests.find((item) => item.requestId === requestId);

  // const url = process.env.NEXT_PUBLIC_SERVICE_URL;

  // console.log("URL", url);

  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileExt, setFileExt] = useState<string | "mp4">("mp4");

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.FormEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const getAssociatedSubmission = (requestId: string) => {
    if (requestId) {
      return submissions.find((item) => requestId === item.requestId);
    }
    return null;
  };

  const reset = () => {


  };

  const handleProcessVideo = async (e: any) => {
    setLoading(true);
    if (submissionId && triggerJob && updateStatus) {
      const res = await triggerJob(submissionId, fileExt);

      setLoading(false);


      alert("Job has been triggered");
      setUpload(null);
      router.refresh();
    } else {
      setLoading(false);
      return "Failed to run Job";
    }
  };

  const [uploading, setUploading] = useState(false);
  const [objectURL, setObjectURL] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setUploading(true);
    const file = fileInputRef.current?.files?.[0];
    setFile(file);
    if (!file) {
      console.error("No file selected");
      setUploading(false);
      return;
    }
    const fileExt = file.name.split(".").pop();
    setFileExt(fileExt || "mp4");

    const key = `${submissionId}.${fileExt}`;

    console.log("Key", key);

    if (submissionId && getPresignedUrl) {
      try {
        const url = await getPresignedUrl(key);
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
            "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(
              key
            )}`,
          },
          body: file,
        });

        console.log("Data", response);
        setObjectURL(URL.createObjectURL(file)); // This will trigger useEffect
        console.log("Upload successful");
      } catch (error) {
        console.error("Upload failed:", error);
      }
    }
  };

  useEffect(() => {
    if (objectURL) {
      console.log("New objectURL is available", objectURL);
    }
  }, [objectURL]);

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
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const fileName = `${submissionId}.webm`;
      const file = new File([blob], fileName, { type: "video/webm" });

      setFile(file);

      if (submissionId && getPresignedUrl) {
        const presignedUrl = await getPresignedUrl(fileName);

        const response = await fetch(presignedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "video/webm",
          },
          body: file,
        });

        if (response.ok) {
          console.log("Upload successful");
          setObjectURL(URL.createObjectURL(file));
          setRecord(false);
          setRecordedChunks([]);
        } else {
          console.error("Upload failed:", response.statusText);
          setRecord(false);
          setRecordedChunks([]);
        }
      }
    }
  };

  const handleShowVideo = async () => {
    if (!selected) return;

    if (!showingVideo) {
      setShowingVideo("true");
    } else {
      setShowingVideo(null);
    }
    const submission = submissions.find(
      (sub) => sub.requestId === selected.requestId
    );

    if (submission && submission.status === "COMPLETED") {
      if (getDownloadPresignedUrl) {
        try {
          const url = await getDownloadPresignedUrl(submission.submissionId);
          setProcessedVideo(url);
          console.log("URL", url);
          return url;
        } catch (error) {
          console.error("Failed to get download URL", error);
        }
      }
    } else {
      console.log("No video to display or submission not completed");
      // Handle case when there's no video to display or submission isn't completed
    }
  };

  const router = useRouter();

  // useEffect(() => {
  //   if (!tab)

  // })

  const handleArchive = (requestId: string) => {
    if (updateStatus && requestId) {
      const submission = getAssociatedSubmission(requestId);
      if (submission && submission.status !== "ARCHIVED") {
        updateStatus("ARCHIVED", submission.submissionId);
        return `Status updated to ${submission.status}`;
      }
    }
    return `Failed to archive submission`;
  };

  const handleChooseAnotherFile = () => {
    setUpload(null);
    setFile(undefined);
    setObjectURL(null);
    setLoading(false);
  };

  const Back = () => {
    return (
      <div className="flex flex-row justify-between w-full items-center gap-2">
        <Button variant={"ghost"} onClick={() => setUpload(null)}>
          <Tooltip>
            <TooltipTrigger asChild>
              <ArrowLeft className="w-4 h-4 " />
            </TooltipTrigger>
            <TooltipContent>Back</TooltipContent>
          </Tooltip>
        </Button>
      </div>
    );
  };

  const Toolbar = () => {
    return (
      <div className="flex flex-row justify-between w-full items-center gap-2">
        <div className="flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                disabled={!selected}
                onClick={() => handleArchive(selected?.requestId || "")}
              >
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-2 h-8" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!selected}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex ml-auto pr-1.5">
          {showingVideo ? (
            <Button variant={"destructive"} onClick={handleShowVideo}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <XSquare className="w-4 h-4 " />
                </TooltipTrigger>
                <TooltipContent>Hide Video</TooltipContent>
              </Tooltip>
            </Button>
          ) : (
            <Button
              variant={"ghost"}
              onClick={() => handleShowVideo()}
              disabled={!processedVideo}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <PlaySquare className="w-4 h-4 " />
                </TooltipTrigger>
                <TooltipContent>View Processed Video</TooltipContent>
              </Tooltip>
            </Button>
          )}
        </div>
      </div>
    );
  };

  const canUpload = () => {
    if (selected) {
      const submission = getAssociatedSubmission(selected.requestId);
      if (submission && submission.status === "TODO") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const DisplayUploadedVideo = () => {
    return (
      <div className="flex flex-col w-fit h-full">
        <div className="flex p-3 flex-col">
          <div className="flex flex-col w-full h-full">
            <>
              {/* <VideoPlayer
                  videoUrl={objectURL}
                  filename={file?.name || "No file selected."}
                /> */}
              {objectURL ? (
                <>
                  <VideoDisplay videoUrl={objectURL} />
                  <div className="flex w-full mr-10 mt-4 justify-between">
                    <Button
                      onClick={handleChooseAnotherFile}
                      variant={"outline"}
                    >
                      Choose Another File
                    </Button>
                    <Button onClick={handleProcessVideo} disabled={!canUpload}>
                      Upload
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col w-full h-full justify-center items-center gap-5">

                  <LucideLoader2
                    className="animate-spin text-primary"
                    size={75}
                  />
                   <p className="font-bold">Uploading...</p>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    );
  };

  // const DisplayProcessedVideo = () => {
  //   console.log("Processed Video", processedVideo)
  //   return processedVideo ? (

  //   );
  // };

  const Upload = () => {
    return (
      <form className="flex flex-col w-full h-full p-10">
        <div className="flex flex-col w-full h-full justify-end items-center bg-accent rounded-lg p-16">
          <div className="w-full h-[50%] flex flex-col items-center ">
            <LucideUploadCloud className="w-48 h-48 " />
          </div>

          <div className="flex flex-col justify-around w-full h-full p-4">
            <input
              id="file-input"
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              accept="video/mp4, video/quicktime"
            />

            <div className="grid grid-cols-2 space-x-3 w-full">
              <input
                id="file-input"
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleSubmit}
                accept="video/mp4, video/quicktime"
              />
              <div className=" flex justify-center">
                <Button onClick={handleUploadClick}>Upload</Button>
              </div>
              <div className="flex justify-center">
                <Button onClick={() => setRecord(true)}>Record</Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 items-center text-sm justify-center w-full">
              <div className="font-semibold text-base">Accepted filetypes:</div>

              <div className="text-sm text-center text-muted-foreground">
                {" "}
                MP4, MOV
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  };

  const ActiveRecordingToolbar = () => {
    return (
      <div className="flex w-full justify-center bg-accent p-3 rounded-b-md ring-1 ring-accent border-card pr-14 ">
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
    );
  };

  const InactiveRecordingToolbar = () => {
    return (
      <div className="flex w-full justify-between bg-accent p-3 rounded-b-md ring-1 ring-accent border-card ">
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
          <TooltipContent>Back to upload</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleStartCaptureClick}
            >
              <Circle className="h-6 w-6  fill-red-500 outline-red-800" />
              <span className="sr-only">Start Recording</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Start Recording</TooltipContent>
        </Tooltip>

        <Button
          onClick={handleSaveAndUpload}
          disabled={!recordedChunks.length}
          variant={"default"}
        >
          Upload
        </Button>
      </div>
    );
  };

  const ShowRequest = ({ selected }: { selected: Requests }) => {
    return (
      <>
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarImage alt={selected?.requesterEmail} />
              <AvatarFallback>
                {selected?.requesterEmail
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-semibold">{selected?.requestTitle}</div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">From:</span>{" "}
                {selected?.requestTitle}
              </div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">From:</span> Jan Dhillon
              </div>

              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Reply-To:</span>{" "}
                {selected?.requesterEmail}
              </div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Due:</span>{" "}
                {format(new Date(selected.dueDate), "PPpp")}
              </div>
            </div>
          </div>
          {selected.creationDate && (
            <div className="ml-auto text-xs text-muted-foreground">
              {format(new Date(selected.creationDate), "PPpp")}
            </div>
          )}
        </div>
        <Separator />
        <div className="flex-1 whitespace-pre-wrap p-4 text-sm ">
          {selected?.description}
        </div>
        <div className="mb-10 mr-10 flex justify-end w-full">
          <Button
            size="lg"
            className="mr-16 mb-16"
            onClick={() => setUpload("true")}
            disabled={!canUpload}
          >
            <p className="font-semibold">Upload</p>
          </Button>
        </div>
      </>
    );
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        {/* Toolbar states */}
        {upload ? <Back /> : <Toolbar />}
      </div>
      <Separator />
      {selected ? (
        <div className="flex h-full flex-1 flex-col">
          {/*Show video */}

          {showingVideo &&
          getPresignedUrl &&
          getDownloadPresignedUrl &&
          triggerJob &&
          submissionId &&
          objectURL ? (
            <>
              <div className="flex flex-col w-fit h-full">
                <div className="flex p-3 flex-col">
                  <div className="flex flex-col w-full h-full">
                    <VideoPlayer
                      videoUrl={processedVideo}
                      filename={"Processed Video"}
                    />
                  </div>
                </div>
              </div>
            </>
          ) : upload && getPresignedUrl && triggerJob && submissionId ? (
            // Upload or record video
            <div className="flex h-full flex-col p-10 space-y-5 items-center justify-center">
              {/* <Progress value={10} /> */}
              <div className="w-full h-full flex flex-col justify-center items-center space-y-3 border rounded-md border-card">
                {!record ? (
                  <>{uploading ? <DisplayUploadedVideo /> : <Upload />} </>
                ) : (
                  <div className="flex flex-col  w-full min-w-full rounded-t-lg items-center justify-center  ">
                    <div className=" flex items-center justify-center rounded-t-md  w-full min-w-full">
                      <Suspense fallback={<div>Failed to load webcam</div>}>
                        <Webcam
                          audio={true}
                          ref={webcamRef}
                          className=" w-full rounded-md"
                        />
                      </Suspense>
                    </div>

                    {capturing ? (
                      <ActiveRecordingToolbar />
                    ) : (
                      <InactiveRecordingToolbar />
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <ShowRequest selected={selected} />
          )}
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
