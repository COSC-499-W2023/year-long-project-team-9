"use client";
import {
  CalendarIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Requests } from "stacks/core/src/sql.generated";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardTitle } from "./ui/card";
import { useState } from "react";

export default function RequestDisplay({ request }: { request: Requests }) {
  const today = new Date();
  console.log(request);
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
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
                  <div className="text-base">{request.due_date.toString()}</div>
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
                <div id="prevTerms" className="flex items-center space-x-10">
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
  );
}
