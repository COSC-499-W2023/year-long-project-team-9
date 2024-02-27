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
import { Button } from "@/components/ui/button";
import AuthenticationEmailInput from "./authentication-form-email-input";
import AuthenticationSignInPasswordInput from "./authentication-sign-in-form-password-input";
import AuthenticationSignInEmailInput from "./authentication-sign-in-form-email-input";

// TODO: better error messages, be below for an example

const accountFormSchema = z.object({
  email: z.string().trim().toLowerCase().min(1).max(320).email(),
  password: z.string().trim().min(1).max(24),
});

export default function SignInForm() {
  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof accountFormSchema>) {
    console.log(values);
  }
  return (
    <div className="overflow-auto">
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <div>Style the button google button</div>
      <Button className="w-full mb-2">Google</Button>
      {/* Style please */}
      <div className="text-center">Or</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <AuthenticationSignInEmailInput
            form={form}
          ></AuthenticationSignInEmailInput>

          {/* Password */}
          <AuthenticationSignInPasswordInput
            form={form}
          ></AuthenticationSignInPasswordInput>

          <div className="flex flex-col-2 gap-2">
            <a href="/sign/up">
              {/* Button  variant="ghost" do not change*/}
              <Button type="button" variant="ghost">
                Sign Up
              </Button>
            </a>
            <div className="ml-auto">
              <Button
                type="submit"
                variant={"default"}
                className="justify-self-start"
              >
                Sign In
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
