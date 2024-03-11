"use client";
import React, { useState, useEffect, Suspense } from "react";
import ReactPlayer from "react-player";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { LucideLoader2 } from "lucide-react";

export default function VideoPlayer({ videoUrl, filename }: any) {
  console.log("videoUrl in video-player", videoUrl);
  return (
    <div className="flex h-full flex-col rounded-md">
      <Label htmlFor="video" className=" text-left text-base pt-3">
        {filename}
      </Label>
      <Separator className="my-3 text-muted-foreground" />
      <Suspense fallback={<LucideLoader2 className="w-10 h-10" />}>
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width={"100%"}
          className="flex  flex-col border-primary rounded-md "
        />
      </Suspense>
    </div>
  );
}
