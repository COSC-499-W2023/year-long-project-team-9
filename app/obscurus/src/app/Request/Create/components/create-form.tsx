"use client";
import { Input } from "@/components/ui/input";
import CreateHeader from "./create-header";
import { ScrollArea } from "@/components/ui/scrollarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function CreateForm() {
  const [showAlert, setShowAlert] = useState(false);

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
        <Label>Client(s)</Label>
        <div>
          <div>
            <Input type="email" placeholder="Email 1" />
          </div>
        </div>
        {/* Video Processing */}
        <Label>Video Processing</Label>
        <Tabs defaultValue="blurred">
          <TabsList className="w-full">
            <TabsTrigger value="notBlurred">Not Blurred</TabsTrigger>
            <TabsTrigger value="blurred">Blurred</TabsTrigger>
          </TabsList>
          <TabsContent value="notBlurred">{/* TODO  */}</TabsContent>
          <TabsContent value="blurred">{/* TODO  */}</TabsContent>
        </Tabs>
        {/* Request Description  */}
        <Label>Request Description</Label>
        <div className="h-full">
          <Textarea
            placeholder="Tell us a little bit about yourself"
            className="resize-none"
            rows={20} // TODO: Change h-full
          />
        </div>
        <div className="py-2">
          <Separator />
        </div>
        <div className="text-right gap-2">
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
