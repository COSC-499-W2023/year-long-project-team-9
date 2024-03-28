"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import AuthenticationTermsInput from "./authentication-form-terms-input";
import AuthenticationAgeInput from "./authentication-form-age-input";
import PasswordInput from "@/components/authentication-and-profile-components/account-form-password-input";

const signUpEmailNamesFormSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email cannot be blank." })
    .max(320, { message: "Email cannot be more than 320 characters." })
    .email({ message: "Email is not valid." }),
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
});
const signUpPasswordAgeTermsFormSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(24, { message: "Password cannot be more than 24 characters." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter.",
      })
      .regex(/[0-9]/, { message: "Password must contain at least one number." })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character.",
      }),
    confirmPassword: z.string(),
    ageVerified: z.boolean(),
    agreedToTermsAndConditions: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function SignUpPasswordAgeTermsForm({
  setDialogState,
  signUpEmailNames,
}: {
  setDialogState: Function;
  signUpEmailNames: z.infer<typeof signUpEmailNamesFormSchema>;
}) {
  const form = useForm<z.infer<typeof signUpPasswordAgeTermsFormSchema>>({
    resolver: zodResolver(signUpPasswordAgeTermsFormSchema),
  });
  async function onSubmit(
    values: z.infer<typeof signUpPasswordAgeTermsFormSchema>
  ) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
          <PasswordInput
            form={form}
            isDisabled={false}
            formDescription={
              "Password must contain at least one lowercase and one uppercase letter. Password must contain at least one number and one special character. Password must be at least 8 characters and at most 24 characters."
            }
            fieldName={"password"}
            label={"Password"}
            placeHolder={"Password"}
          />
          <PasswordInput
            form={form}
            isDisabled={false}
            formDescription={"Passwords must match."}
            fieldName={"confirmPassword"}
            label={"Confirm Password"}
            placeHolder={"Confirm Password"}
          />
          <AuthenticationAgeInput form={form} />
          <AuthenticationTermsInput form={form} />
          <Button type="submit" variant={"default"} className="w-full">
            Sign Up
          </Button>
          <div className="text-xs text-center mt-2">
            <span>Have an account? </span>
            <a
              onClick={() => setDialogState("signIn")}
              className="underline text-blue-400 hover:cursor-pointer"
            >
              Sign In
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
}
