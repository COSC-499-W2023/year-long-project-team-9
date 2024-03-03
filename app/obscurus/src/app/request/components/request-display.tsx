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
import { Requests, Submissions, Users } from "stack/database/src/sql.generated";
import { useQueryState, parseAsString } from "nuqs";
import { Suspense, useState } from "react";
import {
  Archive,
  Trash2,
  ArrowLeft,
  LucideUploadCloud,
  ListVideo,
  Megaphone,
} from "lucide-react";
import { formatDistanceToNow, formatDistance, format } from "date-fns";
import { Progress } from "@/components/ui/progress";
import { upload } from "@/app/functions/upload";
import hello from "@/app/functions/hello";
import { getRequests } from "@/app/functions/getRequests";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/modified-shadcn-ui-components/modified-alert";

export default function RequestDisplay({
  requests,
  searchParams,
  submissions,
  userData,
  action,
}: {
  requests: Requests[];
  searchParams?: {
    counter?: string | null[];
  };
  submissions: Submissions[];
  action: any;
  userData: Users[];
}) {
  const [requestId, setRequestId] = useQueryState("requestId");

  if (!requestId) {
    setRequestId(requests && requests[0].requestId);
  }

  console.log("RequestId", requestId);
  const selected = requests
    ? requests.find((item) => item.requestId === requestId)
    : null;

  console.log("Selected requestId to display", requestId);

  return (
    <div className="flex h-full flex-col">
      {selected ? (
        <div>
          <div className="flex items-center p-2">
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Archive className="h-4 w-4" />
                    <span className="sr-only">Archive</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Archive</TooltipContent>
              </Tooltip>
              <Separator orientation="vertical" className="mx-2 h-6" />
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Move to trash</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Move to trash</TooltipContent>
              </Tooltip>
            </div>
            <div className="ml-auto">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <ListVideo className="h-5 w-5" />
                    <span className="sr-only">Show video list</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Show video list</TooltipContent>
              </Tooltip>
            </div>
          </div>
          <Separator />
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
          </div>
        </div>
      ) : (
        <div className="flex mt-20 flex-col justify-center items-center mx-4">
          <Alert className="mt-8.5">
            <Megaphone className="mr-9 h-4 w-4" />
            <AlertTitle>No requests to display!</AlertTitle>
            <AlertDescription>
              You can make a request any time.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
