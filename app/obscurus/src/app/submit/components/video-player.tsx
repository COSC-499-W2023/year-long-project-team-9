"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

export default function VideoPlayer({ videoUrl, filename }: { videoUrl: string; filename: string }) {
  console.log("videoUrl in video-player", videoUrl);
  console.log("filename in video-player", filename);
  return (
    <div className="flex h-full flex-col space-y-3 rounded-sm ">
      <Label className="text-sm">{filename}</Label>
<Separator />
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width={"100%"}
        height={"100%"}
        className="flex  h-full w-full flex-col border-primary  ring-accent ring-2  "
      />
    </div>
  );
}
