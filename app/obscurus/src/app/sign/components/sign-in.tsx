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

const profileImageMaxSize = 1024 * 1024 * 10;
const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];

// TODO: better error messages, be below for an example

const accountFormSchema = z.object({
  email: z.string().trim().min(1).max(500, { message: "Email is too long." }),
  password: z
    .string()
    .trim()
    .min(1)
    .max(100, { message: "Password is too long." }),
});

export default function SignIn() {
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
          <FormItem>
            <FormLabel>Email</FormLabel>
            <Input
              maxLength={500}
              placeholder="Email"
              {...form.register("email")}
            ></Input>
            {form.getFieldState("email").error && (
              <FormMessage>
                {/* no need to worry about error */}
                {form.getFieldState("email").error.message}
              </FormMessage>
            )}
          </FormItem>
          {/* Password */}
          <FormItem>
            <FormLabel>Password</FormLabel>
            <Input
              maxLength={100}
              placeholder="Email"
              {...form.register("password")}
            ></Input>
            <a href="/sign/recover" className="text-xs underline text-blue-400">
              Recover Password
            </a>
            {form.getFieldState("password").error && (
              <FormMessage>
                {/* no need to worry about error */}
                {form.getFieldState("password").error.message}
              </FormMessage>
            )}
          </FormItem>
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
