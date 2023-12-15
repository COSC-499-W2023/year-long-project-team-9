import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowBigDownIcon, CalendarIcon } from "lucide-react";
import router from "next/router";
import SubmitLayout from "./layout";

export default function Preview() {
  const exampleText =
    "Hello everyone,\n\nFor this week's Spanish lesson, please record a video of yourselves ordering three separate items from a fast food menu in Castilian Spanish.\n\nFor one of the three items, add a modification like extra cheese or no tomato.";
  return (
    <SubmitLayout>
      <div className="grid py-5 gap-3">
        <div className="text-3xl font-bold  justify-self-center">
          Here is the request from{" "}
          <span className=" text-blue-600">Daniel Woods</span>
        </div>
        <Card id="previewCard" className="drop-shadow-md border-2 bg-card">
          <CardContent className="grid h-full">
            <div id="prevTitle" className="pt-6 grid grid-row-3 pb-6">
              <CardTitle className="break-all text-2xl">
                Spanish Lesson #2
              </CardTitle>
            </div>

            <div id="prevClient">
              <Label className="font-bold">From</Label>
              {/* {clientList.map((singleClient, index) => ( */}
              <ul>
                {/* {singleClient.client.length < 1 && ( */}
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
                  value={exampleText}
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
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex items-center gap-10 justify-end py-5">
          <div className="flex gap-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I accept this request
            </label>
          </div>
          <div className="flex gap-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the{" "}
              <a className="visited:text-purple-500 text-blue-500">
                terms of service
              </a>
            </label>
          </div>
          <div>
            <button onClick={() => router.push("/submit")}>
              <ArrowBigDownIcon
                className="stroke-primary fill-primary -rotate-90 mt-1"
                size={30}
                type="submit"
                onClick={() => router.push("/submit/Upload")}
              />
            </button>
          </div>
        </div>
      </div>
    </SubmitLayout>
  );
}
