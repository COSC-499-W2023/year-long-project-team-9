"use client";
import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function VideoPlayer({ videoUrl, filename }: any) {
  return (
    <div className="flex h-full flex-col rounded-md">
      {videoUrl ? (
        <>
          <Label htmlFor="video" className=" text-left text-base pt-3">
            {filename || ""}
          </Label>
          <Separator className="my-3 text-muted-foreground"/>
          <ReactPlayer
            url={videoUrl}
            controls={true}
            width={"100%"}
            className="flex  flex-col border-primary rounded-md "
          />
        </>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No video selected
        </div>
      )}
    </div>
  );
}
