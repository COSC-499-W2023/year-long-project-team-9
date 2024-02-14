import { ReactNode } from "react";
import Home from "./Home/page";
import Submit from "./submit/page";
import Wrapper from "./wrapper";
import MyRequests from "./MyRequests/page";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";

function Page() {
  return (
    <MyRequests />
    // <Submit/>
  );
}

export default Page;
