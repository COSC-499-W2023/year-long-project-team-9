"use client";
// IMPORTS
import { Suspense } from "react";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";

// CONSTRUCTS

// FUNCTIONS
const Chat = () => {
  return (
    <>
      <ResizablePanel defaultSize={50}>
        <div className=" h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Chat</h2>
            </div>
          </div>
          <Suspense>
            {/* <DataTable data={submissions} columns={columns} /> */}
          </Suspense>
        </div>
      </ResizablePanel>
      <ResizablePanel defaultSize={50}>
        <div></div>
      </ResizablePanel>
    </>
  );
};

// EXPORT
export default Chat;
