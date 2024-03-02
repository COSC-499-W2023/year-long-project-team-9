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
import { Users } from "@obscurus/database/src/sql.generated";

export default function CreateForm({
  form,
  onSubmit,
  userData,
}: {
  form: any;
  onSubmit: Function;
  userData: Users[];
}) {
  return (
    <div className="overflow-auto">
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <CreateHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TitleInput form={form}></TitleInput>
          <ClientEmail form={form} email={userData[0].email}></ClientEmail>
          <CreateFormDueDateInput form={form}></CreateFormDueDateInput>
          <VideoProcessingInput form={form}></VideoProcessingInput>
          <DescriptionInput form={form}></DescriptionInput>
          <div className="flex flex-col-2 float-right">
            <Button type="submit">Submit</Button>
            <CreateCancel></CreateCancel>
            {/* The alert will only display when the form is valid */}
            <AlertDialog>
              <div>
                {form.formState.isValid === true ? (
                  <AlertDialogTrigger asChild>
                    <Button type="button">Submit</Button>
                  </AlertDialogTrigger>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </div>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Would you like to submit?</AlertDialogTitle>
                  <AlertDialogDescription>
                    By continuing, a request will be submitted to all clients.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel disabled={form.isSubmitting}>
                    Cancel
                  </AlertDialogCancel>
                  <Button
                    type="submit"
                    onClick={() => form.handleSubmit(onSubmit)}
                    disabled={form.isSubmitting}
                  >
                    Submit
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </form>
      </Form>
    </div>
  );
}
