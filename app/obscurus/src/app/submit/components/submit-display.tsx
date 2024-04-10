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
import { Suspense, useCallback, useEffect, useRef, useState } from "react";
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
  UploadCloud,
  Download,
  DownloadCloud,
} from "lucide-react";
import { format, set, sub } from "date-fns";
import Webcam from "react-webcam";
import VideoPlayer from "./video-player";
import { useRouter, useSearchParams } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { useDropzone } from "react-dropzone";
import { useAtom } from "jotai";
import { atomWithToggle } from "../../atoms/atomWithToggle";
import { useSubmissions } from "@/app/hooks/use-submissions";
import PanelLoader from "./panel-2-loader";
import { useSubmission } from "@/app/hooks/use-submission";
import { useUpload } from "@/app/hooks/use-upload";
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission";
import { motion } from "framer-motion";
import Link from "next/link";
import { useIsShowingVideo } from "@/app/hooks/use-is-showing-video";
import { Badge } from "@/components/ui/badge";
import { isSafari } from "react-device-detect";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Loading from "@/components/authentication/loading";
import { useProcessedVideo } from "@/app/hooks/use-processed-video";

export default function SubmitDisplay({
  getPresignedUrl,
  getDownloadPresignedUrl,
  sendToService,
  updateSubmissionStatus,
  setSubmittedDate,
  getProfileImgPresignedUrl,
  getPfp
}: {
  getPresignedUrl?: (submissionId: string) => Promise<string>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
  sendToService?: (
    submissionId: string,
    fileExt: string,
    requesterEmail: string,
    requesteeEmail: string,
    blurred: boolean
  ) => Promise<string>;
  updateSubmissionStatus?: Function;
  setSubmittedDate?: Function;
  getProfileImgPresignedUrl?: (username: string) => Promise<string>;
  getPfp: Function;
}) {
  const [submission, setSubmission] = useSubmission();
  const [upload, setUpload] = useUpload();
  const [iseShowingVideo, setShowingVideo] = useIsShowingVideo();
  const { toast } = useToast();
  const [processedVideo, setProcessedVideo] = useState<string | null>(null);



  // if (!request) {
  //   setRequest(requests && requests[0]);
  // }



  const [submissions] = useSubmissions();
  const selected = submissions?.find(
    (sub) => sub.submissionId === submission.submissionId
  );

  const submissionIdFromQuery = useSearchParams().get("submissionId");
  useEffect(() => {

    if (submissionIdFromQuery) {
      setSubmission({ submissionId: submissionIdFromQuery });
    }
    const fetchProcessedVideo = async () => {
      if (
        selected?.status === "COMPLETED" &&
        getDownloadPresignedUrl &&
        selected.submissionId
      ) {
        try {
          const videoUrl = await getDownloadPresignedUrl(selected.submissionId);
          setProcessedVideo(videoUrl);
        } catch (error) {
          console.error("Error fetching processed video:", error);
          toast({
            title: "Error",
            description: "Failed to load processed video.",
          });
        }
      }
    };

    fetchProcessedVideo();
    getRequesterProfileImage(selected?.requester, selected?.requestDetails);
  }, [submissionIdFromQuery, selected]);

  const canShowVideo =
    selected && selected.status === "COMPLETED" && processedVideo;

  const [file, setFile] = useState<File | undefined>(undefined);
  const [objectURL, setObjectURL] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = (e: React.FormEvent) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleProcessVideo = async () => {
    if (!file) {
      console.error("No file to upload");
      return;
    }

    setLoading(true);

    const fileExt = file.name.split(".").pop() || "mp4";
    const key = `${submission.submissionId}.${fileExt}`;

    if (getPresignedUrl && sendToService && updateSubmissionStatus) {
      try {
        const url = await getPresignedUrl(key);
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": file.type,
          },
          body: file,
        });

        if (response.ok) {
          sendToService &&
            selected &&
            submission.submissionId &&
            sendToService(
              submission.submissionId,
              fileExt,
              selected?.requestDetails.requesterEmail,
              selected?.requesteeEmail,
              selected?.requestDetails.blurred
            );
          setSubmittedDate &&
            submission.submissionId &&
            setSubmittedDate(submission.submissionId);
          toast({
            title: "Success",
            description: "Your video has been uploaded successfully.",
          });
        } else {
          throw new Error("Upload failed");
        }
      } catch (error) {
        console.error("Upload error:", error);
        toast({
          title: "Error",
          description: "There was an issue with the video upload.",
        });
      } finally {
        setLoading(false);
        setUpload({ upload: false });
        setFile(undefined);
        setObjectURL(null);
      }
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      console.error("No file selected");
      return;
    }
    setFile(selectedFile);
    setObjectURL(URL.createObjectURL(selectedFile));
    setUpload({ upload: true });
  };

  const [record, setRecord] = useState(false);

  const webcamRef = useRef<Webcam>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [capturing, setCapturing] = useState<boolean>(false);
  const [recordedChunks, setRecordedChunks] = useState<BlobPart[]>([]);

  const handleStartCaptureClick = () => {
    setCapturing(true);
    const options = {
      mimeType: isSafari ? "video/mp4" : "video/webm",
    };
    mediaRecorderRef.current = new MediaRecorder(
      webcamRef.current!.stream!,
      options
    );
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
      const mimeType = isSafari ? "video/mp4" : "video/webm";
      const fileExtension = isSafari ? "mp4" : "webm";
      const blob = new Blob(recordedChunks, { type: mimeType });
      const fileName = `${submission.submissionId}.${fileExtension}`;
      const file = new File([blob], fileName, { type: mimeType });

      setFile(file);

      if (submission.submissionId && getPresignedUrl) {
        const presignedUrl = await getPresignedUrl(fileName);

        const response = await fetch(presignedUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "video/webm",
          },
          body: file,
        });

        if (response.ok) {
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

  const handleArchive = async () => {
    if (submission && updateSubmissionStatus) {
      if (submission && updateSubmissionStatus) {
        await updateSubmissionStatus("ARCHIVED", submission.submissionId);
        //console.log("Updated submission status");
        // updateRequests && updateRequests();
        // await fetchUserData();

        toast({
          title: "Archived",
          description: "Request has been archived",
        });
      }
    } else {
      console.error("Failed to update status");
    }
  };

  const handleTrash = async () => {
    if (submission && updateSubmissionStatus && submissions) {
      if (submission && updateSubmissionStatus) {
        await updateSubmissionStatus("TRASHED", submission.submissionId);
        toast({
          title: "Trashed",
          description: "Request has been trashed",
        });
        setSubmission({ submissionId: "" });
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
        <Button variant={"ghost"} onClick={() => setUpload({ upload: false })}>
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
                onClick={handleArchive}
              >
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-2 h-8" />
          <Tooltip>
            <AlertDialog>
              <TooltipTrigger asChild>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!selected}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Move to trash</span>
                  </Button>
                </AlertDialogTrigger>
              </TooltipTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to trash this request?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleTrash}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex ml-auto pr-1">
          <Button
            variant={iseShowingVideo.active ? "destructive" : "ghost"}
            onClick={() => setShowingVideo({ active: !iseShowingVideo.active })}
            disabled={!canShowVideo}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                {iseShowingVideo.active ? (
                  <XSquare className="w-4 h-4" />
                ) : (
                  <PlaySquare className="w-4 h-4" />
                )}
              </TooltipTrigger>
              <TooltipContent>
                {iseShowingVideo.active
                  ? "Hide Processed Video"
                  : "View Processed Video"}
              </TooltipContent>
            </Tooltip>
          </Button>
        </div>
      </div>
    );
  };

  const canUpload = () => {
    if (selected) {
      if (selected.status === "TODO") {
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
          <div className="flex flex-col w-full h-full justify-center items-center gap-5">
            <LucideLoader2 className="animate-spin text-primary" size={75} />
            <p className="font-bold">Uploading...</p>
          </div>
        )}
        <div className="flex p-3 flex-col">
          <div className="flex flex-col w-full h-full">
            <>
              {objectURL && !loading && file && (
                <Suspense fallback={<Loading />}>
                  <VideoPlayer videoUrl={objectURL} filename={file?.name} />
                  <div className="flex w-full  justify-between py-4">
                    <Button
                      onClick={handleChooseAnotherFile}
                      variant={"outline"}
                    >
                      Choose Another File
                    </Button>
                    <Button onClick={handleProcessVideo} disabled={!canUpload}>
                      Submit Video
                    </Button>
                  </div>
                </Suspense>
              )}
            </>
          </div>
        </div>
      </div>
    );
  };

  // const uploadVariants = {
  //   true: { opacity: 1, x: 0 },
  //   false: { opacity: 0, x: "-100%" },
  // };

  const Upload = () => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
      const f: File = acceptedFiles[0];
      setFile(f);
      setObjectURL(URL.createObjectURL(f));
      setUpload({ upload: true });
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      noClick: true,
      onDrop,
      accept: {
        "video/mp4": ["video/mp4"],
        "video/quicktime": ["video/quicktime"],
      },
    });
    return (
      <>
        <form className="flex flex-col w-full h-full p-10 space-y-2">
          {/* <div className="flex w-full justify-start ">
            <h2 className=" font-semibold">
              Select or record a video to submit
            </h2>
          </div>
          <Separator className="text-muted-foreground my-2" /> */}
          <div
            className={`flex flex-col w-full h-full justify-center items-center bg-accent rounded-lg space-y-5 ${
              isDragActive ? "border-2 border-dashed border-primary" : ""
            }`}
            {...getRootProps()}
          >
            <input {...getInputProps()} style={{ display: "none" }} />

            {isDragActive ? (
              <div>Drop your video here</div>
            ) : (
              <div className="flex flex-col space-y-2 md:space-y-5 container">
                <div className="w-full flex items-center justify-center ">
                  <LucideUploadCloud className="w-36 h-36 md:w-48 md:h-48 " />
                </div>
                <input
                  id="file-input"
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleSubmit}
                  accept="video/mp4, video/quicktime"
                />

                <div className="flex flex-col space-y-2 md:space-y-5 ">
                  <div className=" flex justify-center space-x-4">
                    <Button onClick={handleUploadClick} className="">
                      Choose File
                    </Button>
                    <Button onClick={() => setRecord(true)}>Record</Button>
                  </div>
                  <div className=" text-center py-3">
                    ...or drag and drop a video here
                  </div>
                  <Separator />
                </div>
                <div className="flex flex-col">
                  <div className=" text-center">Accepted filetypes:</div>

                  <div className="text-sm text-center text-muted-foreground">
                    {" "}
                    MP4, MOV
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </>
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
          onClick={handleSaveAndUpload}
          disabled={!recordedChunks.length}
          variant={"default"}
        >
          Upload
        </Button>
      </div>
    );
  };

  const RequestHeader = ({ selected }: { selected: EnrichedSubmissions }) => {
    return (
      <>
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm max-w-[70%]">
            <Avatar className="mt-1.5">
              <AvatarImage
                src={requesterProfileImage}
                alt={selected?.requester.givenName}
              />
              <AvatarFallback>
                {selected?.requester.givenName.charAt(0)}
                {selected?.requester.familyName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-ellipsis ">
              <div className="font-semibold">
                {selected?.requestDetails.requestTitle}
              </div>
              <div className="line-clamp-3 text-xs text-ellipsis ">
                <span className="font-medium">From: </span>
                {selected?.requester.givenName} {selected?.requester.familyName}{" "}
              </div>
              <div className="line-clamp-3 text-xs text-ellipsis  ">
                <span className="font-medium ">Email: </span>
                {selected?.requestDetails.requesterEmail}
              </div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Due: </span>
                {format(new Date(selected?.requestDetails.dueDate), "PPP, p")}
              </div>
            </div>
          </div>
          {selected.requestDetails.creationDate && (
            <div className="ml-auto text-xs text-muted-foreground grid p-0 justify-between space-y-5 h-full">
              <div>
                {format(
                  new Date(selected.requestDetails.creationDate),
                  "PPP, p"
                )}
              </div>
              {selected.requestDetails && (
                <div className="flex justify-end pt-5">
                  <Badge
                    variant={
                      selected?.requestDetails.blurred ? "default" : "secondary"
                    }
                    className=" w-fit h-full"
                  >
                    {selected?.requestDetails.blurred
                      ? "Blurred"
                      : "Not Blurred"}
                  </Badge>
                </div>
              )}
            </div>
          )}
        </div>
        <Separator />
      </>
    );
  };

  const [requesterProfileImage, setrequesterProfileImage] = useState<
    string | undefined
  >(undefined);
  const getRequesterProfileImage = async (
    requester: any,
    requestDetails: any
  ) => {
    const imgkey = requester?.profileImage;
    const requesterEmail = requestDetails?.requesterEmail;
    if (requesterEmail && getProfileImgPresignedUrl) {
      const url = await getProfileImgPresignedUrl(imgkey);
      setrequesterProfileImage(url);
    }
  };

  const ShowRequest = ({ selected }: { selected: EnrichedSubmissions }) => {
    return (
      <>
        <div className="h-full">
          <RequestHeader selected={selected} />
          <div className="flex p-4 overflow-scroll max-h-[65%]">
            <div className="flex-1 whitespace-pre-wrap text-sm ">
              {selected?.requestDetails.description}
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 right-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="lg"
                onClick={() => setUpload({ upload: true })}
                disabled={!canUpload}
                variant={"ghost"}
                style={{ display: "flex" }}
                className="text-secondary bg-primary rounded-full p-4 h-full  w-full flex items-center justify-center z-50"
              >
                <UploadCloud className="h-8 w-8 " />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Upload Video</TooltipContent>
          </Tooltip>
        </div>
      </>
    );
  };

  const ViewProcessedVideo = ({
    selected,
  }: {
    selected: EnrichedSubmissions;
  }) => {
    return (
      <div className="h-full w-full">
        <RequestHeader selected={selected} />

        <div className="flex flex-col space-y-2 p-4">
          <Suspense fallback={<Loading />}>
            <VideoPlayer
              videoUrl={processedVideo || ""}
              filename={"Processed Video"}
            />
            {selected.submittedDate && (
              <div className="text-xs text-muted-foreground">
                Submitted on:{" "}
                {format(new Date(selected.submittedDate), "PPP, p")}
              </div>
            )}
            {/* {selected.submittedDate && (
              <div>
                Submitted on:{" "}
                {format(new Date(selected.submittedDate), "PPP, p")}
              </div>
            )} */}
          </Suspense>
        </div>

        <div className="flex justify-start items-center space-x-3 p-3">
          <div className="absolute bottom-10 right-5">
            <Link href={processedVideo || ""}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="lg"
                    disabled={!processedVideo}
                    variant={"ghost"}
                    style={{ display: "flex" }}
                    className="text-secondary bg-primary rounded-full p-4 h-full  w-full flex items-center justify-center z-50"
                  >
                    <DownloadCloud className="h-8 w-8 " />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download Video</TooltipContent>
              </Tooltip>
            </Link>
          </div>
          {/* {selected.submittedDate && (
              <div className="text-sm">
                Submitted on:
                {format(new Date(selected?.submittedDate), "PPP, p")}
              </div>
            )} */}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col">
      {/* <Toggle/> */}
      <div className="flex items-center p-2">
        {/* Toolbar states */}
        {upload.upload ? <Back /> : <Toolbar />}
      </div>
      <Separator />
      {submissions ? (
        <div className="flex h-full flex-1 flex-col">
          {/*Show video */}

          {iseShowingVideo.active &&
          getPresignedUrl &&
          getDownloadPresignedUrl &&
          sendToService &&
          submission &&
          selected ? (
            <>
              {" "}
              <ViewProcessedVideo selected={selected} />
            </>
          ) : upload.upload &&
            getPresignedUrl &&
            sendToService &&
            submission ? (
            <div className="flex h-full flex-col p-10 space-y-5 items-center justify-center container">
              {/* <Progress value={10} /> */}
              <div className="w-full h-full flex flex-col justify-center items-center space-y-3 border rounded-md border-card">
                {record ? (
                  <div className="flex flex-col  w-full min-w-full rounded-t-lg items-center justify-center  ">
                    <div className=" flex items-center justify-center rounded-t-md  w-full min-w-full">
                      <Suspense fallback={<div>Failed to load webcam</div>}>
                        <Webcam
                          audio={true}
                          audioConstraints={{
                            echoCancellation: true,
                          }}
                          videoConstraints={{
                            width: 1280,
                            height: 720,
                            facingMode: "user",
                          }}
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
                  // <motion.nav
                  //   animate={upload.upload ? true : false}
                  //   variants={uploadVariants}
                  // >
                  <Upload />
                  // </motion.nav>
                )}
              </div>
            </div>
          ) : selected ? (
            <ShowRequest selected={selected} />
          ) : (
            <div className="flex flex-col w-full h-full justify-center items-center gap-4  text-muted-foreground">
              <UploadCloud className="w-20 h-20" />
              <div className="font-semibold mb-8">
                No request selected to submit.
              </div>
            </div>
          )}
        </div>
      ) : (
        <PanelLoader />
      )}
    </div>
  );
}
