"use server";
import { Api } from "sst/node/api";
import Image from "next/image";
import { columns } from "./components/columns";
import { UserNav } from "./components/user-nav";
import { DataTable } from "./components/data-table";
import { Video } from "./schema";
import { ReactNode, Suspense } from "react";
import SubmissionsList from "@/app/Submit/components/submissions-list";
import { Submissions } from "stacks/core/src/submissions";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { PulseLoader } from "react-spinners";

async function getSubmissions() {
  const res = await fetch(Api.Api.url + "/getSubmissions");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Submit() {
  const submissions: Video[] = await getSubmissions();

  return (
    <>
      <ResizablePanel defaultSize={50}>
        <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex overflow-y-scroll">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Welcome back!
              </h2>
              <p className="text-muted-foreground">
                Here&apos;s a list of your tasks for this month!
              </p>
            </div>
            {/* <div className="flex items-center space-x-2">
              <UserNav />
            </div> */}
          </div>
          <Suspense>
            <DataTable data={submissions} columns={columns} />
          </Suspense>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={40}>
        <div className=" h-full flex-1 flex-col p-6  md:flex overflow-y-scroll">
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
        </div>
      </ResizablePanel>
    </>
  );
}
