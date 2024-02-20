import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default async function RequestSummaries() {
  return (
    <>
      <div className="flex-row px-4">
        <Separator />
        <div className="py-2">
          <Input placeholder="Search" />
        </div>
        <Tabs defaultValue="account">
          <TabsList className="w-full">
            <TabsTrigger value="newest">Newest</TabsTrigger>
            <TabsTrigger value="oldest">Oldest</TabsTrigger>
            <TabsTrigger value="archive">Archive</TabsTrigger>
            <TabsTrigger value="to do">To Do</TabsTrigger>
            <TabsTrigger value="in progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
          </TabsList>
          <TabsContent value="newest">newest</TabsContent>
          <TabsContent value="oldest">oldest</TabsContent>
          <TabsContent value="archive">archive</TabsContent>
          <TabsContent value="to do">to do</TabsContent>
          <TabsContent value="in progress">in progress</TabsContent>
          <TabsContent value="completed">completed</TabsContent>
          <TabsContent value="overdue">overdue</TabsContent>
        </Tabs>
      </div>
    </>
  );
}
