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

export default function RequestDisplay({
  requests,
  searchParams,
  submissions,
  userData,
}: {
  requests: Requests[];
  searchParams?: {
    counter?: string | null[];
  };
  submissions: Submissions[];
  userData: Users;
}) {
  const [requestId, setRequestId] = useQueryState("requestId");

  if (!requestId) {
    setRequestId(requests && requests[0].requestId);
  }

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
  return (
    <div className="flex h-full flex-col">
      {selected ? (
        <div>
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
                  {showVideoList === true ? (
                    <Button
                      variant={"destructive"}
                      onClick={() => setShowVideoList(false)}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <XSquare className="w-4 h-4 " />
                        </TooltipTrigger>
                        <TooltipContent>Hide Video List</TooltipContent>
                      </Tooltip>
                    </Button>
                  ) : (
                    <div>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowVideoList(true)}
                        >
                          <ListVideo className="h-4 w-4" />
                          <span className="sr-only">Show video list</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Show video list</TooltipContent>
                    </div>
                  )}
                </Tooltip>
              </div>
            </div>
            <Separator />
          </div>
          <div className="h-full">
            <div className="flex items-start p-4">
              <div className="flex items-start gap-4 text-sm max-w-[70%]">
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
                <div className="grid gap-1 text-ellipsis ">
                  <div className="font-semibold">{selected?.requestTitle}</div>
                  <div className="line-clamp-3 text-xs text-ellipsis ">
                    <span className="font-medium">From: </span>
                    {userData.givenName} {userData.familyName}{" "}
                  </div>
                  <div className="line-clamp-3 text-xs text-ellipsis  ">
                    <span className="font-medium ">Email: </span>
                    {selected?.requesterEmail}
                  </div>
                  <div className="line-clamp-1 text-xs">
                    <span className="font-medium">Processing: </span>
                    {selected.blurred === true
                      ? "Blurred"
                      : "Not Blurred"}|{" "}
                    <span className="font-medium">Due: </span>
                    {format(new Date(selected?.dueDate), "PPP, p")}
                  </div>
                </div>
              </div>
              {selected.creationDate && (
                <div className="ml-auto text-xs text-muted-foreground">
                  {format(new Date(selected.creationDate), "PPP, p")}
                </div>
              )}
            </div>
            <Separator />

            {showVideoList === true ? (
              <div className="mx-4 my-4 overflow-scroll max-h-[55%]">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Status</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Video</TableHead>
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
                              {value.status === "COMPLETED" ? (
                                <Button>
                                  Video
                                  <ChevronRightIcon className="h-4 w-4" />
                                </Button>
                              ) : (
                                <Button disabled>
                                  Video
                                  <ChevronRightIcon className="h-4 w-4" />
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            ) : (
              <div className="flex p-4 overflow-scroll max-h-[65%]">
                <div className="flex-1 whitespace-pre-wrap text-sm">
                  {selected?.description}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <RequestDisplayAlert></RequestDisplayAlert>
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
