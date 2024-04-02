"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/authentication-and-profile-components/account-form-password-input";

const forgotPasswordFormSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters." })
      .max(24, { message: "Password must be at most 24 characters." })
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function ForgotPasswordForm({
  setDialogState,
}: {
  setDialogState: Function;
}) {
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {},
  });
  function onSubmit(values: z.infer<typeof forgotPasswordFormSchema>) {
    console.log(values);
  }
  return (
    <div className="overflow-auto max-h-[55vh]">
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
          <Button type="submit" variant={"default"} className="w-full">
            Recover
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
