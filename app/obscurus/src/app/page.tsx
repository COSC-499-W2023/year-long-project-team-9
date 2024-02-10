import { ReactNode } from "react";
import Home from "./Home/page";
import Dashboard  from "./dashboard/page";
import Wrapper from "./wrapper";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";

export function Page({ children }: { children: ReactNode }) {
  return (
 
      <Dashboard/>
      

  );
}

export default Page;
