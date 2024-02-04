"use server";
import Layout from "../layout";
import { Api } from "sst/node/api";
import { Requests, Submissions, Users } from "stacks/core/src/sql.generated";
import { ListRequests } from "@/components/ListRequests";
import CreateRequest from "@/components/CreateRequest";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Inbox, FileUp, Youtube, MessageCircle } from "lucide-react";
import TestDatabase from "@/components/TestDatabase";
import Hero from "@/components/Hero";
import RequestDisplay from "@/components/request-display";
import Nav from "@/components/nav";
import Image from "next/image";
import { columns } from "./components/columns";
import { UserNav } from "./components/user-nav";
import { DataTable } from "./components/data-table";
import { Task } from "./schema";

async function getSubmissions() {
  const res = await fetch(Api.Api.url + "/getSubmissions");

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Dashboard() {
  const submissions: Task[] = await getSubmissions();
  console.log("Raw submissions", submissions);

  console.log("Submission #1", submissions[0].request_id);

  // const formattedSubmissions: Task[] = [
  //   {
  //     id: submissions[0].submission_id || 1,
  //     title: submissions[0].requestee_email || "Undefined",
  //     status: "status",
  //     label: "label",
  //     priority: "priority",
  //   },
  // ];

  // console.log(formattedSubmissions);

  return (
    <>
      {submissions ? (
        <>
          <div className="md:hidden">
            <Image
              src="/examples/tasks-light.png"
              width={1280}
              height={998}
              alt="Playground"
              className="block dark:hidden"
            />
            <Image
              src="/examples/tasks-dark.png"
              width={1280}
              height={998}
              alt="Playground"
              className="hidden dark:block"
            />
          </div>
          <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome back!
                </h2>
                <p className="text-muted-foreground">
                  Here&apos;s a list of your tasks for this month!
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <UserNav />
              </div>
            </div>
            <DataTable data={submissions} columns={columns} />
          </div>
        </>
      ) : (
        <div>N/A</div>
      )}

    </>
  );
}
