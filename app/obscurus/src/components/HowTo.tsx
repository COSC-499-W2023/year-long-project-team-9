import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HowTo = () => {
  return (
    <div className="pb-64 w-full text-base pl-1 drop-shadow-md">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-10" data-aos="fade-right">
          How It Works
        </h1>
      </div>
      <Accordion type="single" collapsible className="min-h-full w-full mb-10 ">
        <AccordionItem value="step1">
          <AccordionTrigger
            className="font-bold text-xl"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Step 1: Make a Request
          </AccordionTrigger>
          <AccordionContent className=" text-base">
            Start by sending a private video request. Simply fill out the form to create a request, and we&apos;ll send them a secure link to
            sign up and record their video. Our intuitive interface ensures that making a
            request is straightforward and secure.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step2">
          <AccordionTrigger
            className="font-bold text-xl"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Step 2: Record & Submit
          </AccordionTrigger>
          <AccordionContent className=" text-base">
            Once the recipient receives the request, they can record their video
            by signing in with a social provider. Our platform offers the
            option to blur faces for privacy. After recording, the video can be
            submitted with just a click.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="step3">
          <AccordionTrigger
            className="font-bold text-xl"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            Step 3: Receive & View
          </AccordionTrigger>
          <AccordionContent className=" text-base">
            After the sender submits the video, you&apos;ll receive a notification via email.
            You can then view the secure and private video, ensuring complete
            privacy and confidentiality in your communications.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default HowTo;
