"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Requests, Submissions, Users } from "stack/database/src/sql.generated";
import { useQueryState, parseAsString } from "nuqs";
import {
  Archive,
  Trash2,
  ListVideo,
  FileText,
  ChevronRightIcon,
  XSquare,
  ExternalLink,
  Download,
  PlaySquare,
  ArchiveX,
} from "lucide-react";
import { format } from "date-fns";
import { RequestDisplayAlert } from "./request-display-alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Value } from "@radix-ui/react-select";
import { ComponentProps, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import VideoPlayer from "@/app/submit/components/video-player";
import { RequestTable } from "./request-table";
import { useToast } from "@/components/ui/use-toast";

export default function RequestDisplay({
  requests,
  submissions,
  userData,
  setRequests,
  archiveRequest,
  unarchiveRequest,
  trashRequest,
}: {
  requests: Requests[];
  submissions: Submissions[];
  userData: Users;
  setRequests: Function;
  archiveRequest: Function;
  unarchiveRequest: Function;
  trashRequest: Function;
}) {
  const [requestId, setRequestId] = useQueryState("requestId");
  const { toast } = useToast();

  console.log("RequestId", requestId);
  const selected = requests
    ? requests.find((item) => item.requestId === requestId)
    : null;

  const [showVideoList, setShowVideoList] = useState<boolean>(false);
  console.log(selected?.description);
  console.log("Selected requestId to display", requestId);
  console.log(
    submissions.filter((value) => value.requestId === selected?.requestId)
  );

  function archive(
    selected: Requests | null | undefined,
    requests: Requests[]
  ) {
    if (selected !== null && selected !== undefined) {
      archiveRequest(selected.requestId);
      let newRequests = [...requests];
      newRequests[newRequests.indexOf(selected)].grouping = "ARCHIVED";
      setRequests(newRequests);
    }
  }

  function unarchive(
    selected: Requests | null | undefined,
    requests: Requests[]
  ) {
    if (selected !== null && selected !== undefined) {
      unarchiveRequest(selected.requestId);
      let newRequests = [...requests];
      newRequests[newRequests.indexOf(selected)].grouping = null;
      setRequests(newRequests);
    }
  }

  function trash(selected: Requests | null | undefined, requests: Requests[]) {
    if (selected !== null && selected !== undefined) {
      trashRequest(selected.requestId);
      let newRequests = [...requests];
      newRequests[newRequests.indexOf(selected)].grouping = "TRASHED";
      setRequests(newRequests);
      setRequestId(null);
    }
  }

  const Toolbar = () => {
    return (
      <div className="flex flex-row justify-between w-full items-center gap-2">
        <div className="flex">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                disabled={!selected}
                onClick={() => {
                  selected?.grouping === null
                    ? archive(selected, requests)
                    : unarchive(selected, requests);
                }}
              >
                {selected?.grouping === "ARCHIVED" ? (
                  <div>
                    <ArchiveX className="h-4 w-4" />
                    <span className="sr-only">Archive</span>
                  </div>
                ) : (
                  <div>
                    <Archive className="h-4 w-4" />
                    <span className="sr-only">Archive</span>
                  </div>
                )}
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            {selected?.grouping === null ? (
              <TooltipContent>Archive</TooltipContent>
            ) : (
              <TooltipContent>Unarchive</TooltipContent>
            )}
          </Tooltip>
          <Separator orientation="vertical" className="mx-2 h-8" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                disabled={!selected}
                onClick={() => trash(selected, requests)}
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex ml-auto pr-1">
          <Button
            variant={"ghost"}
            disabled={!selected}
            onClick={() => {
              setShowVideoList(!showVideoList);
            }}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                {showVideoList ? (
                  <XSquare className="w-4 h-4" />
                ) : (
                  <ListVideo className="w-4 h-4" />
                )}
              </TooltipTrigger>
              <TooltipContent>
                {showVideoList ? "Hide Video List" : "View Video List"}
              </TooltipContent>
            </Tooltip>
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-full flex-col">
      {/* <Toggle/> */}
      <div className="flex items-center p-2">
        {/* Toolbar states */}
        {<Toolbar />}
      </div>
      <Separator />
      {selected ? (
        <div className="h-full">
          <div className="flex items-start p-4">
            <div className="flex items-start gap-4 text-sm">
              <Avatar>
                <AvatarImage alt={userData.givenName} />
                <AvatarFallback>
                  {userData.givenName
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                  {userData.familyName
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start gap-1 break-all">
                <div className="font-semibold">{selected?.requestTitle}</div>
                <div className="line-clamp-3 text-xs text-ellipsis ">
                  <span className="font-medium">From: </span>
                  {userData.givenName} {userData.familyName}{" "}
                </div>
                <div className="line-clamp-3 text-xs text-ellipsis  ">
                  <span className="font-medium ">Email: </span>
                  {selected?.requesterEmail}
                </div>
                <div className="text-xs">
                  <HoverCard>
                    <HoverCardTrigger className="text-xs line-clamp-1">
                      To:{" "}
                      {submissions
                        .filter(
                          (value) => value.requestId === selected?.requestId
                        )
                        .map((item, index: number) => item.requesteeEmail)
                        .join(", ")}
                    </HoverCardTrigger>
                    <HoverCardContent className="max-h-48 overflow-y-auto">
                      <div>To: </div>
                      <div className="ml-1">
                        {submissions
                          .filter(
                            (value) => value.requestId === selected?.requestId
                          )
                          .map((item, index: number) => (
                            <div key={index}>• {item.requesteeEmail}</div>
                          ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="line-clamp-1 text-xs">
                  <span className="font-medium">Processing: </span>
                  {selected?.blurred ? "Blurred" : "Not Blurred"} |{" "}
                  <span className="font-medium">Due: </span>
                  {format(new Date(selected?.dueDate), "PPP, p")}
                </div>
              </div>
            </div>
            {selected.creationDate && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(selected?.creationDate), "PPP, p")}
              </div>
            )}
          </div>
          <Separator />
          <div className="p-4 overflow-y-auto grow h-[65%]">
            {showVideoList === true ? (
              <div className="mx-4 my-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Status</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-center">Link</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submissions
                        .filter(
                          (value) => value.requestId === selected?.requestId
                        )
                        .map((value, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <Badge
                                variant={getBadgeVariantFromStatus(
                                  value.status
                                )}
                              >
                                {value.status
                                  .split(" ")
                                  .map(
                                    (word) =>
                                      word.charAt(0).toUpperCase() +
                                      word.slice(1).toLowerCase()
                                  )
                                  .join(" ")}
                              </Badge>
                            </TableCell>
                            <TableCell>{value.requesteeEmail}</TableCell>
                            <TableCell>
                              <div className="flex justify-center items-center ">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button
                                      variant={"outline"}
                                      disabled={value.status !== "COMPLETED"}
                                    >
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <ExternalLink className="w-4 h-4 " />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          View Processed Video
                                        </TooltipContent>
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
                                <Separator
                                  orientation="vertical"
                                  className="mx-2 h-8"
                                />
                                <Button
                                  variant={"outline"}
                                  disabled={value.status !== "COMPLETED"}
                                >
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <Download className="w-4 h-4 " />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      View Processed Video
                                    </TooltipContent>
                                  </Tooltip>
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="flex-1 whitespace-pre-wrap text-sm ">
                {selected?.description}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full h-full justify-center items-center space-y-3  text-muted-foreground">
          <FileText className="w-20 h-20" />
          <div className="font-semibold">No request selected.</div>
        </div>
      )}
    </div>
  );
}

export function getBadgeVariantFromStatus(
  status: string
): ComponentProps<typeof Badge>["variant"] {
  switch (status.toLowerCase()) {
    case "completed":
      return "success";
    case "processing":
      return "warning";
    case "in progress":
      return "warning";
    case "archived":
      return "outline";
    case "failed":
      return "destructive";
    case "todo":
      return "default";
    default:
      return "secondary";
  }
}
