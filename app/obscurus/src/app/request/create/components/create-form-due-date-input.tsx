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

export default function CreateFormDueDateInput({ register }: any) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-center text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <div className="">
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
          <div className="ml-auto">
            <CalendarIcon className="mr-2 h-4 w-4" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(endOfDay(new Date()), parseInt(value)))
          }
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
            onSelect={(value) => {
              value === undefined
                ? React.useState<Date>()
                : setDate(endOfDay(value));
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}
