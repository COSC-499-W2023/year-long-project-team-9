"use client";
import { Input } from "@/components/ui/input";
import RequestHeader from "./request-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { SortDescIcon } from "lucide-react";

interface RequestListProps {
  email: string;
}

export default function RequestList({ email }: RequestListProps) {
  return (
    <>
      <RequestHeader />
      <div className="py-2">
        <Input type="search" placeholder="Search" />
      </div>
      <Tabs defaultValue="completed">
        <div className="flex flex-row">
          <TabsList className="w-full">
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="inProgress">In Progress</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="completed">Completed</TabsContent>
        <TabsContent value="inProgress">In Progress</TabsContent>
        <TabsContent value="pending">Pending</TabsContent>
        <TabsContent value="archived">Archived</TabsContent>
      </Tabs>
    </>
  );
}
