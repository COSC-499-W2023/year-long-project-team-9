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
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
          {/* Password */}
          <PasswordInput
            form={form}
            isDisabled={false}
            formDescription={
              "Password must contain atleast one lowercase and one uppercase letter. Password must contain atleast one number and one special character. Password must be at least 8 characters and at most 24 characters."
            }
            fieldName={"password"}
            label={"Password"}
            placeHolder={"Password"}
          />
          {form.getFieldState("password").error && (
            <div className="flex flex-grow" />
          )}
          <PasswordInput
            form={form}
            isDisabled={false}
            formDescription={"Passwords must match."}
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
