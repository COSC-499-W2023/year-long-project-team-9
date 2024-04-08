"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Archive, Trash2, ListVideo } from "lucide-react";
import { format } from "date-fns";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users } from "@obscurus/database/src/sql.generated";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  Key,
  useEffect,
  useState,
} from "react";
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
} from "@/components/ui/alert-dialog";

export default function CreateDisplay({
  form,
  userData,
  getProfileImgPresignedUrl
}: {
  form: any;
  userData: Users;
  getProfileImgPresignedUrl?: (username: string) => Promise<string>;
}) {


  const [requesterProfileImage, setrequesterProfileImage] = useState<
  string | undefined
>(undefined);
const getRequesterProfileImage = async (
  requester: any,
) => {
  const imgkey = requester.profileImage;
  const requesterEmail = requester.email;
  if (requesterEmail && getProfileImgPresignedUrl) {
    const url = await getProfileImgPresignedUrl(imgkey);
    setrequesterProfileImage(url);
  }
};

useEffect(() => {
  getRequesterProfileImage(userData);
}
, [userData]);


  return (
    <div className="flex h-full flex-col">
      {/* <Toggle/> */}
      <div className="flex flex-row justify-between w-full items-center gap-2">
        <div className="flex p-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <div>
                  <Archive className="h-4 w-4" />
                  <span className="sr-only">Archive</span>
                </div>

                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>

            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-2 h-8" />
          <Tooltip>
            <TooltipTrigger asChild>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon">
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
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
        </div>
        <div className="flex ml-auto pr-3">
          <Tooltip>
            <Button variant="ghost" size="icon">
              <TooltipTrigger asChild>
                <ListVideo className="h-4 w-4" />
              </TooltipTrigger>
            </Button>
            <TooltipContent>View Submissions</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <Separator />
      <div className="flex items-start p-4">
        <div className="flex items-start gap-4 text-sm max-w-[65%]">
          <Avatar className="mt-1.5">
            <AvatarImage alt={userData.givenName}  src={requesterProfileImage} />
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
          <div className="grid gap-1 text-ellipsis line-clamp-1 ">
            <div className="font-semibold line-clamp-1">
              {form.watch("title") === "" ? "Title" : form.watch("title")}
            </div>
            <div className="line-clamp-3 text-xs text-ellipsis ">
              <span className="font-medium">From: </span>
              {userData.givenName} {userData.familyName}{" "}
            </div>
            <div className="line-clamp-3 text-xs text-ellipsis  ">
              <span className="font-medium ">Email: </span>
              {userData.email}
            </div>
            <div className="text-xs">
              <HoverCard>
                <HoverCardTrigger className="text-xs line-clamp-1">
                  To:{" "}
                  {form
                    .watch("clientEmail")
                    .map((item: { email: string }, index: number) =>
                      item.email !== ""
                        ? item.email.toLocaleLowerCase()
                        : form.getValues("clientEmail").length === 1
                        ? "Email"
                        : `Email ${index + 1}`
                    )
                    .join(", ")}
                </HoverCardTrigger>
                <HoverCardContent className="max-h-48 overflow-y-auto">
                  <div>To:{} </div>
                  <div className="ml-1">
                    {form
                      .watch("clientEmail")
                      .map((item: { email: string }, index: number) =>
                        item.email !== ""
                          ? item.email.toLocaleLowerCase()
                          : form.getValues("clientEmail").length === 1
                          ? "Email"
                          : `Email ${index + 1}`
                      )
                      .join(", ")}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="line-clamp-1 text-xs text-left">
              <span className="font-medium">Due: </span>
              {form.watch("dueDate") === undefined
                ? "Due Date"
                : format(new Date(form.watch("dueDate")), "PPpp")}
            </div>
          </div>
        </div>
        <div className="ml-auto text-xs text-muted-foreground grid p-0 m-0 justify-between text-right line-clamp-1 items-center text-ellipsis space-y-5 h-full">
          <div>{format(new Date(), "PPP, p")}</div>
          <div className="flex justify-end pt-[44px]">
            <Badge
              variant={
                form.watch("videoProcessing") === true ? "default" : "secondary"
              }
              className=" w-fit h-full"
            >
              {form.watch("videoProcessing") === true
                ? "Blurred"
                : "Not Blurred"}{" "}
            </Badge>
          </div>
        </div>
      </div>

      <div className="h-full">
        <Separator />
        <div className="p-4 overflow-y-auto grow h-[65%]">
          <div className="flex-1 whitespace-pre-wrap text-sm ">
            {form.watch("description") ? (
              form.getValues("description") === "" ? (
                "Description"
              ) : (
                form.getValues("description")
              )
            ) : (
              <>Description</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
