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
import { ScanFace, ShieldCheck, Gauge } from "lucide-react";

const Features = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center pb-36 ">
        <h1 className="text-3xl font-bold">Features</h1>
        </div> */}
      <div className="grid grid-cols-3  items-center justify-center justify-items-center gap-36 min-h-screen">
        {/* Adjust the gap as per your design needs */}
        <Card
          className="w-[250px] h-[250px] justify-center justify-items-center"
          data-aos="flip-left"
          data-aos-delay="100"
        >
          <CardHeader>
            <CardTitle>Automatic Face Detection & Blurring</CardTitle>
            <CardDescription>
            Utilize cutting-edge technology to automatically identify and obscure faces in your videos, ensuring privacy without sacrificing video quality.
            </CardDescription>
            <CardContent className=" flex justify-center justify-items-center justify-self-center p-5">
              <ScanFace />
            </CardContent>
          </CardHeader>
        </Card>
        <Card
          className="w-[250px] h-[250px]"
          data-aos="flip-left"
          data-aos-delay="250"
        >
          <CardHeader>
            <CardTitle>Real-Time Video Processing</CardTitle>
            <CardDescription>
            Experience swift and efficient video editing with our real-time processing capabilities. Make changes and see them instantly, saving you time and effort.
            </CardDescription>
            <CardContent className=" flex justify-center justify-items-center justify-self-center p-5">
              <Gauge />
            </CardContent>
          </CardHeader>
        </Card>
        <Card
          className="w-[250px] h-[250px]"
          data-aos="flip-left"
          data-aos-delay="300"
        >
          <CardHeader>
            <CardTitle>User Privacy Protection</CardTitle>
            <CardDescription>
            Your privacy is our priority. Our app uses secure protocols to protect your videos and personal data, ensuring peace of mind while you edit.
            &nbsp;
            &nbsp;
            </CardDescription>
            <CardContent className=" flex justify-center pt-14">
              <ShieldCheck className="" />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default Features;
