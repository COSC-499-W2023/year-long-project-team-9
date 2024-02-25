"use client";
import { Input } from "@/components/ui/input";
import CreateHeader from "./create-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
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
import { CalendarIcon, Plus, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scrollarea";

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
  clientEmail: z
    .array(
      z.object({
        email: z.string().trim().min(1).max(320).email(),
      })
    )
    .min(1)
    .max(10)
    .refine((emails) => {
      const emailSet = new Set(
        emails.map((emailObj) => emailObj.email.toLowerCase())
      );
      return emailSet.size === emails.length;
    }),
  isBlurred: z.boolean(),
  requestDueDate: z
    .date()
    .min(new Date(new Date().setDate(new Date().getDate())), {
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
      clientEmail: [{ email: "" }],
    },
  });

  // Client Email stuff
  const {
    control,
    register,
    formState: { errors },
  } = form;
  const { fields, append, remove } = useFieldArray({
    name: "clientEmail",
    control,
  });
  const [clientEmailLength, setClientEmailLength] = useState(1);
  const [clientLabel, setClientLabel] = useState("Client");
  function changeClientEmailSize(size: number, change: number) {
    setClientEmailLength(size + change);
    if (size + change > 1) {
      setClientLabel("Clients");
    } else {
      setClientLabel("Client");
    }
  }

  // Submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div>
      {/* Showing current value of form */}

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

          {/* Client Emails */}
          <div>
            {fields.map((item, index) => (
              <Controller
                key={item.id}
                control={control}
                name={`clientEmail.${index}.email`}
                render={({ field, fieldState }) => (
                  <FormItem>
                    {clientEmailLength >= 2 &&
                    index === 0 &&
                    errors.clientEmail &&
                    errors.clientEmail.length !== undefined &&
                    errors.clientEmail.length ? (
                      <FormLabel className="text-destructive">
                        Clients
                      </FormLabel>
                    ) : clientEmailLength >= 2 &&
                      index === 0 &&
                      !(
                        errors.clientEmail &&
                        errors.clientEmail.length !== undefined &&
                        errors.clientEmail.length
                      ) ? (
                      <FormLabel>Clients</FormLabel>
                    ) : clientEmailLength === 1 &&
                      index === 0 &&
                      errors.clientEmail &&
                      errors.clientEmail.length !== undefined &&
                      errors.clientEmail.length ? (
                      <FormLabel className="text-destructive">Client</FormLabel>
                    ) : clientEmailLength === 1 &&
                      index === 0 &&
                      !(
                        errors.clientEmail &&
                        errors.clientEmail.length !== undefined &&
                        errors.clientEmail.length
                      ) ? (
                      <FormLabel>Client</FormLabel>
                    ) : (
                      <></>
                    )}
                    <FormControl>
                      <div className="py-1">
                        <div className="flex flex-row gap-1">
                          {index === 0 && clientEmailLength === 1 ? (
                            <Input placeholder={`Email`} {...field} />
                          ) : (
                            <Input
                              placeholder={`Email #${index + 1}`}
                              {...field}
                            />
                          )}
                          {clientEmailLength === 10 ? (
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
                              onClick={() => {
                                append({ email: "" });
                                changeClientEmailSize(clientEmailLength, 1);
                              }}
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
                        {fieldState.error && (
                          <FormMessage>{fieldState.error.message}</FormMessage>
                        )}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            ))}
          </div>
          {/* {fields.map((item, index) => (
            <>
              {index === 0 ? <FormLabel>{clientEmailLabel}</FormLabel> : null}
              <div key={index} className="flex flex-row gap-1 my-2">
                {index === 0 && clientEmailize === 1 ? (
                  <Input placeholder={`Email`} />
                ) : (
                  <Input placeholder={`Email ${index + 1}`} />
                )}
                {clientEmailize !== 10 && index === clientEmailize - 1 ? (
                  <Button
                    variant="outline"
                    type="button"
                    size="icon"
                    onClick={() => {
                      append({ email: "" });
                      changeclientEmailize(clientEmailize, 1);
                    }}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    type="button"
                    size="icon"
                    onClick={() => {
                      {
                        remove(index);
                        changeclientEmailize(clientEmailize, -1);
                      }
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </>
          ))} */}

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
