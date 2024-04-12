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
import PasswordInput from "../authentication-and-profile-components/account-form-password-input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/modified-shadcn-ui-components/input-otp";

const forgotPasswordVerifyNewPasswordFormSchema = z
  .object({
    code: z.string().trim().min(1),
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

export default function ForgotPasswordVerifyNewPasswordForm({
  loading,
  email,
  setDialogState,
  triggerForgotPasswordChange,
  triggerSendForgotPasswordEmail,
}: {
  loading: boolean;
  email: string;
  setDialogState: Function;
  triggerForgotPasswordChange: Function;
  triggerSendForgotPasswordEmail: Function;
}) {
  const form = useForm<
    z.infer<typeof forgotPasswordVerifyNewPasswordFormSchema>
  >({
    resolver: zodResolver(forgotPasswordVerifyNewPasswordFormSchema),
  });

  async function onSubmit(
    values: z.infer<typeof forgotPasswordVerifyNewPasswordFormSchema>
  ) {
    triggerForgotPasswordChange(email, values.code, values.password);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-1">
          <Label className="flex justify-start font-bold">Email: {email}</Label>
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="px-1">
                <FormLabel>Forgot Password Code</FormLabel>
                <FormControl>
                  <div className="flex justify-center">
                    <InputOTP maxLength={6} disabled={loading} {...field}>
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
          <div className="text-xs">
            <span>Did not receive an email? </span>
            <a
              onClick={() => triggerSendForgotPasswordEmail(email)}
              className="underline text-blue-400 hover:cursor-pointer"
            >
              Resend Forgot Password Code
            </a>
          </div>
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
          <Button
            type="submit"
            variant={"default"}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <span>Reseting Password</span>
            ) : (
              <span>Reset Password</span>
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
