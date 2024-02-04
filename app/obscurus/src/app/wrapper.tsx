"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inbox, FileUp, Youtube, MessageCircle, Sun } from "lucide-react";
import Nav from "@/components/nav";
import NavBar from "@/components/NavBar";
import { ListRequests } from "@/components/ListRequests";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import Image from "next/image";
import Home from "./Home/page";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Dashboard from "./dashboard/page";

const componentMappings = {
  Home: Home,
  Requests: ListRequests,
  Submissions: Dashboard,
  // Add other mappings here
};

export default function Wrapper({ requests }: { requests: Requests[] }) {
  // const u: Users[] = users;
  // const s: Submissions[] = submissions;
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [activeComponent, setActiveComponent] = useState<PageKeys>("Requests");


  type PageKeys = 'Home' | 'Requests' | 'Submissions';
  const ActiveComponent = componentMappings[activeComponent];

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full max-h-[800px] items-stretch border-y-2"
      >
        <ResizablePanel
          defaultSize={10}
          maxSize={20}
          collapsedSize={1}
          collapsible={false}
          className={cn("min-w-[50px] transition-all duration-300 ease-in-out")}
        >
          <Nav
            isCollapsed={false}
            links={[
              {
                title: "Requests",
                icon: Inbox,
                variant: "ghost",
                onClick: () => setActiveComponent('Requests')
              },
              {
                title: "Submissions",
                icon: FileUp,
                variant: "ghost",
                onClick: () => setActiveComponent('Requests')
              },
              {
                title: "My Videos",
                icon: Youtube,
                variant: "ghost",
                onClick: () => setActiveComponent('Requests')
              },
              {
                title: "Chat",
                icon: MessageCircle,
                variant: "ghost",
                onClick: () => setActiveComponent('Requests')
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={10} minSize={5}>
          {/* Render the active component */}
          <ActiveComponent requests={requests} />
        </ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={10} minSize={5}>
          {/* Render the active component */}
          <ActiveComponent requests={requests} />
        </ResizablePanel>
        
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
