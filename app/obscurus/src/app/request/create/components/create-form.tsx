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
import CreateCancel from "./create-from-cancel";
import CreateSubmit from "./create-form-submit";
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
} from "@/components/modified-shadcn-ui-components/modified-alert-dialog";

interface CreateFormProps {
  form: any;
  submit: Function;
  userEmail: string;
}

export default function CreateForm({
  form,
  submit,
  userEmail,
}: CreateFormProps) {
  return (
    <div className="overflow-auto">
      {/* <pre>{JSON.stringify(form.watch(), null, 2)}</pre> */}
      <CreateHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
          <TitleInput form={form}></TitleInput>
          <ClientEmail form={form} email={userEmail}></ClientEmail>
          <CreateFormDueDateInput form={form}></CreateFormDueDateInput>
          <VideoProcessingInput form={form}></VideoProcessingInput>
          <DescriptionInput form={form}></DescriptionInput>
          <div className="text-right">
            <CreateCancel></CreateCancel>
            {/* The alert will only display when the form is valid */}
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
