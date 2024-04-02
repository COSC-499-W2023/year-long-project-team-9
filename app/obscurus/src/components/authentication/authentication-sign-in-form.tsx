"use client";
import React, { useState } from "react";
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
import { LucideLoader2 } from "lucide-react";
import { Label } from "../ui/label";
import { type SignInInput } from "aws-amplify/auth";

const accountFormSchema = z.object({
  email: z.string().trim().toLowerCase().min(1).max(320).email(),
  password: z.string().trim().min(1).max(24),
});

export default function SignInForm({
  signInUser,
  setDialogState,
}: {
  signInUser: Function;
  setDialogState: Function;
}) {
  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {},
  });
  const [loading, setLoading] = useState(false);
  const [failedLogin, setFailedLogin] = useState(false);

  async function onSubmit(values: z.infer<typeof accountFormSchema>) {
    setLoading(true);
    const userSignInInput: SignInInput = {
      username: values.email,
      password: values.password,
    };
    const signInSuccess = await signInUser(userSignInInput);
    if (signInSuccess) {
      window.location.reload();
    } else {
      setLoading(false);
      setFailedLogin(true);
    }
  }

  return (
    <div className="flex flex-col h-full">
      {loading ? (
        <div className="flex flex-col w-full h-full justify-start items-center gap-5">
          <LucideLoader2 className="animate-spin text-primary" size={75} />
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="px-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="px-1">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                      <a
                        onClick={() => setDialogState("forgotPassword")}
                        className="underline text-xs text-blue-400 hover:cursor-pointer"
                      >
                        Forgot password
                      </a>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {failedLogin && (
              <div className="flex justify-center border border-red-500 rounded p-2">
                <Label className="text-red-500 text-xs">
                  Invalid Credentials
                </Label>
              </div>
            )}
            <Button type="submit" variant={"default"} className="w-full">
              Sign In
            </Button>
            <div className="text-xs text-center mt-2">
              <span>Need an account? </span>
              <a
                onClick={() => setDialogState("signUp")}
                className="underline text-blue-400 hover:cursor-pointer"
              >
                Sign Up
              </a>
            </div>
            <div className="text-xs text-center mt-2">
              <span>Need to verify your account? </span>
              <a
                onClick={() => setDialogState("verifyEmail")}
                className="underline text-blue-400 hover:cursor-pointer"
              >
                Send Verification Code
              </a>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
