"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import EmailInput from "@/components/authentication-and-profile-components/account-form-email-input";
import { ArrowRight } from "lucide-react";

const verifyEmailEmailFormSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, { message: "Email cannot be blank." })
    .max(320, { message: "Email cannot be more than 320 characters." })
    .email({ message: "Email is not valid." }),
});

export default function VerifyEmailEmailForm({
  setDialogState,
  triggerSendVerifyEmail,
}: {
  setDialogState: Function;
  triggerSendVerifyEmail: Function;
}) {
  const form = useForm<z.infer<typeof verifyEmailEmailFormSchema>>({
    resolver: zodResolver(verifyEmailEmailFormSchema),
  });
  function onSubmit(values: z.infer<typeof verifyEmailEmailFormSchema>) {
    triggerSendVerifyEmail(values.email);
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
            Send Verification Code
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
