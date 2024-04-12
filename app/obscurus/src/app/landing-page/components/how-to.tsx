"use client"
import * as React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const HowTo = () => {
  return (
    <div className="w-full text-base pl-1 drop-shadow-md" >
      <div className="flex justify-center mb-4">
        <h1 className="text-2xl font-semibold" data-aos="fade-right">
          Getting Started
        </h1>
      </div>
      <Tabs defaultValue="requesting" className="min-h-full w-full">
        <TabsList className="grid grid-cols-2 gap-4">
          <TabsTrigger value="requesting">Requesting</TabsTrigger>
          <TabsTrigger value="submitting">Submitting</TabsTrigger>
        </TabsList>

        <TabsContent value="requesting">
          <Accordion type="single" collapsible className="my-4">
            <AccordionItem value="req-step1">
              <AccordionTrigger className=" text-md"
            data-aos="fade-right"
            data-aos-delay="100">Step 1: Make a Request</AccordionTrigger>
              <AccordionContent>
                Enter the email of the person you want to request a video from and provide any necessary details or instructions, such as the due date and whether you want the video to be blurred.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="req-step2">
              <AccordionTrigger className=" text-md"
            data-aos="fade-right"
            data-aos-delay="200">Step 2: Wait For Your Request to Be Fulfilled</AccordionTrigger>
              <AccordionContent>
                The recipient will receive an email, and upon signing in, they can view your request and fulfil it. After the video is submitted, you will receive an email notification.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="req-step3">
              <AccordionTrigger className=" text-md"
            data-aos="fade-right"
            data-aos-delay="300">Step 3: Viewing the Processed Video and Following Up</AccordionTrigger>
              <AccordionContent>
                After the video is submitted, you can view it on the platform through the Submit page. If you have any follow-up questions or requests, you can communicate with the recipient with the Chat page.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="submitting">
          <Accordion type="single" collapsible className="my-4">
            <AccordionItem value="sub-step1">
              <AccordionTrigger className=" text-md"
            data-aos="fade-right"
            data-aos-delay="100">Step 1: Receive and Review The Request</AccordionTrigger>
              <AccordionContent>
                Upon receiving a video request, review the details and instructions provided by the requester, such as the due date and any specific requirements.

              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sub-step2">
              <AccordionTrigger className=" text-md"
            data-aos="fade-right"
            data-aos-delay="200">Step 2: Upload and Submit</AccordionTrigger>
              <AccordionContent>
                Choose a file or record your video response and upload it to the platform. The video will be processed and submitted to the requester.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sub-step3">
              <AccordionTrigger className=" text-md"
            data-aos="fade-right"
            data-aos-delay="300">Step 3: Viewing the Processed Video and Next Steps</AccordionTrigger>
              <AccordionContent>
                After the video has been processed and submitted, you can view it on the platform. If the requester has any follow-up questions or requests, you can communicate with them through the Chat and Request pages, respectively.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HowTo;
