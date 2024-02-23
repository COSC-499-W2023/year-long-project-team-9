"use client";
import { Input } from "@/components/ui/input";
import CreateHeader from "./create-header";
import { ScrollArea } from "@/components/ui/scrollarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
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
import { useForm } from "react-hook-form";
import { addDays, endOfDay, format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Value } from "@radix-ui/react-select";

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
  requestEmails: z
    .array(z.string().trim().email().min(1).max(320))
    .min(1)
    .max(10),
  isBlurred: z.boolean().default(true),
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

export default function CreateForm() {
  // Defining form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      isBlurred: true,
      requestEmails: [""],
    },
  });

  // Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="scrollbar">
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

          {/* Due Date */}
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
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
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
