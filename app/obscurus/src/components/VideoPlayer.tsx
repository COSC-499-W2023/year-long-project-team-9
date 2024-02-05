import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface VideoPlayerProps {
  videoUrl: string | null;
}

export default function VideoPlayer({ videoUrl }: VideoPlayerProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="ml-auto flex items-center gap-2">
          {/* Additional controls or information can go here */}
        </div>
      </div>
      <Separator />
      {videoUrl ? (
        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            <ReactPlayer url={videoUrl} controls={true} width="100%" height="100%" />
          </div>
          <Separator className="mt-auto" />
          {/* <div className="p-4">
            <form>
              <div className="grid gap-4">
                <Button
                  onClick={(e) => e.preventDefault()}
                  size="sm"
                  className="ml-auto"
                >
                  Action Button
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No video selected
        </div>
      )}
    </div>
  )
}
