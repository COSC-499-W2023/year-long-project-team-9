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
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense } from "react";
import { Archive, Trash2, ArrowLeft, Video } from "lucide-react";
import { format } from "date-fns";

export default function CreateDisplay({
  form,
  userEmail,
}: {
  form: any;
  userEmail: string;
}) {
  console.log(userEmail);
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
                <Video className="h-4 w-4" />
                <span className="sr-only">Move to trash</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Move to trash</TooltipContent>
          </Tooltip>
        </div>
      </div>

      <Separator />

      <div className="flex h-full flex-1 flex-col">
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarImage />
              <AvatarFallback>
                {/* {userEmail
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")} */}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-semibold">{"selected?.requestTitle"}</div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">From:</span> Jan D
              </div>

              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Reply-To:</span>{" "}
                {"selected?.requesterEmail"}
              </div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Due:</span>{" "}
                {/* {format(new Date(selected.dueDate), "PPpp")} */}
              </div>
            </div>
          </div>
          {/* {selected.creationDate && (
            <div className="ml-auto text-xs text-muted-foreground">
              {format(new Date(selected.creationDate), "PPpp")}
            </div>
          )} */}
        </div>
        <Separator />
        <div className="flex-1 whitespace-pre-wrap p-4 text-sm ">
          {/* {selected?.description} */}
        </div>
        <Separator className="mt-auto" />
        <div className="p-4 flex justify-end w-full">
          {/* <form action={action}>
            <Button type="submit" size="lg" className="mx-auto" value="world">
              Upload
            </Button>
          </form> */}
        </div>
      </div>
    </div>
  );
}
