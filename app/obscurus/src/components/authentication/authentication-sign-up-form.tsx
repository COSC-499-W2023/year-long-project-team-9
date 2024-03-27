"use client";

import React, { useState, useEffect, useRef } from "react";
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
import { ArrowRight } from "lucide-react";

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
const signUpPasswordAgeTermsFormSchema = z.object({
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
});
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
  const emailNamesForm = useForm<z.infer<typeof signUpEmailNamesFormSchema>>({
    resolver: zodResolver(signUpEmailNamesFormSchema),
  });
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });
  const [signUpState, setSignUpState] = useState("emailNames");
  const [passwordAgeTermBool, setPasswordAgeTermBool] = useState(false);
  const passwordAgeTermRef = useRef<HTMLDivElement>(null);
  function scrollTopPasswordAgeTerm() {
    passwordAgeTermRef.current?.firstElementChild?.scrollIntoView();
  }
  function onEmailNamesSubmit(
    values: z.infer<typeof signUpEmailNamesFormSchema>
  ) {
    console.log(values);
  }
  function onSubmit(values: z.infer<typeof signUpFormSchema>) {
    console.log(values);
  }
  useEffect(() => {
    if (passwordAgeTermBool) {
      passwordAgeTermRef.current?.firstElementChild?.scrollIntoView();
      setPasswordAgeTermBool(false);
    }
  });
  return (
    <div className="">
      {signUpState === "emailNames" && (
        <Form {...emailNamesForm}>
          <form
            onSubmit={emailNamesForm.handleSubmit(onEmailNamesSubmit)}
            className="space-y-2 px-1"
          >
            <EmailInput
              form={form}
              isDisabled={false}
              formDescription={
                "Your email cannot be changed once your account is created."
              }
              fieldName="email"
              label="Email"
              placeHolder="Email"
            />
            <FirstNameInput
              form={form}
              isDisabled={false}
              formDescription={
                "Other users will be able to see your first name."
              }
              fieldName={"firstName"}
              label={"First Name"}
              placeHolder="First Name"
            />
            <LastNameInput
              form={form}
              isDisabled={false}
              formDescription={
                "Other users will be able to see your last name."
              }
              fieldName={"lastName"}
              label={"Last Name"}
              placeHolder={"Last Name"}
            />
            <Button type="submit" variant={"default"} className="w-full">
              Next
              <ArrowRight />
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
      )}
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
          {signUpState === "emailNames" && (
            <div className="space-y-2">
              <EmailInput
                form={form}
                isDisabled={false}
                formDescription={
                  "Your email cannot be changed once your account is created."
                }
                fieldName="email"
                label="Email"
                placeHolder="Email"
              />
              <FirstNameInput
                form={form}
                isDisabled={false}
                formDescription={
                  "Other users will be able to see your first name."
                }
                fieldName={"firstName"}
                label={"First Name"}
                placeHolder="First Name"
              />
              <LastNameInput
                form={form}
                isDisabled={false}
                formDescription={
                  "Other users will be able to see your last name."
                }
                fieldName={"lastName"}
                label={"Last Name"}
                placeHolder={"Last Name"}
              />
              <Button
                onClick={() => [
                  setSignUpState("passwordAgeTerms"),
                  setPasswordAgeTermBool(true),
                ]}
                className="w-full"
              >
                Next
                <ArrowRight />
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
            </div>
          )}
          {signUpState === "passwordAgeTerms" && (
            <div ref={passwordAgeTermRef} className="space-y-2">
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
            </div>
          )}
        </form>
      </Form> */}
    </div>
  );
}
