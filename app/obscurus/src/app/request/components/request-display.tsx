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
import { useState } from "react";
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

  const [showVideoList, setShowVideoList] = useQueryState("showVideoList");

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
                  {showVideoList?.toLocaleLowerCase() === "true" ? (
                    <Button
                      variant={"destructive"}
                      onClick={() => setShowVideoList("false")}
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
                          onClick={() => setShowVideoList("true")}
                        >
                          <ListVideo className="h-5 w-5" />
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
          <div className="flex h-full flex-1 flex-col">
            <div className="flex items-start p-4">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>
                  {userData.email
                    .split(" ")
                    .map((chunk) => chunk[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start mx-4 break-all gap-1">
                <div className="text-sm">{selected.requestTitle}</div>
                <div className="text-xs line-clamp-1">
                  From: {userData.givenName} {userData.familyName} (
                  {userData.email})
                </div>
                <div className="text-xs">
                  <HoverCard>
                    <HoverCardTrigger className="text-xs line-clamp-1">
                      To:{" "}
                      {submissions
                        .filter(
                          (value) => value.requestId === selected?.requestId
                        )
                        .map((value) => value.requesteeEmail)
                        .join(", ")}
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <div>To: </div>
                      <div className="ml-1">
                        {submissions
                          .filter(
                            (value) => value.requestId === selected?.requestId
                          )
                          .map((value, index) => (
                            <div key={index}>• {value.requesteeEmail}</div>
                          ))}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                <div className="text-xs line-clamp-1">
                  Processing: {selected.blurred === true ? "Blurred" : "Normal"}{" "}
                  | Due Date: {format(new Date(selected.dueDate), "PPpp")}
                </div>
              </div>
              <div className="ml-auto text-xs text-muted-foreground">
                {format(new Date(selected.creationDate), "PPpp")}
              </div>
            </div>
            <Separator />
            <ScrollArea>
              {showVideoList?.toLocaleLowerCase() === "true" ? (
                <div className="flex-1 whitespace-pre-wrap p-4 text-sm mb-20 break-all">
                  <Table className="rounded-lg border">
                    <TableHeader>
                      <TableRow>
                        <TableHead>Status</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Video</TableHead>{" "}
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
                              <Badge>{value.status}</Badge>
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
              ) : (
                <div className="flex-1 whitespace-pre-wrap p-4 text-sm mb-20 break-all">
                  {selected.description}
                </div>
              )}
            </ScrollArea>
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
