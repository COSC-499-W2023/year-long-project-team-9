"use client";
import CreateHeader from "./create-header";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import TitleInput from "./create-form-title-input";
import { endOfDay } from "date-fns";
import DescriptionInput from "./create-form-description-input";

const createFormSchema = z.object({
  title: z.string().min(1).max(100),
  dueDate: z.date().min(endOfDay(new Date())),
  description: z.string().min(1).max(2000),
});

interface CreateFormProps {
  userEmail: string;
}

export default function CreateForm({ userEmail }: CreateFormProps) {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
    },
  });

  const { register } = form;

  function onSubmit(values: z.infer<typeof createFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <CreateHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TitleInput register={register}></TitleInput>

          <DescriptionInput register={register}></DescriptionInput>
          <div className="text-right gap-2">
            <Button
              type="button"
              variant={"ghost"}
              className="justify-self-start"
            >
              Cancel Request
            </Button>
            <Button
              type="submit"
              variant={"default"}
              className="justify-self-start"
            >
              Submit Request
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
