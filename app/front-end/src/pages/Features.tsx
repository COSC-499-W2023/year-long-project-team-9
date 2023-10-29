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

const Features = () => {
  return (
    <div className="flex min-h-screen">
      <div className="grid grid-rows-3 md: grid-cols-3 gap-36 pr-24">
        {/* Adjust the gap as per your design needs */}
        <Card className="w-[350px] h-fit" data-aos="flip-left" data-aos-delay="100">
          <CardHeader>
            <CardTitle>Ensure privacy</CardTitle>
            <CardDescription>
              Easily blur faces in your videos with a single click.
            </CardDescription>
            <CardContent className=" flex justify-center justify-items-center justify-self-center p-5">
              <Lock />
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="w-[350px] h-fit" data-aos="flip-left" data-aos-delay="200">
          <CardHeader>
            <CardTitle>Ensure privacy</CardTitle>
            <CardDescription>
              Easily blur faces in your videos with a single click.
            </CardDescription>
            <CardContent className=" flex justify-center justify-items-center justify-self-center p-5">
              <Lock />
            </CardContent>
          </CardHeader>
        </Card>
        <Card className="w-[350px] h-fit" data-aos="flip-left" data-aos-delay="300">
          <CardHeader>
            <CardTitle>Ensure privacy</CardTitle>
            <CardDescription>
              Easily blur faces in your videos with a single click.
            </CardDescription>
            <CardContent className=" flex justify-center justify-items-center justify-self-center p-5">
              <Lock />
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Features;

