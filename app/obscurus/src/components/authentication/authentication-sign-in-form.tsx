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
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="overflow-auto max-h-[80vh]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="px-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
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
                      href="/sign/recover"
                      className="underline text-xs text-blue-400"
                    >
                      Forgot password
                    </a>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-right">
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
