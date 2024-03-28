"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import FirstNameInput from "@/components/authentication-and-profile-components/account-form-first-name-input";
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

export default function SignUpEmailNamesForm({
  setDialogState,
  setSignUpState,
  setSignUpEmailNames,
  setPasswordAgeTermBool,
}: {
  setDialogState: Function;
  setSignUpState: Function;
  setSignUpEmailNames: Function;
  setPasswordAgeTermBool: Function;
}) {
  const form = useForm<z.infer<typeof signUpEmailNamesFormSchema>>({
    resolver: zodResolver(signUpEmailNamesFormSchema),
  });
  function onSubmit(values: z.infer<typeof signUpEmailNamesFormSchema>) {
    setSignUpEmailNames(values);
    setSignUpState("passwordAgeTerms");
    setPasswordAgeTermBool(true);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
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
            formDescription={"Other users will be able to see your first name."}
            fieldName={"firstName"}
            label={"First Name"}
            placeHolder="First Name"
          />
          <LastNameInput
            form={form}
            isDisabled={false}
            formDescription={"Other users will be able to see your last name."}
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
    </div>
  );
}
