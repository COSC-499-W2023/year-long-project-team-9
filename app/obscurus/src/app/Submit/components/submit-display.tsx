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
import { formatDistanceToNow } from "date-fns";
import { Progress } from "@/components/ui/progress";

export default function RequestDisplay({
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

  const [showVideos, setShowVideos] = useQueryState("showVideos");
  const [uploading, setUploading] = useState(false);

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

  return uploading ? (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2"></div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setUploading(false)}
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
        <div className="flex h-full flex-col p-10 space-y-5">
          <Progress className="my-5" value={10} />
          <div className="flex flex-col h-full w-full  ">
            <div className="bg-accent w-full h-full max-h-[80%]  shadow-sm flex flex-col justify-evenly items-center space-y-3 rounded-lg border ">
              <LucideUploadCloud className="w-48 h-48" />

              <div className="flex justify-center w-full">
                <Label htmlFor="video" className=" text-center text-lg">
                  No file selected
                </Label>
              </div>
              <input id="file-input" type="file" style={{ display: "none" }} />

              <div className="grid grid-cols-2 gap-10">
                <input
                  id="file-input"
                  type="file"
                  style={{ display: "none" }}
                />

                <div className="justify-self-start">
                  <Button>Upload</Button>
                </div>
                <div className="justify-self-end">
                  <Button>Record</Button>
                </div>
              </div>
              <Separator className="border bg-accent" />
              <div className="flex flex-col space-y-2 items-center text-sm justify-center w-full">
                <div className="font-semibold text-base">
                  Accepted filetypes:
                </div>

                <div className="text-sm text-center"> MP4, MOV</div>
              </div>
            </div>
          </div>
        </div>
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
        <div className="flex flex-1 flex-col">
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
                {selected?.creationDate.toString()}
              </div>
            )}
          </div>
          <Separator />
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
            {selected?.description}
          </div>
          <Separator className="mt-auto" />
          <div className="p-4 flex justify-end w-full">
            <form onSubmit={() => setUploading(true)}>
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
