import { ArrowBigDownDash, Lock, Sun } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScanFace, ShieldCheck, Video } from "lucide-react";

const Features = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-center justify-center justify-items-center gap-24 min-h-screen">
        <Card
          className="w-[300px] h-[300px] justify-center justify-items-center drop-shadow-md"
          data-aos="flip-left"
          data-aos-delay="100"
          data-aos-duration="750"
        >
          <CardHeader>
            <CardTitle className="text-xl">Private Video Requests</CardTitle>
            <CardDescription className="text-base">
              Initiate confidential conversations by sending secure video
              requests. Our platform ensures your communication remains private
              and encrypted.
            </CardDescription>
            <CardContent className="flex justify-center justify-items-center justify-self-center p-5">
              <ShieldCheck
                size={50}
                className="stroke-primary"
              />
            </CardContent>
          </CardHeader>
        </Card>
        <Card
          className="w-[300px] h-[300px] drop-shadow-md"
          data-aos="flip-left"
          data-aos-delay="250"
          data-aos-duration="750"
        >
          <CardHeader>
            <CardTitle className="text-xl">Seamless Video Submission</CardTitle>
            <CardDescription className="text-base">
              Respondents can easily record and submit their videos through a
              secure link, ensuring a smooth and user-friendly experience.
            </CardDescription>
            <CardContent className="flex justify-center justify-items-center justify-self-center pt-12">
              <Video size={50} className="stroke-primary" />
            </CardContent>
          </CardHeader>
        </Card>
        <Card
          className="w-[300px] h-[300px] drop-shadow-md"
          data-aos="flip-left"
          data-aos-delay="300"
          data-aos-duration="750"
        >
          <CardHeader>
            <CardTitle className="text-xl">User Privacy Protection</CardTitle>
            <CardDescription className="text-base">
              Our advanced face-blurring technology offers respondents an extra
              layer of privacy at the click of a button.
            </CardDescription>
            <CardContent className="flex justify-center pt-12">
              <ScanFace size={50} className="stroke-primary" />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Features;
