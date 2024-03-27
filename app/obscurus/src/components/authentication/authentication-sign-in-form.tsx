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
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const accountFormSchema = z.object({
  email: z.string().trim().toLowerCase().min(1).max(320).email(),
  password: z.string().trim().min(1).max(24),
});

export default function SignInForm({
  setDialogState,
}: {
  setDialogState: Function;
}) {
  const form = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof accountFormSchema>) {
    console.log(values);
  }

  return (
    <div className="overflow-auto max-h-[55vh]">
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
                    <Input placeholder="Password" {...field} />
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
        </form>
      </Form>
    </div>
  );
}
