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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthenticationTermsInput from "../../app/sign/components/authentication-form-terms-input";
import AuthenticationAgeInput from "../../app/sign/components/authentication-form-age-input";
import FirstNameInput from "@/components/authentication-and-profile-components/account-form-first-name-input";
import PasswordInput from "@/components/authentication-and-profile-components/account-form-password-input";
import EmailInput from "@/components/authentication-and-profile-components/account-form-email-input";
import LastNameInput from "@/components/authentication-and-profile-components/account-form-last-name-input";
// TODO: Fill better error messages, be below for an example

const signUpFormSchema = z
  .object({
    email: z.string().trim().toLowerCase().min(1).max(320).email(),
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
    firstName: z
      .string()
      .trim()
      .min(1, { message: "First name must be at least on character." })
      .max(100),
    lastName: z.string().trim().min(1).max(100),
    ageVerified: z.boolean(),
    agreedToTermsAndConditions: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match with the password above.",
    path: ["confirmPassword"],
  });

export default function SignUpForm({
  setDialogState,
}: {
  setDialogState: Function;
}) {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });

  function onSignIn() {
    setDialogState("signin");
  }

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    console.log(values);
  }

  return (
    <div className="overflow-auto max-h-[80vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-1">
          {/* Email */}
          <EmailInput
            form={form}
            isDisabled={false}
            formDescription={
              "One cannot change their email once an account has been set."
            }
            fieldName="email"
            label="Email"
            placeHolder="Email"
          ></EmailInput>

          {/* Password */}
          <PasswordInput
            form={form}
            isDisabled={false}
            formDescription={
              "Password must a lowercase and uppercase letter. Password must have a number and a special character. Password at least 8 characters and no more than 24 characters."
            }
            fieldName={"password"}
            label={"Password"}
            placeHolder={"Password"}
          ></PasswordInput>
          <PasswordInput
            form={form}
            isDisabled={false}
            formDescription={"Confirm password must match the password above."}
            fieldName={"confirmPassword"}
            label={"Confirm Password"}
            placeHolder={"Confirm Password"}
          ></PasswordInput>

          {/* First Name */}

          <FirstNameInput
            form={form}
            isDisabled={false}
            formDescription={"Other users will see you first name."}
            fieldName={"firstName"}
            label={"First Name"}
            placeHolder="First Name"
          ></FirstNameInput>

          {/* Last Name */}
          <LastNameInput
            form={form}
            isDisabled={false}
            formDescription={"Other users will see you last name"}
            fieldName={"lastName"}
            label={"Last Name"}
            placeHolder={"Last Name"}
          ></LastNameInput>

          {/* Age Verification */}
          <AuthenticationAgeInput form={form}></AuthenticationAgeInput>

          {/* Terms and Conditions */}
          <AuthenticationTermsInput form={form}></AuthenticationTermsInput>

          <div className="text-right gap-2">
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
      <div className="text-center text-xs mt-2">
        Have an account?{" "}
        <a
          onClick={onSignIn}
          className="underline text-blue-400 hover:cursor-pointer"
        >
          Sign In
        </a>
      </div>
    </div>
  );
}
