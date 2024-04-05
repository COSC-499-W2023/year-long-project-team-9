"use client";

import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQueryState } from "nuqs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { get } from "http";
import { use, useEffect, useState } from "react";
import VideoPlayer from "@/app/submit/components/video-player";
import { SubmissionsForRequestSchema } from "../../types/types-for-request";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  getDownloadPresignedUrl?: (submissionId: string) => Promise<string>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  console.log("row", row);
  const task = SubmissionsForRequestSchema.parse(row.original);

  const [url, setUrl] = useState<string>("");

  // console.log(getDownloadPresignedUrl);

  const setProcessedVideo = async () => {
    if (!task.url) return;
    console.log(task.submissionId);
    setUrl(task.url);
    console.log("download url", url);
  };

  const downloadProcessedVideo = async () => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    if (task.status === "COMPLETED") {
      setProcessedVideo();
    }
  });

  console.log("submissionId", task.submissionId);
  return (
    <div className="flex justify-center items-center ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"outline"} disabled={!(task.status === "COMPLETED")}>
            <Tooltip>
              <TooltipTrigger asChild>
                <ExternalLink className="w-4 h-4 " />
              </TooltipTrigger>
              <TooltipContent>View Processed Video</TooltipContent>
            </Tooltip>
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <VideoPlayer videoUrl={url} />
        </DialogContent>
      </Dialog>
      <Separator orientation="vertical" className="mx-2 h-8" />
      <Button
        variant={"outline"}
        onClick={downloadProcessedVideo}
        disabled={!(task.status === "COMPLETED")}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Download className="w-4 h-4 " />
          </TooltipTrigger>
          <TooltipContent>Download Processed Video</TooltipContent>
        </Tooltip>
      </Button>
    </div>
  );
}
