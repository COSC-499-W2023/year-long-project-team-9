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
          <div>
            <PasswordInput
              form={form}
              isDisabled={false}
              fieldName={"password"}
              label={"Password"}
              placeHolder={"Password"}
            />
            <div id="passwordErrorChecks">
              {form.getFieldState("password").error &&
              form.getFieldState("password").error?.type === "too_small" ? (
                <li className="text-xs mt-2 text-red-500">
                  Password must be at least 8 characters.
                </li>
              ) : (
                <li className="text-xs mt-2">
                  Password must be at least 8 characters.
                </li>
              )}
              {form.getFieldState("password").error &&
              form.getFieldState("password").error?.type === "too_big" ? (
                <li className="text-xs text-red-500">
                  Password must be at most 24 characters.
                </li>
              ) : (
                <li className="text-xs">
                  Password must be at most 24 characters.
                </li>
              )}
              {form.getFieldState("password").error &&
              form.getFieldState("password").error?.type === "invalid_string" &&
              !/[A-Z]/.test(form.getValues("password")) ? (
                <li className="text-xs text-red-500">
                  Password must contain at least one uppercase letter.
                </li>
              ) : (
                <li className="text-xs">
                  Password must contain at least one uppercase letter.
                </li>
              )}
              {form.getFieldState("password").error &&
              form.getFieldState("password").error?.type === "invalid_string" &&
              !/[a-z]/.test(form.getValues("password")) ? (
                <li className="text-xs text-red-500">
                  Password must contain at least one lowercase letter.
                </li>
              ) : (
                <li className="text-xs">
                  Password must contain at least one lowercase letter.
                </li>
              )}
              {form.getFieldState("password").error &&
              form.getFieldState("password").error?.type === "invalid_string" &&
              !/[0-9]/.test(form.getValues("password")) ? (
                <li className="text-xs text-red-500">
                  Password must contain at least one number.
                </li>
              ) : (
                <li className="text-xs">
                  Password must contain at least one number.
                </li>
              )}
              {form.getFieldState("password").error &&
              form.getFieldState("password").error?.type === "invalid_string" &&
              !/[\W_]/.test(form.getValues("password")) ? (
                <li className="text-xs text-red-500">
                  Password must contain at least one special character.
                </li>
              ) : (
                <li className="text-xs">
                  Password must contain at least one special character.
                </li>
              )}
            </div>
          </div>
          <div>
            <PasswordInput
              form={form}
              isDisabled={false}
              fieldName={"confirmPassword"}
              label={"Confirm Password"}
              placeHolder={"Confirm Password"}
            />
            {form.getFieldState("confirmPassword").error &&
            form.getFieldState("confirmPassword").error?.type === "custom" ? (
              <li className="text-xs mt-2 text-red-500">
                Passwords must match.
              </li>
            ) : (
              <li className="text-xs mt-2">Passwords must match.</li>
            )}
          </div>
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
