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
import { Suspense, useEffect, useOptimistic, useRef, useState } from "react";
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
  ArrowBigDown,
  FileText,
  UploadIcon,
  Inbox,
} from "lucide-react";
import { format, set, sub } from "date-fns";
import Webcam from "react-webcam";
import VideoPlayer from "./video-player";
import { useRouter } from "next/navigation";
import { DotLoader } from "react-spinners";
import { el } from "date-fns/locale";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useRequest } from "@/app/hooks/use-request";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDropzone } from "react-dropzone";
import { useAtom } from "jotai";
import { atomWithToggle } from "../../atoms/atomWithToggle";
import { get } from "http";
import { useSubmissions } from "@/app/hooks/use-submissions";
import { useRequests } from "@/app/hooks/use-requests";
import substring from "@/app/functions/substring";
import Loading from "./loading";
import PanelLoader from "./panel-2-loader";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRequestsViaEmail } from "@/app/functions/getRequestsViaEmail";

export default function SubmitDisplay({
  requests,
  submissions,
  fetchUserData,
  getPresignedUrl,
  getDownloadPresignedUrl,
  triggerJob,
  getStatus,
  updateSubmissionStatus,
  updateRequests,
}: {
  requests: Requests[];
  submissions: Submissions[];
  fetchUserData: any;
  getPresignedUrl?: (submissionId: string) => Promise<string>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
  triggerJob?: (submissionId: string, fileExt: string) => Promise<string>;
  getStatus?: (submissionId: string) => Promise<string>;
  updateSubmissionStatus?: Function;
  updateRequests?: Function;
}) {
  const [request, setRequest] = useRequest();
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [upload, setUpload] = useState(false);
  const [showingVideo, setShowingVideo] = useState(false);
  const { toast } = useToast();
  const [processedVideo, setProcessedVideo] = useState<string | null>(null);

  // if (!request) {
  //   setRequest(requests && requests[0]);
  // }

  const queryClient = useQueryClient();





  const selected =
    requests && requests.find((item:any) => item.requestId === request.selected);

  const associatedSubmission =
    submissions &&
    submissions.find((sub:any) => sub.requestId === selected?.requestId);

  // const url = process.env.NEXT_PUBLIC_SERVICE_URL;

  // console.log("URL", url);

  const canShowVideo =
    associatedSubmission &&
    associatedSubmission.status === "COMPLETED" &&
    processedVideo;

  const [file, setFile] = useState<File | undefined>(undefined);
  const [fileExt, setFileExt] = useState<string | undefined>(undefined);
  const [objectURL, setObjectURL] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.FormEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const getAssociatedSubmission = (requestId: string) => {
    if (requestId && submissions) {
      return submissions.find((item:any) => requestId === item.requestId);
    }
    return null;
  };

  const reset = () => {};



  const handleProcessVideo = async (e: any) => {
    console.log("Processing video");
    const submission = getAssociatedSubmission(request?.selected || "");
    if (submission && fileExt && triggerJob) {
      const res = await triggerJob(submission.submissionId, fileExt);
      if (res === "Video jobbed successfully" && updateSubmissionStatus) {
        const mutation = useMutation({
          mutationFn: await updateSubmissionStatus(
            "PROCESSING",
            submission.submissionId
          ),
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["data"] });
          },
        });

        console.log("Updated submission status");
        updateRequests && updateRequests();
        await fetchUserData();
      }
      console.log("RES", res);

      setUpload(false);
      setObjectURL(null);
      setFile(undefined);
      console.log("Video jobbed successfully");
      toast({
        title: "Processing Video",
        description: "Your video is being processed",
      });

      return;
    } else {
      setObjectURL(null);
      return "Failed to run Job";
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");

      return;
    }

    return;
  };

  const handleConfirmUpload = async () => {
    if (!file) {
      console.error("No file selected");
      return;
    }
    setLoading(true);
    const fileExt = file.name.split(".").pop();
    setFileExt(fileExt);
    const key = `${submissionId}.${fileExt}`;

    if (submissionId && getPresignedUrl) {
      try {
        const url = await getPresignedUrl(key);
        await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
            "Content-Disposition": `attachment; filename*=UTF-8''${encodeURIComponent(
              key
            )}`,
          },
          body: file,
        });
        console.log("Upload successful");
        setObjectURL(URL.createObjectURL(file));
        handleProcessVideo(file);
      } catch (error) {
        console.error("Upload failed:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  // useEffect(() => {
  //   if (!requestId) {
  //     setRequestId(requests && requests[0].requestId);
  //   }
  // }, []);

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
      const blob = new Blob(recordedChunks, { type: "video/mp4" });
      const fileName = `${submissionId}.mp4`;
      const file = new File([blob], fileName, { type: "video/mp4" });

      setFile(file);

      if (submissionId && getPresignedUrl) {
        const presignedUrl = await getPresignedUrl(fileName);

        const response = await fetch(presignedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "video/mp4",
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
    } else {
      console.error("No recorded chunks");
    }
  };

  const router = useRouter();

  const query = useQuery({
    queryKey: ["data"],
    queryFn: () => fetchUserData(),
  });

  console.log("Query returned", query);

  const handleArchive = async (requestId: string) => {
    console.log("Archiving");
    if (requests && requestId) {
      const submission = getAssociatedSubmission(requestId);
      if (submission && updateSubmissionStatus) {
        updateSubmissionStatus("ARCHIVED", submission.submissionId),
        console.log("Updated submission status");
        //updateRequests && updateRequests();
        //await fetchUserData();

        toast({
          title: "Archived",
          description: "Request has been archived",
        });
      }
    } else {
      console.error("Failed to update status");
    }
  };

  const handleChooseAnotherFile = () => {
    setFile(undefined);
    setObjectURL(null);
    setLoading(false);
  };

  const Back = () => {
    return (
      <div className="flex flex-row justify-between w-full items-center gap-2">
        <Button variant={"ghost"} onClick={() => setUpload(false)}>
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
          <Button
            variant={"ghost"}
            onClick={() => setShowingVideo(!showingVideo)}
            disabled={!canShowVideo}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                {showingVideo ? (
                  <XSquare className="w-4 h-4" />
                ) : (
                  <PlaySquare className="w-4 h-4" />
                )}
              </TooltipTrigger>
              <TooltipContent>
                {showingVideo ? "Hide Processed Video" : "View Processed Video"}
              </TooltipContent>
            </Tooltip>
          </Button>
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
      <div className="flex flex-col w-fit h-full pt-16">
        {loading && (
          <div className="flex flex-col w-full h-full justify-start items-center gap-5">
            <LucideLoader2 className="animate-spin text-primary" size={75} />
            <p className="font-bold">Uploading...</p>
          </div>
        )}
        <div className="flex p-3 flex-col">
          <div className="flex flex-col w-full h-full">
            <>
              {objectURL && !loading && file && (
                <>
                  <VideoPlayer videoUrl={objectURL} filename={file?.name} />
                  <div className="flex w-full  justify-between py-4">
                    <Button
                      onClick={handleChooseAnotherFile}
                      variant={"outline"}
                    >
                      Choose Another File
                    </Button>
                    <Button onClick={handleConfirmUpload} disabled={!canUpload}>
                      Submit Video
                    </Button>
                  </div>
                </>
              )}
            </>
          </div>
        </div>
      </div>
    );
  };

  const Upload = () => {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full h-full p-10"
      >
        <div className="flex flex-col w-full h-full justify-center items-center bg-accent rounded-lg p-16 space-y-5">
          <div className="w-full h-[50%] flex flex-col items-center ">
            <LucideUploadCloud className="w-48 h-48 " />
          </div>

          <div className="flex flex-row gap-3 w-full justify-center pr-7">
            <input
              id="file-input"
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setFile(file);
                  console.log("File selected", file.name);
                  const fileExt = file.name.split(".").pop();
                  setFileExt(fileExt);
                  console.log("File extension", fileExt);
                }
              }}
              accept="video/mp4, video/quicktime"
            />
            <div className=" flex justify-center">
              <Button onClick={handleUploadClick} className="">
                Choose File
              </Button>
            </div>
            <div className="flex justify-center">
              <Button onClick={() => setRecord(true)}>Record</Button>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col space-y-2 items-center text-sm justify-center w-full">
            <div className="font-semibold text-base">Accepted filetypes:</div>

            <div className="text-sm text-center text-muted-foreground">
              {" "}
              MP4, MOV
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
              type="submit"
              onSubmit={handleSaveAndUpload}
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
          onClick={handleConfirmUpload}
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
        <div className="h-full">
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
                <div className="font-semibold">
                  {substring(selected?.requestTitle, 30)}
                </div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">From:</span>{" "}
                  <div>{substring(selected?.requestTitle, 50)}</div>
                </div>
                <div className="line-clamp-3 text-xs">
                  <span className="font-medium">From:</span> Jan Dhillon
                </div>

                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span>{" "}
                  {substring(selected?.requesterEmail, 50)}
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
          <div className="flex  p-4 overflow-scroll">
            <div className="flex-1 whitespace-pre-wrap text-sm max-h-[500px] ">
              {selected?.description}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-10">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                onClick={() => setUpload(true)}
                disabled={!canUpload}
                variant={"ghost"}
                style={{ display: "flex" }}
                className="text-secondary bg-primary rounded-full p-4 h-full  w-full flex items-center justify-center z-50"
              >
                <UploadIcon className="h-8 w-8 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Upload Video</TooltipContent>
          </Tooltip>
        </div>
      </>
    );
  };

  const isShowingVideoAtom = atomWithToggle(false);

  const Toggle = () => {
    const [isActive, toggle] = useAtom(isShowingVideoAtom);

    return (
      <>
        <button onClick={() => toggle()}>
          isActive: {isActive ? "yes" : "no"}
        </button>
        <button onClick={() => toggle(true)}>force true</button>
        <button onClick={() => toggle(false)}>force false</button>
      </>
    );
  };

  return (
    <div className="flex h-full flex-col">
      {/* <Toggle/> */}
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
          submissionId ? (
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
                {record ? (
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
                ) : file ? (
                  <DisplayUploadedVideo />
                ) : (
                  <Upload />
                )}
              </div>
            </div>
          ) : (
            <ShowRequest selected={selected} />
          )}
        </div>
      ) : (
        <div className="h-full flex flex-col space-y-4 justify-center items-center text-muted-foreground">
          <FileText className="h-20 w-20 " />
          <p className=" text-lg">No request selected.</p>
        </div>
      )}
    </div>
  );
}
