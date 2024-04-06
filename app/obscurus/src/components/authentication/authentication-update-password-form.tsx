"use client";

import React, { useState } from "react";
import { LucideLoader2 } from "lucide-react";
import { Label } from "../ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import PasswordInput from "../authentication-and-profile-components/account-form-password-input";
import { updatePassword, type UpdatePasswordInput } from "aws-amplify/auth";

const updatePasswordFormSchema = z
  .object({
    oldPassword: z.string().trim().min(1).max(24),
    newPassword: z
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
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export default function UpdatePasswordForm({
  setIsOpen,
}: {
  setIsOpen: Function;
}) {
  const form = useForm<z.infer<typeof updatePasswordFormSchema>>({
    resolver: zodResolver(updatePasswordFormSchema),
    defaultValues: {},
  });
  const [loading, setLoading] = useState(false);
  const [failedUpdatePassword, setFailedUpdatePassword] = useState(false);
  async function onSubmit(values: z.infer<typeof updatePasswordFormSchema>) {
    setLoading(true);
    const updateUserPasswordInput: UpdatePasswordInput = {
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    };
    try {
      await updatePassword(updateUserPasswordInput);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      setFailedUpdatePassword(true);
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col h-full">
      {loading ? (
        <div className="flex flex-col w-full h-full justify-start items-center gap-5">
          <LucideLoader2 className="animate-spin text-primary" size={75} />
        </div>
      ) : (
        <div>
          {failedUpdatePassword && (
            <div className="flex justify-center border border-red-500 rounded p-2">
              <Label className="text-red-500 text-xs">
                Failed To Update Password, Please Try Again
              </Label>
            </div>
          )}
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 px-1"
            >
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem className="px-1">
                    <FormLabel>Old Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder=" Old Password"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <PasswordInput
                form={form}
                isDisabled={false}
                formDescription={
                  "Password must contain at least one lowercase and one uppercase letter. Password must contain at least one number and one special character. Password must be at least 8 characters and at most 24 characters."
                }
                fieldName={"newPassword"}
                label={"New Password"}
                placeHolder={"New Password"}
              />
              <PasswordInput
                form={form}
                isDisabled={false}
                formDescription={"Passwords must match."}
                fieldName={"confirmNewPassword"}
                label={"Confirm New Password"}
                placeHolder={"Confirm New Password"}
              />
              <Button type="submit" variant={"default"} className="w-full">
                Update Password
              </Button>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
