"use client";

import React, { useState } from "react";
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
// TODO: better error messages, be below for an example

const profileFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First name must be at least on character." })
    .max(100),
  email: z.string(),
  lastName: z.string().trim().min(1).max(100),
  profileImageName: z.string(),
});
interface CreateFormProps {
  userData: Users[];
}

export default function ProfileForm({ userData }: { userData: Users }) {
  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      email: userData.email,
      firstName: userData.givenName,
      lastName: userData.familyName,
    },
  });

  function onSubmit(values: z.infer<typeof profileFormSchema>) {
    console.log(values);
  }
  // TODO: Work in progress
  return (
    <div className="overflow-auto">
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <ProfileHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <ProfileImageInput form={form}></ProfileImageInput>
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
