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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import CreateCancel from "./create-from-cancel";

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
    .superRefine((clientEmail, ctx) => {
      for (let i = 0; i < clientEmail.length; i++) {
        for (let j = 0; j < clientEmail.length; j++) {
          if (
            clientEmail[i].email === clientEmail[j].email &&
            i !== j &&
            j < i
          ) {
            ctx.addIssue({
              path: [i, "email"],
              message: "One cannot have duplicate email",
              code: z.ZodIssueCode.custom,
            });
          }
        }
      }
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

  function onSubmit(values: z.infer<typeof createFormSchema>) {
    console.log(values);
  }
  // TODO: Work in progress
  return (
    <div className="overflow-auto">
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <CreateHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TitleInput form={form}></TitleInput>
          <ClientEmail form={form} email={userEmail}></ClientEmail>
          <CreateFormDueDateInput form={form}></CreateFormDueDateInput>
          <VideoProcessingInput form={form}></VideoProcessingInput>
          <DescriptionInput form={form}></DescriptionInput>

          <div className="text-right">
            <CreateCancel></CreateCancel>
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