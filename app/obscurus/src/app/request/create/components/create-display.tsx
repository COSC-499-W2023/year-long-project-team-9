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

export default function CreateDisplay({
  form,
  userData,
}: {
  form: any;
  userData: Users[];
}) {
  let today = new Date();
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={true}>
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="mx-2 h-6" />
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
        <div className="ml-auto">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={true}>
                <ListVideo className="h-4 w-4" />
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
          {/* <Avatar>
            <AvatarImage />
            <AvatarFallback>
              {userEmail
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")}
            </AvatarFallback>
          </Avatar> */}
          <div className="flex flex-col items-start mx-1 break-all">
            <div className="text-sm">
              {form.getValues("title") === ""
                ? "Tile"
                : form.getValues("title")}
            </div>
            <div className="text-xs">
              From: {userData[0].givenName} {userData[0].familyName} (
              {userData[0].email})
            </div>
            <div className="text-xs">
              <HoverCard>
                <HoverCardTrigger className="text-xs">
                  To: <div></div>
                </HoverCardTrigger>
                <HoverCardContent>
                  To:
                  <ul>
                    {/* {emailList.map((item: string, index: number) => (
                      <li className="pl-1" key={index}>
                        • {item}
                      </li>
                    ))} */}
                  </ul>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="text-xs">
              Processing:{" "}
              {form.getValues("videoProcessing") === true
                ? "Blurred"
                : "Normal"}{" "}
              | Due Date:{" "}
              {form.getValues("dueDate") === undefined
                ? "Due Date"
                : format(form.getValues("dueDate"), "PPpp")}
            </div>

            {/* <div className="font-semibold">
              {form.getValues("title") !== ""
                ? form.getValues("title")
                : "Title"}
            </div> */}
            {/* <div className="line-clamp-1 text-xs">From: Jan</div> */}
            {/*  */}
            {/* <div className="line-clamp-1 text-xs">
              Processing: {form.watch("videoProcessing")} | Due:{" "}
              {form.watch("dueDate")}
            </div> */}
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            {today.toLocaleDateString()}
          </div>
        </div>
        <Separator />
        <ScrollArea>
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm mb-20 break-all">
            {form.watch("description")}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
