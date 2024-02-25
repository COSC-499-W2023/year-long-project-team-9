"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  videoUrl: string | null;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="flex h-full flex-col p-5 justi">
      {videoUrl ? (
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width={"100%"}
          height={"50%"}
          className="flex  flex-col border-primary "
        />
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No video selected
        </div>
      )}
    </div>
  );
}
