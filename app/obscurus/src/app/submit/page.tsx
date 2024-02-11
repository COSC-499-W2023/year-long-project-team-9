"use server";
import { Api } from "sst/node/api";
import Image from "next/image";
import { columns } from "./components/columns";
import { UserNav } from "./components/user-nav";
import { DataTable } from "./components/data-table";
import { Video } from "./schema";
import { ReactNode, Suspense } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmissionsList from "@/app/submit/components/submissions-list";
import { Submissions } from "stacks/core/src/submissions";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { Skeleton } from "@/components/ui/skeleton";
import { PulseLoader } from "react-spinners";

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

export default async function Submit() {
  const submissions: Video[] = await getSubmissions();
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
      <ResizablePanel defaultSize={10} defaultValue={10}>
        <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex">
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
          <Suspense>
            <DataTable data={submissions} columns={columns} />
          </Suspense>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={10} defaultValue={10}>
        <Suspense
          fallback={
            <>
              <PulseLoader />
              <p>Loading...</p>
            </>
          }
        >
          <SubmissionsList items={submissions} />
        </Suspense>
      </ResizablePanel>
    </>
  );
}
