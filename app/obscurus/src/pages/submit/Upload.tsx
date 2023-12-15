import crypto from "crypto";
import { Bucket } from "sst/node/bucket";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { FormEvent, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCurrentTheme } from "@/components/hooks/useCurrentTheme";
import Webcam from "react-webcam";
import router from "next/router";
import { ArrowBigDownIcon, Circle, Pause } from "lucide-react";
import SubmitLayout from "./layout";

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.public.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}
export const Upload = ({ url }: { url: string }) => {
  const [file, setFile] = useState<File | undefined>(undefined);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
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

    const location = response.headers.get("Location") || url.split("?")[0];
    window.location.href = location;
    console.log("Upload successful:", location);
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

  return (
    <SubmitLayout>
        <div className="text-3xl font-bold py-5 ">
          Upload or Record Your Video
        </div>
        {!record ? (
          <>
            <div className="grid justify-items-center border-dashed border-black border-4 rounded-lg  bg-foreground-secondary dark:border-white">
              <form onSubmit={handleSubmit} className="">
                <div className="grid w-[400px] h-[400px] items-center rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    shape-rendering="geometricPrecision"
                    text-rendering="geometricPrecision"
                    image-rendering="optimizeQuality"
                    viewBox="0 0 512 364.92"
                    width={150}
                    fill={primary}
                    className="justify-self-center"
                  >
                    <path
                      fill-rule="nonzero"
                      d="M359.34 124.66c-13.56 6.7-25.71 15.36-37.41 24.9l-20.13-23.03c14.81-13.74 32.08-24.49 50.64-32.39-37.56-66.54-128.4-83.94-188.3-37.42-21.75 16.84-38.26 42.04-44.61 75.42l-2 10.43-10.4 1.84c-10.19 1.78-19.29 4.24-27.27 7.36-49.8 19.27-63.78 74.7-33.31 116.79 13.04 17.91 29.66 36.17 51.47 39.21h30.49c-.21 3-.32 6.02-.32 9.07 0 7.34.62 14.53 1.82 21.53H97.53l-1.92-.17c-30.53-3.88-55.62-26.61-73.75-51.72C-20.41 228.28.4 149.83 68.93 123.25c7.15-2.79 14.8-5.12 22.86-6.99 9.15-36.34 28.65-64.32 53.72-83.74C222.7-27.29 338.58-1.8 382.79 86.08c6.65-1.05 13.31-1.58 19.92-1.5 98.9.73 138.01 127.2 86.69 195.33-20.57 27.29-52.12 50.51-84.61 58.05l-3.41.41h-19.81a128.362 128.362 0 0 0 1.5-30.6h16.61c24.15-5.81 49.91-25.68 65.23-46.16 36.46-48.56 10.58-146.05-62.41-146.51-14.26-.12-29.11 3.33-43.16 9.56zM234.73 364.92h42.56c9.95 0 18.11-8.16 18.11-18.11v-58.64h31.04c6.54-.28 11.18-2.44 13.87-6.52 7.27-10.91-2.66-21.68-9.55-29.27-19.55-21.46-53.22-53.23-62.87-64.59-7.32-8.08-17.72-8.08-25.04 0-9.97 11.64-44.84 45.77-63.43 66.64-6.45 7.27-14.42 17.17-7.72 27.22 2.76 4.08 7.35 6.24 13.89 6.52h31.04v58.64c0 9.84 8.15 18.11 18.1 18.11z"
                    />
                  </svg>
                  <div className="flex justify-center w-full">
                    <Label
                      htmlFor="video"
                      className="text-xl font-bold text-center"
                    >
                      {file
                        ? `Selected file: ${file.name}`
                        : "No file selected."}
                    </Label>
                  </div>
                  <input
                    id="file-input"
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleSubmit}
                  />

                  <div className="grid grid-cols-2 gap-10">
                    <input
                      id="file-input"
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleSubmit}
                    />

                    <div className="justify-self-start">
                      <Button
                        className=" font-extrabold"
                        onClick={handleUploadClick} // Trigger hidden file input
                      >
                        Upload
                      </Button>
                    </div>
                    <div className="justify-self-end">
                      <Button
                        className=" font-extrabold"
                        onClick={() => setRecord(true)}
                      >
                        Record
                      </Button>
                    </div>
                  </div>
                  <div className="grid items-center text-sm justify-items-center w-full">
                    <div className="font-semibold text-base">
                      Accepted filetypes:
                    </div>
                    <div className="text-base text-center">
                      {" "}
                      MP4, WMV, MOV, and AV1
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="grid grid-cols-2 justify-evenly gap-72">
              <button onClick={() => router.push("/submit")}>
                <ArrowBigDownIcon
                  className="stroke-primary fill-primary rotate-90 mt-1"
                  size={30}
                />
              </button>
              <button onClick={() => router.push("/submit")}>
                <ArrowBigDownIcon
                  className="stroke-primary fill-primary -rotate-90 mt-1"
                  size={30}
                  type="submit"
                  onClick={() => router.push("/submit")}
                />
              </button>
            </div>
          </>
        ) : (
          <div className="">
            <Webcam audio={false} ref={webcamRef} />
            <div className="flex flex-row justify-evenly p-10">
              {capturing ? (
                <>
                  <button onClick={handleStopCaptureClick}>
                    <Pause />
                  </button>
                  <Button
                    onClick={handleSaveAndUpload}
                    disabled={!recordedChunks.length}
                  >
                    Upload
                  </Button>
                </>
              ) : (
                <>
                  <button onClick={handleStartCaptureClick}>
                    <Circle className="fill-red-500 stroke-none" />
                  </button>
                  <Button
                    onClick={handleSaveAndUpload}
                    disabled={!recordedChunks.length}
                  >
                    Upload
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
    </SubmitLayout>
  );
};

export default Upload;
