"use client";
import React from "react";
import ReactPlayer from "react-player";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

export default function VideoPlayer({
  videoUrl,
  filename,
  submittedDate,
}: {
  videoUrl: string;
  filename?: string;
  submittedDate?: Date | null;
}) {
  console.log("videoUrl in video-player", videoUrl);
  console.log("filename in video-player", filename);
  return (
    <div className="flex h-full flex-col space-y-3 rounded-sm ">
      <Label className="text-sm">{filename || "Processed Video"}</Label>
      {submittedDate && (
        <div className="text-xs text-muted-foreground">
          Submitted on: {format(new Date(submittedDate), "PPP, p")}
        </div>
      )}
      <Separator />
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width={"100%"}
        height={"100%"}
        className="flex  h-full w-full flex-col border-primary  ring-accent ring-2 "
      />
    </div>
  );
}
