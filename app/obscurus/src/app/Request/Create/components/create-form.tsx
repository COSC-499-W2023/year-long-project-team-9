"use client";
import { Input } from "@/components/ui/input";
import CreateHeader from "./create-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { addDays, endOfDay, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Minus, Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Value } from "@radix-ui/react-select";
import { ScrollArea } from "@/components/ui/scrollarea";
import Index from "@/app/Submit/components/old-upload";

// Create Request from Schema
const formSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, {
      message: "Title must be at least 1 character.",
    })
    .max(100, {
      message: "Title must no more than 100 characters.",
    }),
  clientEmails: z
    .array(z.object({ email: z.string().trim().min(1).max(320) }))
    .min(1)
    .max(10),
  isBlurred: z.boolean(),
  requestDueDate: z.date().min(endOfDay(new Date()), {
    message: "Due must be no earlier than today.",
  }),
  requestDescription: z
    .string()
    .trim()
    .min(1, {
      message: "Request Description must be at least 1 character.",
    })
    .max(2000, {
      message: "Request Description must no more than 2000 characters.",
    }),
});

// TODO: Figure out how to populate FormMessage withotu displaying

export default function CreateForm() {
  // Defining form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isBlurred: true,
      clientEmails: [{ email: "1" }],
    },
  });

  // Client Email stuff
  const {
    control,
    formState,
    register,
    formState: { errors },
  } = form;
  const { fields, append, remove } = useFieldArray({
    name: "clientEmails",
    control,
  });

  // Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      {/* Showing current value of form */}
      <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      <CreateHeader />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Request Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Request Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" maxLength={101} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Client Email */}
          <div>
            {form.getValues("clientEmails").length === 1 ? (
              <FormLabel>Client</FormLabel>
            ) : (
              <FormLabel>Clients</FormLabel>
            )}
            <div>
              {fields.map((field, index) => {
                return (
                  <div className="form-control py-2" key={field.id}>
                    <div className="flex flex-row gap-1">
                      <Input
                        placeholder="Email"
                        {...register(`clientEmails.${index}.email`)}
                      />
                      {fields.length === 10 ? (
                        <Button
                          variant="outline"
                          type="button"
                          size="icon"
                          onClick={() => remove(index)}
                        >
                          <X
                            className="h-4 w-4"
                            onClick={() => remove(index)}
                          />
                        </Button>
                      ) : index === fields.length - 1 ? (
                        <Button
                          variant="outline"
                          type="button"
                          size="icon"
                          onClick={() => append({ email: "" })}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          type="button"
                          size="icon"
                          onClick={() => remove(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    {/* Error Message */}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Shared label for all email inputs */}
          {fields.map((item, index) => (
            <Controller
              key={item.id}
              control={control}
              name={`clientEmails.${index}.email`}
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Emails</FormLabel>
                  <FormControl>
                    <Input placeholder={`Email #${index + 1}`} {...field} />
                  </FormControl>
                  {fieldState.error && (
                    <FormMessage>{fieldState.error.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
          ))}

          {/* Due Date */}
          {/* TODO: Select and local time */}
          <FormField
            control={form.control}
            name="requestDueDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Request Due Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Due Date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="center">
                    <Calendar
                      className="w-[100%]"
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date <
                        new Date(new Date().setDate(new Date().getDate() - 1))
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* form.setValue("requestDueDate", endOfDay(value)) */}
          {/* new Date(new Date().setDate(new Date().getDate() - 1)) */}
          {/* Video Processing */}
          <FormField
            control={form.control}
            name="isBlurred"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Video Processing</FormLabel>
                <Tabs defaultValue="blurred" className="w-full">
                  <TabsList className="w-full">
                    <TabsTrigger
                      value="normal"
                      className="w-full"
                      onClick={() => {
                        form.setValue("isBlurred", false);
                        console.log("false");
                      }}
                    >
                      Normal
                    </TabsTrigger>
                    <TabsTrigger
                      value="blurred"
                      className="w-full"
                      onClick={() => {
                        form.setValue("isBlurred", true);
                        console.log("true");
                      }}
                    >
                      Blurred
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          {/* Request Description */}
          <ScrollArea>
            <FormField
              control={form.control}
              name="requestDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Request Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description"
                      className="resize-none"
                      {...field}
                      maxLength={2001}
                      rows={18} // TODO: Change h-full
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </ScrollArea>
          <div className="text-right gap-2 py-2">
            <Button
              type="button"
              variant="ghost"
              className="justify-self-start"
            >
              Cancel Request
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
