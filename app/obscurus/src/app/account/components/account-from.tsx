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
import AccountHeader from "./account-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ProfileImageInput from "./account-form-profile-image-input";
import AccountCancel from "./account-form-cancel";
import FirstNameInput from "@/components/authentication-and-profile-components/account-form-first-name-input";
import LastNameInput from "@/components/authentication-and-profile-components/account-form-last-name-input";
import EmailInput from "@/components/authentication-and-profile-components/account-form-email-input";
import PasswordInput from "@/components/authentication-and-profile-components/account-form-password-input";
import ChangingPasswordInput from "./create-form-video-processing-input";

const profileImageMaxSize = 1024 * 1024 * 10;
const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

// TODO: better error messages, be below for an example

const accountFormSchema = z
  .object({
    firstName: z
      .string()
      .trim()
      .min(1, { message: "First name must be at least on character." })
      .max(100),
    email: z.string(),
    lastName: z.string().trim().min(1).max(100),
    password: z.string(),
    changingPassword: z.boolean(),
    confirmPassword: z.string(),
    // profileImage: z.instanceof(File),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match with the password above.",
    path: ["confirmPassword"],
  });

interface CreateFormProps {
  userEmail: string;
}

export default function AccountForm({ userEmail }: CreateFormProps) {
  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: { email: userEmail, changingPassword: false },
  });

  function onSubmit(values: z.infer<typeof accountFormSchema>) {
    console.log(values);
  }
  // TODO: Work in progress
  return (
    <div className="overflow-auto">
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <AccountHeader />
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
          ></FirstNameInput>
          <LastNameInput form={form}></LastNameInput>

          <ChangingPasswordInput form={form}></ChangingPasswordInput>
          {form.getValues("changingPassword") === true ? (
            <PasswordInput form={form} isDisabled={false}></PasswordInput>
          ) : (
            <></>
          )}
          {/* TODO: ProfileImageInput */}
          <ProfileImageInput form={form}></ProfileImageInput>
          <div className="text-right gap-2">
            <AccountCancel></AccountCancel>
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Update
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
