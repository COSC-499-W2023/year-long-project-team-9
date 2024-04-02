"use client";

import { useRef, useState, ChangeEvent } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import ProfileImageInput from "./account-form-profile-image-input";
import AccountCancel from "./profile-form-cancel";
import FirstNameInput from "@/components/authentication-and-profile-components/account-form-first-name-input";
import LastNameInput from "@/components/authentication-and-profile-components/account-form-last-name-input";
import EmailInput from "@/components/authentication-and-profile-components/account-form-email-input";
import ProfileHeader from "./profile-header";
import { Users } from "@obscurus/database/src/sql.generated";
import { useToast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
// TODO: better error messages, be below for an example

const acceptedImageFileTypes = ["image/jpeg", "image/jpg", "image/png"];
// const { toast } = useToast();

const profileFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name must be at least on character." })
    .max(100),
  email: z.string(),
  lastName: z.string().trim().min(1).max(100),
  profileImage: z
    .any()
    .refine((files) => {
      return !files || files?.[0]?.size <= 10000000;
    })
    .refine(
      (files) => !files || acceptedImageFileTypes.includes(files?.[0]?.type),
      "wrong type"
    ),
});

export default function ProfileForm({
  userData,
  form,
  onSubmit,
  getPresignedUrl,
  getDownloadPresignedUrl,
}: {
  userData: Users;
  form: any;
  onSubmit: Function;
  getPresignedUrl?: (username: string) => Promise<string>;
  getDownloadPresignedUrl?: (username: string) => Promise<string>;
}) {
  // TODO: Work in progress
  return (
    <div className="overflow-auto p-4">
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <ProfileHeader />
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* <form onSubmit={handleSubmit} className="space-y-8"> */}
          <EmailInput
            form={form}
            isDisabled={true}
            formDescription={
              "One cannot change their email once an account has been set."
            }
            fieldName="email"
            label="Email"
            placeHolder="Email"
          ></EmailInput>
          <FirstNameInput
            form={form}
            isDisabled={false}
            formDescription={"Other users will see you first name."}
            fieldName={"firstName"}
            label={"First Name"}
            placeHolder="First Name"
          ></FirstNameInput>
          <LastNameInput
            form={form}
            isDisabled={false}
            formDescription={"Other users will see you last name."}
            fieldName={"lastName"}
            label={"Last Name"}
            placeHolder={"Last Name"}
          ></LastNameInput>
          {/* TODO: ProfileImageInput */}
          <ProfileImageInput
            form={form}
            userData={userData}
            getPresignedUrl={getPresignedUrl}
            getDownloadPresignedUrl={getDownloadPresignedUrl}
          ></ProfileImageInput>
          <div className="text-right gap-2">
            <AccountCancel></AccountCancel>
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
