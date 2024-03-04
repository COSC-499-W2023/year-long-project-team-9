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
  submissionId,
}: {
  getPresignedUrl: (submissionId: string) => Promise<string>;
  triggerJob: (submissionId: string) => Promise<string>;
  submissionId: string;
}) => {
  const [file, setFile] = useState<File | undefined>(undefined);

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

  const [uploading, setUploading] = useState(false);
  const [objectURL, setObjectURL] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    console.log("In handlesubmit");
    setUploading(true);
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
      const url = await getPresignedUrl(submissionId);

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
        console.log("ObjectURL", src);

        setObjectURL(src);
        return 200;
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
          const url = await getPresignedUrl(submissionId);
          const response = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "video/mp4",
              "Content-Disposition": `attachment; filename*=UTF-8''${encodedFilename}`,
            },
            body: file,
          });
          console.log("fine here");

          if (response.ok) {
            console.log("Upload successful");
            console.log("hello");
            const src = URL.createObjectURL(file);
            setObjectURL(src);
            console.log("ObjectURL", objectURL);
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

  return (
    <>

    </>
  );
};

export default Upload;
