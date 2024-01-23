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
import { CalendarIcon, Circle, LucideCheckCheck, Pause } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { DotLoader, PulseLoader, FadeLoader } from "react-spinners";
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
import { Accept } from "./accept";
import { Upload } from "./upload";
import { Progress } from "@/components/ui/progress";
import Autoplay from "embla-carousel-autoplay";

export async function getServerSideProps() {
  const command = new PutObjectCommand({
    ACL: "public-read",
    Key: crypto.randomUUID(),
    Bucket: Bucket.inputBucket.bucketName,
  });
  const url = await getSignedUrl(new S3Client({}), command);

  return { props: { url } };
}

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

  const determineNextButtonDisabled = () => {
    if (current === count) return true;

    if (current === 2 && !file) return true;

    return false;
  };

  useEffect(() => {
    if (!api) {
      return;
    }


    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      console.log("current");
      if (!determineNextButtonDisabled()){
        setCurrent(api.selectedScrollSnap() + 1);
      }
      
    });
  }, [api, current]);

  return (
    <NestedLayout pos={1}>
      <Progress className="my-5" value={(current / count) * 100} />
      <Carousel
        setApi={setApi}
        className="w-full max-w-lg"
        isSwipeEnabled={true}
        plugins={
          [
            // Autoplay({
            //   delay: 2000,
            // }),
          ]
        }
      >
        <CarouselContent>
          <CarouselItem>
            <Accept />
          </CarouselItem>
          <CarouselItem>
            <Upload url={url} />
          </CarouselItem>
          {/* <CarouselItem>
              
            </CarouselItem> */}
          <CarouselItem>
            <div className="flex flex-col justify-evenly items-center w-full h-full justify-items-center ">
              <div className="text-2xl font-bold">Processing...</div>
              <FadeLoader color={primary} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col justify-evenly items-center w-full h-full justify-items-center ">
              <div className="text-2xl font-bold">Done!</div>
              <LucideCheckCheck color={primary} size={100} />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious  />
        <CarouselNext  disabled={determineNextButtonDisabled()} />
      </Carousel>
    </NestedLayout>
  );
};

export default Index;
