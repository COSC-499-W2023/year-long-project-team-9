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
          className="w-[275px] h-[250px] justify-center justify-items-center"
          data-aos="flip-left"
          data-aos-delay="100"
        >
          <CardHeader>
            <CardTitle>Private Video Requests</CardTitle>
            <CardDescription>
              Initiate confidential conversations by sending secure video requests. Our platform ensures your communication remains private and encrypted.
            </CardDescription>
            <CardContent className="flex justify-center justify-items-center justify-self-center p-5">
              
              <ShieldCheck />
            </CardContent>
          </CardHeader>
        </Card>
        <Card
          className="w-[275px] h-[250px]"
          data-aos="flip-left"
          data-aos-delay="250"
        >
          <CardHeader>
            <CardTitle>Seamless Video Submission</CardTitle>
            <CardDescription>
              Respondents can easily record and submit their videos through a secure link, ensuring a smooth and user-friendly experience.
            </CardDescription>
            <CardContent className="flex justify-center justify-items-center justify-self-center pt-10">
            <Video />
            </CardContent>
          </CardHeader>
        </Card>
        <Card
          className="w-[275px] h-[250px]"
          data-aos="flip-left"
          data-aos-delay="300"
        >
          <CardHeader>
            <CardTitle>User Privacy Protection</CardTitle>
            <CardDescription>
            Our advanced face-blurring technology offers respondents an extra layer of privacy, activated by request.
            </CardDescription>
            <CardContent className="flex justify-center pt-10">
            <ScanFace />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Features;

