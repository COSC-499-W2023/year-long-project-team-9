"use client"
import addDays from "date-fns/addDays";
import addHours from "date-fns/addHours";
import format from "date-fns/format";
import nextSaturday from "date-fns/nextSaturday";
import {
  Archive,
  ArchiveX,
  CalendarIcon,
  Clock,
  Forward,
  MoreVertical,
  Reply,
  ReplyAll,
  Trash2,
} from "lucide-react";

import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Requests } from "stacks/core/src/sql.generated";
import {useRouter} from "next/navigation";
import { Card, CardContent, CardTitle } from "./ui/card";

export default function RequestDisplay({ request }: { request: Requests }) {
  const today = new Date();
  console.log(request)
  const router = useRouter();
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip></Tooltip>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="h-9"></div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-1 flex-col">
        <div className="flex items-start p-4">
          <div className="flex items-start gap-4 text-sm">
            <Avatar>
              <AvatarImage alt={request.requester_sub} />
              <AvatarFallback>
                {request.requester_sub
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <div className="font-semibold">{request.request_title}</div>
              <div className="line-clamp-1 text-xs">
                {request.due_date.toString()}
              </div>
              <div className="line-clamp-1 text-xs">
                <span className="font-medium">Reply-To:</span>{" "}
                {request.request_title}
              </div>
            </div>
          </div>
          {/* {mail.date && (
      <div className="ml-auto text-xs text-muted-foreground">
        {format(new Date(), "PPpp")}
      </div>
    )} */}
        </div>
        <Separator />
        {/* <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
      {request.description}
    </div>
    <Separator className="mt-auto" />
    <div className="p-4">
      <form>
        <div className="grid gap-4">
          <Textarea
            className="p-4"
            placeholder={`Reply ${request.request_id}...`}
          />
          <div className="flex items-center">
            <Label
              htmlFor="mute"
              className="flex items-center gap-2 text-xs font-normal"
            >
              <Switch id="mute" aria-label="Mute thread" /> Mute this
              thread
            </Label>
            <Button
              onClick={(e) => e.preventDefault()}
              size="sm"
              className="ml-auto"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </div> */}
        <div id="previewCard" className=" h-max bg-card">
          <CardContent className="grid">
            <div className="grid">
              <div id="prevTitle" className="pt-6 grid grid-row-3">
                <CardTitle className="break-all text-2xl" id="requestTitle">
                  {request.request_title}
                </CardTitle>
              </div>

              <div id="prevClient">
                <Label className="font-bold">From</Label>
                <div className="break-all text-primary pb-2 text-sm font-medium ">
                  {request.requester_sub}
                </div>
              </div>

              <div
                id="prevDescAndData"
                className="grid grid-cols-2 left-justify gap-5 pt-2"
              >
                <div id="prevDesc">
                  <Label className="font-bold py-5">Request Description</Label>

                  <Textarea
                    className="bg-accent resize-none"
                    value={request.description}
                    readOnly
                    rows={14}
                  />
                </div>
                <div className="grid grid-row-4">
                  <div id="prevDate" className=" ">
                    <Label className="font-bold">Due Date</Label>
                    <div className="flex items-center">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <div className="text-base">
                        {request.due_date.toString()}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-row-4">
                    <div id="prevBlurred" className="pb-1.5">
                      {" "}
                      <Label className="font-bold">Video Processing</Label>
                      <div className="w-full font-base">Blurred</div>
                    </div>
                    <div id="prevLanguage" className="pb-1.5">
                      <Label className="font-bold">Video Language</Label>
                      <div className="w-full">English</div>
                    </div>
                    <div
                      id="prevTerms"
                      className="flex items-center space-x-10"
                    >
                      <Label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-none">
                        See the{" "}
                        <a
                          href=""
                          target="_blank"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          terms and conditions
                        </a>{" "}
                        here
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <div className="flex justify-end p-10">
            <Button
              id="submitButton"
              type="submit"
              className=" justify-self-start font-bold p-5 "
              onClick={() => router.push("/submit")}
            >
              Upload Video
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
