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
import { Archive, Trash2, ListVideo, FileText, ArchiveX } from "lucide-react";
import { format } from "date-fns";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ComponentProps, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
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
import { useRequests } from "@/app/hooks/use-requests";
import { useToast } from "@/components/ui/use-toast";
import { useIsShowingVideo } from "@/app/hooks/use-is-showing-video";
import { useRouter, useSearchParams } from "next/navigation";
import { useRequest } from "@/app/hooks/use-request";
import {
  EnrichedRequests,
  SubmissionData,
} from "@obscurus/database/src/types/enrichedRequests";

export default function RequestDisplay({
  userData,
  updateRequestGrouping,
  getProfileImgPresignedUrl,
  handleTimezoneOffset,
  form
}: {
  userData: Users;
  updateRequestGrouping: Function;
  getProfileImgPresignedUrl?: (username: string) => Promise<string>;
  handleTimezoneOffset?: Function;
  form: any;
}) {
  const [request, setRequest] = useRequest();
  const [iseShowingVideo, setShowingVideo] = useIsShowingVideo();
  const { toast } = useToast();
  const [processedVideo, setProcessedVideo] = useState<string | null>(null);


  const requestIdFromQuery = useSearchParams().get("submissionId");

  const [requests] = useRequests();
  const selected = requests
    ? requests.find((sub) => sub.requestId === request.requestId)
    : undefined;

  useEffect(() => {
    if (requestIdFromQuery) {
      setRequest({ requestId: requestIdFromQuery });
    }
  }, [requestIdFromQuery, selected]);

  const [profileImageUrl, setProfileImageUrl] = useState<string>("");

  useEffect(() => {
    async function fetchProfileImage() {
      if (request && getProfileImgPresignedUrl && selected?.requesterEmail) {
        try {
          const imgUrl = await getProfileImgPresignedUrl(
            selected?.requesterEmail
          );
          setProfileImageUrl(imgUrl);
          console.log("Profile image url:", imgUrl);
        } catch (error) {
          console.error("Failed to load profile image:", error);
        }
      }
    }

    fetchProfileImage();
  }, [request]);

  const RequestHeader = ({ selected }: { selected: EnrichedRequests }) => {
    return (
      <>
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm max-w-[65%]">
            <Avatar className="mt-1.5">
              <AvatarImage
                src={profileImageUrl}
                alt={selected?.requester.givenName || ""}
              />
              <AvatarFallback>
                {selected?.requester.givenName.charAt(0)}
                {selected?.requester.familyName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1 text-ellipsis line-clamp-1 ">
              <div className="font-semibold line-clamp-1">
                {selected?.requestTitle}
              </div>
              <div className="line-clamp-3 text-xs text-ellipsis ">
                <span className="font-medium">From: </span>
                {selected?.requester.givenName} {selected?.requester.familyName}{" "}
              </div>
              <div className="line-clamp-3 text-xs text-ellipsis  ">
                <span className="font-medium ">Email: </span>
                {selected?.requesterEmail}
              </div>
              <div className="text-xs">
                  <HoverCard>
                    <HoverCardTrigger className="text-xs line-clamp-1">
                      To:{" "}
                      {selected?.submissions
                        .filter(
                          (value) => value.requestId === selected?.requestId
                        )
                        .map((item, index: number) => item.requesteeEmail)
                        .join(", ")}
                    </HoverCardTrigger>
                    <HoverCardContent className="max-h-48 overflow-y-auto">
                      <div>To:{} </div>
                      <div className="ml-1">
                        {selected?.submissions
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
              <div className="line-clamp-1 text-xs text-left">
                <span className="font-medium">Due: </span>
                {format(new Date(selected?.dueDate), "PPP, p")}
              </div>
            </div>
          </div>
          {selected.creationDate && (
            <div className="ml-auto text-xs text-muted-foreground grid p-0 justify-between text-right line-clamp-1 text-ellipsis space-y-5 h-full">
              <div>{format(new Date(selected.creationDate), "PPP, p")}</div>
              {selected && (
                <div className="flex justify-end pt-9">
                  <Badge
                    variant={selected?.blurred ? "default" : "secondary"}
                    className=" w-fit h-full"
                  >
                    {selected?.blurred ? "Blurred" : "Not Blurred"}
                  </Badge>
                </div>
              )}
            </div>
          )}
        </div>
        <Separator />
      </>
    );
  };

  const router = useRouter();


  const handleArchive = async () => {
    if (request && updateRequestGrouping && requests) {
      if (request && updateRequestGrouping) {
        await updateRequestGrouping(request.requestId, "ARCHIVED");
        toast({
          title: "Archived",
          description: "Request has been archived",
        });
        setRequest({ requestId: null });
        router.refresh()
      }
    } else {
      console.error("Failed to update status");
    }
  };

  const handleUnarchive = async () => {
    if (request && updateRequestGrouping && requests) {
      if (request && updateRequestGrouping) {
        await updateRequestGrouping(request.requestId, null);
        toast({
          title: "Unarchived",
          description: "Request has been unarchived",
        });
        router.refresh()
      }
    } else {
      console.error("Failed to update status");
    }
  };

  const handleTrash = async () => {
    if (request && updateRequestGrouping && requests) {
      if (request && updateRequestGrouping) {
        await updateRequestGrouping(request.requestId, "TRASHED");
        toast({
          title: "Trashed",
          description: "Request has been trashed",
        });
        setRequest({ requestId: null });
        router.refresh()

      }
    } else {
      console.error("Failed to update status");
    }
  };

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
                    ? handleArchive()
                    : handleUnarchive();
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
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!selected}>
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Move to trash</span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to trash this request?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleTrash}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
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
            <DrawerContent className="h-[80%]">
              <div className="w-full ">
                <DrawerHeader>
                  <DrawerTitle>Submissions</DrawerTitle>
                  <DrawerDescription>
                    View all submissions for {selected?.requestTitle}
                  </DrawerDescription>
                </DrawerHeader>
                <div className=" md:pb-10 md:mb-24">
                  <div className="mt-3 overflow-y-scroll ">
                    <ResponsiveContainer width="100%" height="100%">
                      <DataTable
                        columns={columns}
                        data={selected?.submissions as SubmissionData[]}
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

  const [requesterProfileImage, setrequesterProfileImage] = useState<
    string | undefined
  >(undefined);

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">{<Toolbar />}</div>
      <Separator />
      {selected ? (
        <div className="h-full">
          <RequestHeader selected={selected} />
          <div className="flex p-4 overflow-scroll max-h-[65%]">
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
