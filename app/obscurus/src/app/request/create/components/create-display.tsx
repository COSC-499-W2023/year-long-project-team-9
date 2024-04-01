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
    // Capture the current date on the client side
    const now = new Date();
    // Format the date using date-fns with the 'PPpp' format
    const formattedDate = format(now, "PPpp");
    setCurrentDate(formattedDate);
  }, []);
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
        <div className="flex items-start p-4 gap-2">
          <Avatar>
            <AvatarImage />
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
          <div className="flex flex-col items-start mx-1 break-all gap-1">
            <div className="text-sm">
              {form.watch("title") === "" ? "Title" : form.watch("title")}
            </div>
            <div className="text-xs line-clamp-1">
              From: {userData.givenName} {userData.familyName} ({userData.email}
              )
            </div>
            <div className="text-xs line-clamp-1">
              Email: ({userData.email})
            </div>
            <div className="text-xs">
              <HoverCard>
                <HoverCardTrigger className="text-xs line-clamp-1">
                  To:{" "}
                  {form
                    .watch("clientEmail")
                    .map((item: { email: string }, index: number) =>
                      item.email !== ""
                        ? item.email
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
                              : item.email
                            : item.email === ""
                            ? `Email ${index + 1}`
                            : item.email}
                        </div>
                      ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
            <div className="text-xs">
              Processing:{" "}
              {form.watch("videoProcessing") === true ? "Blurred" : "Normal"} |
              Due Date:{" "}
              {form.watch("dueDate") === undefined
                ? "Due Date"
                : format(new Date(form.watch("dueDate")), "PPpp")}
            </div>
          </div>
          <div className="ml-auto text-xs text-muted-foreground">
            {currentDate}
          </div>
        </div>
        <Separator />
        <div>
          <div className="flex-1 whitespace-pre-wrap p-4 text-sm mb-20 break-all">
            {/* <p>
              {form.getValues("description") === ""
                ? "description"
                : form.getValues("description")}
            </p> */}
            <div className="overflow-y-auto text-sm">
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
    </div>
  );
}
