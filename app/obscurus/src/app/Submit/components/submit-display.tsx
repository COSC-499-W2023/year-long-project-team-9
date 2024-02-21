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
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { useQueryState, parseAsString } from "nuqs";
import { Suspense, useState } from "react";
import { Archive, Trash2, ArrowLeft, LucideUploadCloud } from "lucide-react";
import { formatDistanceToNow, formatDistance } from "date-fns";
import { Progress } from "@/components/ui/progress";
import Upload from "./upload"
import { upload } from "@/app/functions/upload";

export default function SubmiDisplay({
  requests,
  searchParams,
  submissions,
}: {
  requests: Requests[];
  searchParams?: {
    counter?: string | null[];
  };
  submissions: Submissions[];
}) {
  const [requestId, setRequestId] = useQueryState("requestId");
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [upload, setUpload] = useQueryState("upload");
  const [showVideos, setShowVideos] = useQueryState("showVideos");
  const [uploading, setUploading] = useQueryState("upload");

  if (!requestId) {
    setRequestId(requests[0].requestId);
  }

  console.log("RequestId", requestId);
  const selected = requests.find((item) => item.requestId === requestId);

  console.log("Selected requestId to display", requestId);
  console.log("Selected requestId to display", requestId);

  const toggleVideos = () => {
    setShowVideos(showVideos ? null : "true");
  };

  return upload ? (
    <div className="flex h-full flex-col min-h-full">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2"></div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setUploading(null)}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to display</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Back</TooltipContent>
        </Tooltip>
      </div>
      <Separator />
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
       <Upload/>
      </Suspense>
    </div>
  ) : (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
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
                  Due{" "}
                  {formatDistanceToNow(new Date(selected.dueDate), {
                    addSuffix: true,
                    includeSeconds: false,
                  })}
                </div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Reply-To:</span>{" "}
                  {selected?.requesterEmail}
                </div>
              </div>
            </div>
            {selected.creationDate && (
              <div className="ml-auto text-xs text-muted-foreground">
                {/* {formatDistanceToNow(new Date(selected.creationDate), {
                    addSuffix: true,
                    includeSeconds: true,
                  })} */}
                {selected.creationDate.toString()}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm ">
            {selected?.description}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4 flex justify-end w-full">
            <form onSubmit={() => setUploading("true")}>
              <Button type="submit" size="lg" className="mx-auto">
                Upload
              </Button>
            </form>
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
