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
import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/modified-shadcn-ui-components/input-otp";

const verifyEmailFormSchema = z.object({
  code: z.string().trim().min(1),
});

export default function SignUpVerifyEmailForm({
  email,
  setDialogState,
  triggerVerifyEmail,
  triggerResendVerifyEmail,
}: {
  email: string;
  setDialogState: Function;
  triggerVerifyEmail: Function;
  triggerResendVerifyEmail: Function;
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
                  <div className="flex justify-center">
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="text-xs text-center my-2">
            <span>Did not receive an email? </span>
            <a
              onClick={() => triggerResendVerifyEmail()}
              className="underline text-blue-400 hover:cursor-pointer"
            >
              Resend Verification Code
            </a>
          </div>
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
