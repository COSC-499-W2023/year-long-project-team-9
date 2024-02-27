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
// TODO: Fill better error messages, be below for an example

const accountFormSchema = z
  .object({
    email: z.string().trim().toLowerCase().min(1).max(320).email(),
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
    firstName: z
      .string()
      .trim()
      .min(1, { message: "First name must be at least on character." })
      .max(100),
    lastName: z.string().trim().min(1).max(100),
    code: z.string().trim().min(1),
    ageVerified: z.boolean(),
    agreedToTermsAndConditions: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match with the password above.",
    path: ["confirmPassword"],
  });

export default function SignUp() {
  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
  });

  function onSubmit(values: z.infer<typeof accountFormSchema>) {
    console.log(values);
  }
  return (
    <div className="overflow-auto">
      {/* TODO Have the ability to go back */}
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <div>Sign Up</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <Input></Input>

          {/* Password */}

          {/* Confirm Password */}

          {/* First Name */}

          {/* Last Name */}

          {/* Age Verification */}

          {/* Terms and Conditions */}

          <div className="text-right gap-2">
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
