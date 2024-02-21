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
import SubmissionDisplay from "./components/submission-display";
import Page from "./[requestId]/page";

async function getSubmissions() {
  const res = await fetch(Api.Api.url + "/getSubmissions");

  if (res.ok) {
    return res.json();
  }
}

async function Submit() {
  const submissions: Video[] = await getSubmissions();

  return (
    <>
      <ResizablePanel defaultSize={40}>
        <div className="max-h-[800px] h-full flex-1 flex-col p-6  md:flex overflow-y-scroll">
          <Suspense
            fallback={
              <div>
                Loading...
              </div>
            }
          >
            <SubmissionsList submissions={submissions} />
          </Suspense>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="max-h-[800px] h-full flex-1 flex-col space-y-8 p-8 md:flex overflow-y-scroll">
          <Suspense fallback={<div>Loading...</div>}>
            <SubmissionDisplay submissions={submissions} />
          </Suspense>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
    </>
  );
}

export default Submit;
