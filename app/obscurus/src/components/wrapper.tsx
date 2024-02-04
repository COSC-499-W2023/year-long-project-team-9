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
import { Submissions } from "stacks/core/src/sql.generated";
import Image from "next/image";
import Home from "./Home/page";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Wrapper({
  mainContent,
  sidebarContent,
}: {
  mainContent: React.ReactNode;
  sidebarContent: React.ReactNode;
}) {
  // const u: Users[] = users;
  // const s: Submissions[] = submissions;
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [activeComponent, setActiveComponent] = useState("mainContent");

  // Define a function to update the active component
  const handleNavClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  // Function to render the currently active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "mainContent":
        return mainContent;
      case "sidebarContent":
        return sidebarContent;
      default:
        return mainContent; // Default to mainContent if no match
    }
  };
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full max-h-[800px] items-stretch border-y-2"
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
                variant: "ghost",
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
        <ResizablePanel className="" defaultSize={2}>
          {mainContent}
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={20}>{sidebarContent}</ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
