import { ReactNode, Suspense } from "react";
import Home from "./Home/page";
import Submit from "./Submit/page";
import Wrapper from "./wrapper";
import MyRequests from "./MyRequests/page";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";

function Page() {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen w-full flex flex-1 items-center justify-center">
            <p className="text-lg font-semibold ">Loading...</p>
          </div>
        }
      />
      <Submit />
      <Suspense />
    </>
  );
}

export default Page;
