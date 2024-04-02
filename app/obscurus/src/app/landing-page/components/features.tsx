import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ScanFace, ShieldCheck, Video } from "lucide-react";

const Features = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* <div className="text-2xl py-10 font-semibold">Features</div> */}
        <div className="flex flex-col md:flex-row gap-5">
          <Card
            className="w-[300px] h-[300px] justify-center justify-items-center drop-shadow-md bg-card"
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="750"
          >
            <CardHeader>
              <CardTitle className="text-xl">Private Video Requests</CardTitle>
              <CardDescription className="text-base">
                Initiate confidential conversations by sending secure video
                requests. Our platform ensures your communication remains
                private.
              </CardDescription>
              <CardContent className="flex justify-center justify-items-center justify-self-center p-5">
                <ShieldCheck size={50} className="stroke-primary" />
              </CardContent>
            </CardHeader>
          </Card>
          <Card
            className="w-[300px] h-[300px] drop-shadow-md bg-card"
            data-aos="flip-left"
            data-aos-delay="250"
            data-aos-duration="750"
          >
            <CardHeader>
              <CardTitle className="text-xl">
                Seamless Video Submission
              </CardTitle>
              <CardDescription className="text-base">
                Respondents can easily record and submit their videos, ensuring
                a smooth and user-friendly experience.
              </CardDescription>
              <CardContent className="flex justify-center justify-items-center justify-self-center pt-5">
                <Video size={50} className="stroke-primary" />
              </CardContent>
            </CardHeader>
          </Card>
          <Card
            className="w-[300px] h-[300px] drop-shadow-md bg-card"
            data-aos="flip-left"
            data-aos-delay="300"
            data-aos-duration="750"
          >
            <CardHeader>
              <CardTitle className="text-xl">User Privacy Protection</CardTitle>
              <CardDescription className="text-base">
                Our advanced face-blurring technology offers respondents an
                extra layer of privacy at the click of a button.
              </CardDescription>
              <CardContent className="flex justify-center pt-12">
                <ScanFace size={50} className="stroke-primary" />
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Features;
