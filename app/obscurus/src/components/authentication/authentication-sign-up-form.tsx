"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import AuthenticationTermsInput from "./authentication-form-terms-input";
import AuthenticationAgeInput from "./authentication-form-age-input";
import FirstNameInput from "@/components/authentication-and-profile-components/account-form-first-name-input";
import PasswordInput from "@/components/authentication-and-profile-components/account-form-password-input";
import EmailInput from "@/components/authentication-and-profile-components/account-form-email-input";
import LastNameInput from "@/components/authentication-and-profile-components/account-form-last-name-input";

const signUpFormSchema = z
  .object({
    email: z
      .string()
      .trim()
      .toLowerCase()
      .min(1, { message: "Email cannot be blank." })
      .max(320, { message: "Email cannot be more than 320 characters." })
      .email({ message: "Email is not valid." }),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(24, { message: "Password cannot be more than 24 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string(),
    firstName: z
      .string()
      .trim()
      .min(1, { message: "First name cannot be blank." })
      .max(100, { message: "First name cannot be more than 100 characters." }),
    lastName: z
      .string()
      .trim()
      .min(1, { message: "Last name cannot be blank." })
      .max(100, { message: "Last name cannot be more than 100 characters." }),
    ageVerified: z.boolean(),
    agreedToTermsAndConditions: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
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

  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    console.log(values);
  }

  return (
    <div className="overflow-auto max-h-[55vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-1">
          {/* Email */}
          <EmailInput
            form={form}
            isDisabled={false}
            formDescription={
              "Your email cannot be changed once account is created."
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
            formDescription={"Other users will see your first name."}
            fieldName={"firstName"}
            label={"First Name"}
            placeHolder="First Name"
          ></FirstNameInput>

          {/* Last Name */}
          <LastNameInput
            form={form}
            isDisabled={false}
            formDescription={"Other users will see your last name."}
            fieldName={"lastName"}
            label={"Last Name"}
            placeHolder={"Last Name"}
          ></LastNameInput>

          {/* Age Verification */}
          <AuthenticationAgeInput form={form}></AuthenticationAgeInput>

          {/* Terms and Conditions */}
          <AuthenticationTermsInput form={form}></AuthenticationTermsInput>

          <div className="flex justify-between items-center">
            <div className="text-xs mt-2">
              <span>Have an account? </span>
              <a
                onClick={() => setDialogState("signIn")}
                className="underline text-blue-400 hover:cursor-pointer"
              >
                Sign In
              </a>
            </div>
            <Button type="submit" variant={"default"}>
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
