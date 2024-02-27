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
import AuthenticationPasswordInput from "./authentication-form-password-input";
import AuthenticationConfirmPasswordInput from "./authentication-form-confirm-password-input";

const profileImageMaxSize = 1024 * 1024 * 10;
const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

// TODO: better error messages, be below for an example

const recoverPasswordFormSchema = z
  .object({
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
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match with the password above.",
    path: ["confirmPassword"],
  });

export default function RecoverPasswordForm() {
  const form = useForm<z.infer<typeof recoverPasswordFormSchema>>({
    resolver: zodResolver(recoverPasswordFormSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof recoverPasswordFormSchema>) {
    console.log(values);
  }
  return (
    <div className="overflow-auto">
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <div>Recover</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Password */}
          <AuthenticationPasswordInput
            form={form}
          ></AuthenticationPasswordInput>

          {/* Confirm Password */}
          <AuthenticationConfirmPasswordInput
            form={form}
          ></AuthenticationConfirmPasswordInput>
          <div className="text-right gap-2">
            <Button
              type="button"
              variant={"ghost"}
              className="justify-self-start"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Update
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
