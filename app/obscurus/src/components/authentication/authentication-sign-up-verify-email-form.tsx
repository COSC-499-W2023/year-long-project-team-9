"use client";
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

const verifyEmailFormSchema = z.object({
  code: z.string().trim().min(1),
});

export default function SignUpVerifyEmailForm({
  email,
  setDialogState,
  triggerVerifyEmail,
}: {
  email: string;
  setDialogState: Function;
  triggerVerifyEmail: Function;
}) {
  const form = useForm<z.infer<typeof verifyEmailFormSchema>>({
    resolver: zodResolver(verifyEmailFormSchema),
  });

  async function onSubmit(values: z.infer<typeof verifyEmailFormSchema>) {
    triggerVerifyEmail(values.code);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Label className="flex justify-start font-bold">Email: {email}</Label>
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="px-1">
                <FormLabel>Verification Code</FormLabel>
                <FormControl>
                  <Input placeholder="Verification Code" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant={"default"} className="w-full">
            Verify
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
