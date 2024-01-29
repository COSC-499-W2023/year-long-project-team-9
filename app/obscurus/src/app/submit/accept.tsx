import NestedLayout from "@/components/nested-layout";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";
import { CalendarIcon } from "lucide-react";
import { NextPage } from "next";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image"

export const Accept = () => {
  const [showTerms, setShowTerms] = useState(false);
  const exampleReq = {
    "Sender" : {
      "Name":"Walter White",
      "Email": "walter.white@gmail.com"
    },
    "Title": "Cooking",
    "Description": "Jesse we need to cook! Send me a video of you breaking bad",
    "Preferences" : {
      "Video Processing": "Blurred",
      "Due Date": "January 23, 2024",
      "Language": "English"
    }
  }
  return (
    
    <div className="p-3">
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
                    {/* <DialogTrigger asChild>
                        <Button><span className="font-bold text-base">Sign In</span></Button>
                    </DialogTrigger> */}
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Terms and Conditions</DialogTitle>
                        <DialogDescription>
                            By proceeding you are agreeing to the following terms and conditions:
                        </DialogDescription>
                        </DialogHeader>
                        Yuh aye, aye yuh ayuh
                    </DialogContent>
                    </Dialog>
      <div className="text-2xl font-bold text-center py-5">
        Here is the video request from{" "}
        <div className=" text-blue-400">{exampleReq.Sender.Name}</div>
      </div>
      <Card
        id="previewCard"
        className="drop-shadow-md border-2 border-accent bg-card"
      >
        <CardContent className="grid h-full">
          <div id="prevTitle" className="py-6 grid grid-row-3">
            <CardTitle className="break-all text-2xl">
              {exampleReq.Title}
            </CardTitle>
          </div>

          <div id="prevClient">
            <Label className="font-bold">From</Label>
            <ul>
              <div className=" text-primary pt-2 pb-2">
                {exampleReq.Sender.Email}
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
                value={exampleReq.Description}
                readOnly
                rows={9}
              />
            </div>
            <div className="grid grid-row-4 ">
              <div id="prevBlurred">
                <Label className="font-bold">Video Processing</Label>
                <div className="w-full ">{exampleReq.Preferences["Video Processing"]}</div>
              </div>
              <div id="prevDate" className="pb-1.5 ">
                <Label className="font-bold">Due Date</Label>
                <div className="flex items-center">
                  <CalendarIcon className="mr-2" height={20} width={20} />
                  <div className="text-base">{exampleReq.Preferences["Due Date"]}</div>
                </div>
              </div>
              <div id="prevLanguage" className="pb-1.5">
                <Label className="font-bold">Video Language</Label>
                <div className="w-full">{exampleReq.Preferences.Language}</div>
              </div>
              <div id="prevTerms" className="flex items-center space-x-10">
                <Label className="text-sm font-semibold leading-none">
                  See the{" "}
                  <span
                    className="text-blue-400 hover:underline hover:cursor-pointer"
                    onClick={()=>setShowTerms(true)}
                  >
                    terms and conditions
                  </span>{" "}
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

export default Accept;