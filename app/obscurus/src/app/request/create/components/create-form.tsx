"use client";
import CreateHeader from "./create-header";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TitleInput from "./create-form-title-input";
import { endOfDay } from "date-fns";
import DescriptionInput from "./create-form-description-input";
import VideoProcessingInput from "./create-form-video-processing-input";
import ClientEmail from "./create-form-client-input";
import CreateFormDueDateInput from "./create-form-due-date-input";
import { Input } from "@/components/ui/input";
import { RotateCcw } from "lucide-react";

const createFormSchema = z.object({
  title: z.string().trim().min(1).max(100),
  dueDate: z.date().min(endOfDay(new Date())),
  description: z.string().trim().min(1).max(2000),
  clientEmail: z
    .array(
      z.object({
        email: z.string().trim().toLowerCase().min(1).max(320).email(),
      })
    )
    .refine((emails) => {
      const emailSet = new Set(
        emails.map((emailObj) => emailObj.email.toLowerCase())
      );
      return emailSet.size === emails.length;
    }),
  videoProcessing: z.boolean().default(true),
});

interface CreateFormProps {
  userEmail: string;
}

export default function CreateForm({ userEmail }: CreateFormProps) {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      videoProcessing: true,
      clientEmail: [{ email: "" }],
    },
  });

  // function submit(values: z.infer<typeof createFormSchema>) {
  //   let fromValid = true;
  //   for (let i = 0; i < values.clientEmail.length; i++) {
  //     const isDuplicateEmail = duplicateEmail(
  //       values.clientEmail,
  //       values.clientEmail[i].email
  //     );
  //     if (isDuplicateEmail === true) {
  //       form.setError(`clientEmail.${i}.email`, {
  //         type: "custom",
  //         message: "Duplicate email detected",
  //       });
  //       fromValid = false;
  //     }
  //   }
  //   if (fromValid === false) {
  //     form.handleSubmit;
  //   } else {
  //     form.handleSubmit(onSubmit);
  //   }
  // }

  function onSubmit(values: z.infer<typeof createFormSchema>) {
    console.log(values);
  }
  // TODO: Work in progress
  return (
    <div className="overflow-auto">
      {/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}
      <CreateHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TitleInput form={form}></TitleInput>
          <ClientEmail form={form} email={userEmail}></ClientEmail>
          <CreateFormDueDateInput form={form}></CreateFormDueDateInput>
          <VideoProcessingInput form={form}></VideoProcessingInput>
          <DescriptionInput form={form}></DescriptionInput>
          <div className="text-right gap-2">
            <Button
              type="button"
              variant={"ghost"}
              className="justify-self-start"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
