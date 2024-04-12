"use client";

import React from "react";
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
import { ArrowRight } from "lucide-react";
import { Input } from "../ui/input";

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
  loading,
  setDialogState,
  triggerSendVerifyEmail,
}: {
  loading: boolean;
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
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="px-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" disabled={loading} {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            variant={"default"}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <span>Sending Verification Code</span>
            ) : (
              <span className="flex flex-row">
                Send Verification Code <ArrowRight />
              </span>
            )}
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
