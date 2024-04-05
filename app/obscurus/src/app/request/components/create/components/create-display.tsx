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
  PromiseLikeOfReactNode,
  Key,
  useEffect,
  useState,
} from "react";

export default function CreateDisplay({
  form,
  userData,
}: {
  form: any;
  userData: Users;
}) {
  const [currentDate, setCurrentDate] = useState("");
  useEffect(() => {
    const now = new Date();
    const formattedDate = format(now, "PPpp");
    setCurrentDate(formattedDate);
  }, []);
  return (
    <div className="flex h-full flex-col">
      {/* <Toggle/> */}
      <div className="flex items-center p-2">
        {/* Toolbar states */}
        <div className="flex flex-row justify-between w-full items-center gap-2">
          <div className="flex">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={true}>
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
                <Button variant="ghost" size="icon" disabled={true}>
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Move to trash</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Move to trash</TooltipContent>
            </Tooltip>
          </div>
          <div className="flex ml-auto pr-1">
            <Button variant={"ghost"} disabled={true}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <ListVideo className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>View Video List</TooltipContent>
              </Tooltip>
            </Button>
          </div>
        </div>
      </div>
      <Separator />

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
              <div className="font-semibold">
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
                    <div>To: </div>
                    <div className="ml-1">
                      {form
                        .watch("clientEmail")
                        .map((item: { email: string }, index: number) => (
                          <div key={index}>
                            •{" "}
                            {form.getValues("clientEmail").length === 1
                              ? item.email === ""
                                ? "Email"
                                : item.email.toLocaleLowerCase()
                              : item.email === ""
                              ? `Email ${index + 1}`
                              : item.email.toLocaleLowerCase()}
                          </div>
                        ))}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Processing: </span>
                {form.watch("videoProcessing") === true
                  ? "Blurred"
                  : "Not Blurred"}{" "}
                | <span className="font-medium">Due: </span>
                {form.watch("dueDate") === undefined
                  ? "Due Date"
                  : format(new Date(form.watch("dueDate")), "PPpp")}
              </div>
            </div>
          </div>

          <div className="ml-auto text-xs text-muted-foreground">
            {currentDate}
          </div>
        </div>
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
