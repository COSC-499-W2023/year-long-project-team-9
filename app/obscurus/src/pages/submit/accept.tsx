import NestedLayout from "@/components/nested-layout";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { CalendarIcon } from "lucide-react";
import { NextPage } from "next";

export const Accept = () => {
  return (
    <div className="p-3">
      <div className="text-2xl font-bold text-center py-5">
        Here is the video request from{" "}
        <div className=" text-blue-400">Daniel Woods</div>
      </div>
      <Card
        id="previewCard"
        className="drop-shadow-md border-2 border-accent bg-background"
      >
        <CardContent className="grid h-full">
          <div id="prevTitle" className="py-6 grid grid-row-3">
            <CardTitle className="break-all text-2xl">
              Spanish Lesson #2
            </CardTitle>
          </div>

          <div id="prevClient">
            <Label className="font-bold">From</Label>
            <ul>
              <div className="break-all text-primary indent-2 pt-2 pb-2 font-bold">
                daniel.woods@gmail.com
              </div>
            </ul>
          </div>
          <div
            id="prevDescAndData"
            className="grid grid-cols-2 left-justify gap-5 pt-2"
          >
            <div id="prevDesc">
              <Label className="font-bold">Request Description</Label>
              <Textarea
                className="bg-accent resize-none"
                value={""}
                readOnly
                rows={9}
              />
            </div>
            <div className="grid grid-row-4 font-bold">
              <div id="prevBlurred">
                <Label className="">Video Processing</Label>
                <div className="w-full ">Blurred</div>
              </div>
              <div id="prevDate" className="pb-1.5 ">
                <Label>Due Date</Label>
                <div className="flex items-center">
                  <CalendarIcon className="mr-2" height={20} width={20} />
                  <div className="text-base">December 3, 2023</div>
                </div>
              </div>
              <div id="prevLanguage" className="pb-1.5">
                <Label>Video Language</Label>
                <div className="w-full">Language</div>
              </div>
              <div id="prevTerms" className="flex items-center space-x-10">
                <Label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-none">
                  See the{" "}
                  <a
                    href=""
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    terms and conditions
                  </a>{" "}
                  here
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
  );
};