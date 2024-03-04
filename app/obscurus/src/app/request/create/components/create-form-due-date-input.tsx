"use client";
import * as React from "react";
import { addDays, endOfDay, format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/app/functions/utils";
import { FormLabel, FormMessage } from "@/components/ui/form";

export default function CreateFormDueDateInput({ form }: any) {
  const [date, setDate] = React.useState<Date>();
  function changeValue(date: Date | undefined) {
    if (date !== undefined) {
      setDate(endOfDay(new Date(date)));
      form.setValue("dueDate", endOfDay(new Date(date)));
      form.clearErrors("dueDate");
    }
  }

  return (
    <div>
      <FormLabel>Request Due Date</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <div>
            <Button
              type="button"
              variant={"outline"}
              className={cn(
                "w-full justify-center text-left font-normal",
                !date && "text-muted-foreground"
              )}
              disabled={form.formState.isSubmitting}
            >
              <div className="">
                {date ? format(date, "PPP") : <span>Due Date</span>}
              </div>
              <div className="ml-auto">
                <CalendarIcon className="mr-2 h-4 w-4" />
              </div>
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="center"
          className="flex w-auto flex-col space-y-2 p-2"
        >
          <Select
            onValueChange={(value) => {
              setDate(addDays(endOfDay(new Date()), parseInt(value)));
              form.setValue("dueDate", endOfDay(new Date()), parseInt(value));
              form.clearErrors("dueDate");
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(value) => changeValue(value)}
              disabled={(date) =>
                date < new Date(new Date().setDate(new Date().getDate() - 1))
              }
            />
          </div>
        </PopoverContent>
      </Popover>
      {form.getFieldState("dueDate").error && (
        <FormMessage>{form.getFieldState("dueDate").error.message}</FormMessage>
      )}
    </div>
  );
}
