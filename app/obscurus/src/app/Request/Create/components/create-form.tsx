"use client";
import { Input } from "@/components/ui/input";
import CreateHeader from "./create-header";
import { ScrollArea } from "@/components/ui/scrollarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
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
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CreateForm() {
  const [date, setDate] = React.useState<Date>();
  return (
    <>
      <CreateHeader />
      <ScrollArea className="flex flex-row">
        {/* Request Title */}
        <div>
          <Label>Request Title</Label>
        </div>
        <div>
          <Input type="string" placeholder="Title" />
        </div>
        {/* Client emails */}
        <Label>Client</Label>
        <div>
          <div>
            <Input type="email" placeholder="Email" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            {/* Video Processing */}
            <div>
              <Label>Video Processing</Label>
            </div>
            <Tabs defaultValue="blurred">
              <TabsList className="w-full">
                <TabsTrigger value="normal" className="w-full">
                  Normal
                </TabsTrigger>
                <TabsTrigger value="blurred" className="w-full">
                  Blurred
                </TabsTrigger>
              </TabsList>
              <TabsContent value="normal">{/* TODO  */}</TabsContent>
              <TabsContent value="blurred">{/* TODO  */}</TabsContent>
            </Tabs>
          </div>
          {/* Due Date */}
          <div>
            <Label>Due Date</Label>
            <div>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-center text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="flex w-auto flex-col space-y-2 p-2"
                >
                  <Select
                    onValueChange={(value) =>
                      setDate(addDays(new Date(), parseInt(value)))
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
                      onSelect={setDate}
                    />
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
        {/* Request Description  */}
        <Label>Request Description</Label>
        <div className="h-full">
          <Textarea
            placeholder="Description"
            className="resize-none"
            rows={18} // TODO: Change h-full
          />
        </div>
        <div className="text-right gap-2 py-2">
          <Button type="button" variant="ghost" className="justify-self-start">
            Cancel Request
          </Button>
          <Button
            type="submit"
            variant="default"
            className="justify-self-start"
          >
            Submit Request
          </Button>
        </div>
      </ScrollArea>
    </>
  );
}
