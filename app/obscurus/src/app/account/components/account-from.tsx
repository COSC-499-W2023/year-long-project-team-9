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
import EmailInput from "./account-form-email-input";
import FirstNameInput from "./account-form-first-name-input";
import LastNameInput from "./account-form-last-name-input";
import PasswordInput from "./account-form-password-input";
import ProfileImageInput from "./account-form-profile-image-input";

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
    lastName: z.string().trim().min(1).max(100),
    password: z
      .string()
      .trim()
      .min(8)
      .max(24)
      .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
      .regex(/[a-z]/, { message: "Must contain at least one lowercase letter" })
      .regex(/[0-9]/, { message: "Must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Must contain at least one special character",
      }),
    confirmPassword: z.string(),
    // profileImage: z.instanceof(File),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match with the password above.",
    path: ["confirmPassword"],
  });

interface CreateFormProps {
  userEmail: string;
  userPassword: string;
}

export default function AccountForm({
  userEmail,
  userPassword,
}: CreateFormProps) {
  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: { password: userPassword, confirmPassword: userPassword },
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
          <EmailInput email={userEmail}></EmailInput>
          <FirstNameInput form={form}></FirstNameInput>
          <LastNameInput form={form}></LastNameInput>
          <PasswordInput
            form={form}
            userPassword={userPassword}
          ></PasswordInput>
          <ProfileImageInput form={form}></ProfileImageInput>
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
              Update
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
