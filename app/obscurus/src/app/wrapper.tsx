"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Inbox,
  FileUp,
  Youtube,
  MessageCircle,
  User,
  LogOut,
  Send,
  Search,
} from "lucide-react";
import Nav from "@/components/nav";
import { Children, ReactNode, Suspense, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useMail } from "../components/ui/mail/use-mail";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import SubmissionsList from "@/app/submit/components/submissions-list";
import { Input } from "@/components/ui/input";


export function Wrapper({
  defaultLayout = [50, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
  children,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  navCollapsedSize: number;
  children: ReactNode | ReactNode[];
}) {


  const [activeComponent, setActiveComponent] = useState("mainContent");

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mail] = useMail();
  const router = useRouter();

  console.log(children);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
      className="h-full max-h-[800px] items-stretch"
    >
      <ResizablePanel
        defaultSize={5}
        collapsedSize={navCollapsedSize}
        collapsible={true}
          // onCollapse={(collapsed:any) => {
          //   setIsCollapsed(collapsed)
          //   document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          //     collapsed
          //   )}`
          // }}
        className={cn(
          isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
        )}
      >
          <Separator />
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Requests",
              icon: Inbox,
              variant: "default",
            },
            {
              title: "Submissions",
              icon: FileUp,
              variant: "ghost",
            },
            {
              title: "My Videos",
              icon: Youtube,
              variant: "ghost",
            },
            {
              title: "Chat",
              icon: MessageCircle,
              variant: "ghost",
            },
          ]}
        />
    
      </ResizablePanel>
     
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20} minSize={20}>
      {children}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default Wrapper;
