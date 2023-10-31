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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/layout";

import { ScanFace, ShieldCheck, Gauge } from "lucide-react";

const HowTo = () => {
  return (
    <Layout>
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mb-10" data-aos="fade-right">How It Works</h1>
        </div>
        <Accordion
          type="single"
          collapsible
          className="min-h-full w-full mb-10"
        >
          <AccordionItem value="step1">
            <AccordionTrigger className="font-bold"
                data-aos="fade-right"
                data-aos-delay="100"
            >
              Step 1: Make a Request
            </AccordionTrigger>
            <AccordionContent>
              Start by sending a private video request. Simply enter the
              recipient's email, and we'll send them a secure link to record
              their video. Our intuitive interface ensures that making a request
              is straightforward and secure.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step2">
            <AccordionTrigger className="font-bold"
            data-aos="fade-right"
            data-aos-delay="100"
            >
              Step 2: Record & Submit
            </AccordionTrigger>
            <AccordionContent>
              Once the recipient receives the request, they can record their
              video response directly through the provided link. Our platform
              offers the option to blur faces for privacy. After recording, the
              video can be submitted with just a click.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="step3">
            <AccordionTrigger className="font-bold"
            data-aos="fade-right"
            data-aos-delay="100"
            >
              Step 3: Receive & View
            </AccordionTrigger>
            <AccordionContent>
              After the video is submitted, you'll receive a notification. You
              can then view the encrypted, secure video, ensuring complete
              privacy and confidentiality in your communications.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    </Layout>
  );
};

export default HowTo;
