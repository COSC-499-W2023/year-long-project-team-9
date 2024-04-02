"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import EmailInput from "@/components/authentication-and-profile-components/account-form-email-input";
import { ArrowRight } from "lucide-react";

const forgotPasswordEmailFormSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email cannot be blank." })
    .max(320, { message: "Email cannot be more than 320 characters." })
    .email({ message: "Email is not valid." }),
});

export default function ForgotPasswordEmailForm({
  setDialogState,
  triggerSendForgotPasswordEmail,
}: {
  setDialogState: Function;
  triggerSendForgotPasswordEmail: Function;
}) {
  const form = useForm<z.infer<typeof forgotPasswordEmailFormSchema>>({
    resolver: zodResolver(forgotPasswordEmailFormSchema),
  });
  function onSubmit(values: z.infer<typeof forgotPasswordEmailFormSchema>) {
    triggerSendForgotPasswordEmail(values.email);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
          <EmailInput
            form={form}
            isDisabled={false}
            formDescription={""}
            fieldName="email"
            label="Email"
            placeHolder="Email"
          />
          <Button type="submit" variant={"default"} className="w-full">
            Send Forgot Password Code
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
