"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inbox, FileUp, Youtube, MessageCircle } from "lucide-react";
import Nav from "@/components/nav";
import NavBar from "@/components/NavBar";
import { ListRequests } from "@/components/ListRequests";
import { Submissions } from "stacks/core/src/sql.generated";
import Image from "next/image";
import Home from "./Home/page";

export default function Wrapper({ mainContent, sidebarContent }: { mainContent: React.ReactNode; sidebarContent: React.ReactNode }) {
  // const u: Users[] = users;
  // const s: Submissions[] = submissions;
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full max-h-[800px] items-stretch"
      >
        <ResizablePanel
          defaultSize={10}
          collapsedSize={1}
          collapsible={false}
          minSize={10}
          maxSize={15}
          className={cn("min-w-[50px] transition-all duration-300 ease-in-out")}
        >
          <Nav
            isCollapsed={false}
            links={[
              {
                title: "Requests",
                icon: Inbox,
                variant: "default",
                href: "/MyRequests",
              },
              {
                title: "Submissions",
                icon: FileUp,
                variant: "ghost",
                href: "/Submissions",
              },
              {
                title: "My Videos",
                icon: Youtube,
                variant: "ghost",
                href: "/MyVideos",
              },
              {
                title: "Chat",
                icon: MessageCircle,
                variant: "ghost",
                href: "/Messages",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="" defaultSize={2}>
           {mainContent}
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={20}>
          {sidebarContent}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
