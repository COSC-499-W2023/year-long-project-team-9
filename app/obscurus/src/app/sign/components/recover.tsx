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
  email: z.string().trim().min(1).max(100),
  password: z.string().trim().min(1),
});

export default function RecoverPassword() {
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
      <div>Recover</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Input></Input>
          <div className="text-right gap-2">
            <Button
              type="button"
              variant={"ghost"}
              className="justify-self-start"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Update
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
