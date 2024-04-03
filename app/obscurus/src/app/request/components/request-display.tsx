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
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ResponsiveContainer } from "recharts";
import { DataTable } from "./data-table/data-table";
import { columns } from "./data-table/columns";
import { SubmissionsForRequest } from "../types/types-for-request";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/modified-shadcn-ui-components/modified-alert-dialog";

export default function RequestDisplay({
  requests,
  submissions,
  userData,
  setRequests,
  archiveRequest,
  unarchiveRequest,
  trashRequest,
  handleTimezoneOffset,
}: {
  requests: Requests[];
  submissions: SubmissionsForRequest[];
  userData: Users;
  setRequests: Function;
  archiveRequest: Function;
  unarchiveRequest: Function;
  trashRequest: Function;
  handleTimezoneOffset: Function;
}) {
  const [requestId, setRequestId] = useQueryState("requestId");
  const { toast } = useToast();

  console.log("RequestId", requestId);
  const selected = requests
    ? requests.find((item) => item.requestId === requestId)
    : null;

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
      toast({
        title: "Archived",
        description: "Request has been archived",
      });
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
      toast({
        title: "Unarchived",
        description: "Request has been unarchived",
      });
    }
  }

  function trash(selected: Requests | null | undefined, requests: Requests[]) {
    if (selected !== null && selected !== undefined) {
      trashRequest(selected.requestId);
      let newRequests = [...requests];
      newRequests[newRequests.indexOf(selected)].grouping = "TRASHED";
      setRequests(newRequests);
      setRequestId(null);
      toast({
        title: "Trashed",
        description: "Request has been trashed",
      });
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
                    <span className="sr-only">Unarchive</span>
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

          <AlertDialog>
            <AlertDialogTrigger>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="ghost" size="icon" disabled={!selected}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Move to trash</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Move to trash</TooltipContent>
              </Tooltip>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your request and you will no longer be able to access it.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => trash(selected, requests)}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="flex ml-auto pr-1">
          <Drawer>
            <span className="sr-only">Submissions</span>
            <Tooltip>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!selected}>
                  <TooltipTrigger asChild>
                    <ListVideo className="h-4 w-4" />
                  </TooltipTrigger>
                </Button>
              </DrawerTrigger>
              <TooltipContent>Submissions</TooltipContent>
            </Tooltip>
            <DrawerContent className="h-[85%]">
              <div className="w-full">
                <DrawerHeader>
                  <DrawerTitle>Submissions</DrawerTitle>
                  <DrawerDescription>
                    Submissions for {selected?.requestTitle}
                  </DrawerDescription>
                </DrawerHeader>
                <div className=" md:pb-10 md:mb-24">
                  <div className="mt-3 overflow-y-scroll ">
                    <ResponsiveContainer width="100%" height="100%">
                      <DataTable
                        columns={columns}
                        data={
                          submissions.filter(
                            (value) => value.requestId === selected?.requestId
                          ) || []
                        }
                      />
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
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
                  {format(handleTimezoneOffset(selected?.dueDate), "PPP, p")}
                </div>
              </div>
            </div>
            {selected.creationDate && (
              <div className="ml-auto text-xs text-muted-foreground">
                {format(handleTimezoneOffset(selected?.creationDate), "PPP, p")}
              </div>
            )}
          </div>
          <Separator />
          <div className="p-4 overflow-y-auto grow h-[65%]">
            <div className="flex-1 whitespace-pre-wrap text-sm ">
              {selected?.description}
            </div>
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
