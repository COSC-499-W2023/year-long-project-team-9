"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/authentication-and-profile-components/account-form-password-input";

// TODO: better error messages, be below for an example

const recoverPasswordFormSchema = z
  .object({
    password: z
      .string()
      .trim()
      .min(8)
      .max(24)
      .regex(/[A-Z]/)
      .regex(/[a-z]/)
      .regex(/[0-9]/)
      .regex(/[\W_]/),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function RecoverPasswordForm({
  setDialogState,
}: {
  setDialogState: Function;
}) {
  const form = useForm<z.infer<typeof recoverPasswordFormSchema>>({
    resolver: zodResolver(recoverPasswordFormSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof recoverPasswordFormSchema>) {
    console.log(values);
  }
  return (
    <div className="overflow-auto max-h-[55vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-1">
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
          />
          <PasswordInput
            form={form}
            isDisabled={false}
            formDescription={"Confirm password must match the password above."}
            fieldName={"confirmPassword"}
            label={"Confirm Password"}
            placeHolder={"Confirm Password"}
          />
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
              Recover
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
