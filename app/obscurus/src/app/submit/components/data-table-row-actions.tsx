"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EnrichedSubmissionsSchema } from "../schema";
import { Download, DownloadCloud, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useQueryState } from "nuqs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import VideoPlayer from "./video-player";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  console.log("row", row);
  const task = EnrichedSubmissionsSchema.parse(row.original);
  const [showingVideo, setShowingVideo] = useQueryState("video");
  console.log("submissionId", task.submissionId);
  return (
    <div className="flex justify-center ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} onClick={() => setShowingVideo("true")}>
            <Tooltip>
              <TooltipTrigger asChild>
                <ExternalLink className="w-4 h-4 " />
              </TooltipTrigger>
              <TooltipContent>View Processed Video</TooltipContent>
            </Tooltip>
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <VideoPlayer
            videoUrl={
              "https://imigh-obscurus-sitestack-outputbucketadb26529-cz8hxa3qaymx.s3.us-west-2.amazonaws.com/6b82a368-dd60-49f4-93fe-c6f8c9a05e1b-processed.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAX7KPGCHASYQC7RYM%2F20240303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240303T095329Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaDGNhLWNlbnRyYWwtMSJHMEUCID4YCImT8PxCQX%2Bf8kOjS0Yh5mqpaKTQuz5uq%2B6JO93WAiEA2%2BfFv8UicFE8wq3MsKs%2BtdU3r%2FW0jnhECPwWbTjaXSMqnAMIWRAAGgw1NDgzMTEyNzM5MjEiDJq3K8G0i3dpZgY89Sr5At6IaYZ%2BHXgikpXLruQ541DC8QYK0FjuYWXwzKi5Z6c9tlkvrBFzYOmYM1C%2FDa8U4q1nk7rs6tpiWfxAlcb6QoQ7BtUSFJjMzoqXq7zWS70uNDNBFcqD2%2B%2BIoLZI5aDpkqAIh%2Bosq5yTvNz8xjh9vKcFtZMrZ5720hK8hn0vJHMqDYIuWpd6JO3uT2BATsS%2B5fY%2ByTAXZHUEFx9ymeL5v%2FkcORHIad2K2NP0NXXDFzW3rZQYKBc3JCV7gsy3gUTyvW82ew6TcW%2FAlOcPXsS2HMMEUipafU%2B0abLwtYOzO7nr2%2BcN502t61EmRZMi56NZf52KfGx5ohtMgyrO9ib4qV8bqiTWcCtFT4ObaZ6E%2Boawyn36uWrKXERwcgCoJ%2FGhMdbW1t%2FnVFcBYAs6EmTSnJ1n3xf097HYNQP0hZTPqeu51ZB4Wcovls%2F5BhBJl2%2F86U%2BQk8edZjK%2BBOzOao0dnUd1UJKCSWQnz5McDXzRX7k94dXH9%2BBNbBCfMNHYkK8GOqYBub6Gvd5lmNgelG6aOpZecIYWi6BcPbo5W%2BMJGMuF69UioG%2FICEsODiOOtU0ZEUUxQByJ2vYa80gwM7yeYZnsrmtFsM566x%2BLPRDtAWsoxFiOp8TSRRTBfLM4QtW01yC0Tpx6duSVBGzMlDiGNKnS%2FqyUsEUoev6MxOA5dpxeeN3p7Js%2BInbEcgaV4ywujN0QuLWby36binzDt3n9RdUmze2ULj6u6A%3D%3D&X-Amz-Signature=3ed2460d0aac57f448da86c97af8046fc2552b05b34dd9b166b637f4ab3856fb&X-Amz-SignedHeaders=host&x-id=GetObject"
            }
          />
        </DialogContent>
      </Dialog>
      <Button variant={"ghost"} onClick={() => setShowingVideo("true")}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Download className="w-4 h-4 " />
          </TooltipTrigger>
          <TooltipContent>View Processed Video</TooltipContent>
        </Tooltip>
      </Button>
    </div>
  );
}
