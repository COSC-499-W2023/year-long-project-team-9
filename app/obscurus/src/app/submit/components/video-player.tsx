"use client";
import React, { useState, useEffect, Suspense } from "react";
import ReactPlayer from "react-player";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LucideLoader2 } from "lucide-react";
import { cn } from "../../functions/utils";

export default function VideoPlayer({
  videoUrl,
  filename,
}: any) {
  console.log("videoUrl in video-player", videoUrl);
  console.log("filename in video-player", filename);
  return (
    <div className="flex h-full flex-col ring-accent ring-2 rounded-sm ">
      <Label htmlFor="video" className=" text-left text-base ">
        {filename}
      </Label>
      {filename && <Separator className="text-muted-foreground my-2" />}
      <ReactPlayer
        url={videoUrl}
        controls={true}
        width={"100%"}
        height={"100%"}
        className="flex  h-full w-full flex-col border-primary "
      />
    </div>
  );
}
