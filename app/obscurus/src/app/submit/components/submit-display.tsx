"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { useQueryState, parseAsString } from "nuqs";
import { Suspense, useState } from "react";
import {
  Archive,
  Trash2,
  ArrowLeft,
  LucideUploadCloud,
  VideoIcon,
  PlaySquare,
} from "lucide-react";
import { formatDistanceToNow, formatDistance, format } from "date-fns";
import { Progress } from "@/components/ui/progress";
import Upload from "./upload";
import hello from "@/app/functions/hello";
import { getRequests } from "@/app/functions/getRequests";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ResponsiveContainer } from "recharts";
import { DataTable } from "../submissions/components/data-table";
import { columns } from "../submissions/components/columns";

export default function SubmiDisplay({
  requests,
  searchParams,
  submissions,
  getPresignedUrl,
  triggerJob,
}: {
  requests: Requests[];
  searchParams?: {
    counter?: string | null[];
  };
  submissions: Submissions[];
  getPresignedUrl?: (submissionId: string, fileExt: string) => Promise<string>;
  triggerJob?: (submissionId: string) => Promise<string>;
}) {
  const [requestId, setRequestId] = useQueryState("requestId");
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [upload, setUpload] = useQueryState("upload");
  const [showVideos, setShowVideos] = useQueryState("showVideos");
  const [showingVideo, setShowingVideo] = useQueryState("video");

  console.log("getPresignedUrl", getPresignedUrl);

  if (!requestId) {
    setRequestId(requests && requests[0].requestId);
  }

  console.log("RequestId", requestId);
  const selected = requests
    ? requests.find((item) => item.requestId === requestId)
    : null;

  console.log("Selected requestId to display", requestId);
  console.log("Selected requestId to display", requestId);

  const toggleVideos = () => {
    setShowVideos(showVideos ? null : "true");
  };

  console.log("Trigger Job", triggerJob);

  return upload && triggerJob && getPresignedUrl && submissionId ? (
    <Upload getPresignedUrl={getPresignedUrl} triggerJob={triggerJob} />
  ) : (
    <div className="flex h-full flex-col pb-10">
      <div className="flex items-center p-2">
        <div className="flex flex-row justify-between w-full items-center gap-2">
          <div className="flex">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!selected}>
                  <Archive className="h-4 w-4" />
                  <span className="sr-only">Archive</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Archive</TooltipContent>
            </Tooltip>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!selected}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Move to trash</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Move to trash</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex ml-auto pr-6">
            <Drawer>
              <span className="sr-only">View Processing</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DrawerTrigger asChild>
                    <PlaySquare className="h-4 w-4 cursor-pointer" />
                  </DrawerTrigger>
                </TooltipTrigger>
                <TooltipContent>Videos</TooltipContent>
              </Tooltip>
              <DrawerContent>
                <div className="w-full ">
                  <DrawerHeader>
                    <DrawerTitle>Videos</DrawerTitle>
                    <DrawerDescription>
                      View your uploaded videos
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 pb-5">
                    <div className="mt-3 h-[600px] overflow-y-scroll">
                      <ResponsiveContainer width="100%" height="100%">
                        <DataTable columns={columns} data={submissions} />
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
      <Separator />
      {selected ? (
        <div className="flex h-full flex-1 flex-col">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={selected?.requesterEmail} />
                <AvatarFallback>
                  {selected?.requesterEmail
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <div className="font-semibold">{selected?.requestTitle}</div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">From:</span> Jan D
                </div>

                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span>{" "}
                  {selected?.requesterEmail}
                </div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Due:</span>{" "}
                  {format(new Date(selected.dueDate), "PPpp")}
                </div>
              </div>
            </div>
            {selected.creationDate && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(selected.creationDate), "PPpp")}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm ">
            {selected?.description}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4 flex justify-end w-full">
            <Button
              size="lg"
              className="mx-3"
              onClick={() => setUpload("true")}
            >
              <p className="font-semibold">Upload</p>
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-8 text-center text-muted-foreground">
          No message selected
        </div>
      )}
    </div>
  );
}
