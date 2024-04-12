"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/app/functions/utils";
import {
  Inbox,
  FileUp,
  Youtube,
  MessageCircle,
  User,
  LogOut,
  Send,
  Search,
  UploadCloudIcon,
} from "lucide-react";
import Nav from "@/components/nav";
import { Children, ReactNode, Suspense, useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { usePathname } from "next/navigation";
import { useQueryState } from "nuqs";

export function Wrapper({
  defaultLayout,
  defaultCollapsed,
  navCollapsedSize,
  firstPanel,
  secondPanel,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  navCollapsedSize: number;
  firstPanel: ReactNode;
  secondPanel: ReactNode;
}) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const pathname = usePathname();

  const routeToLinkVariant: any = {
    "/": "Submit",
    "/request": "Request",
    "/submit": "Submit",
    "/chat": "Chat",
    "/request/create": "Request",
    "/profile": "Profile",
  };

  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const getLinkVariant = (title: string) => {
    const currentRoute = pathname;
    return routeToLinkVariant[currentRoute] === title ? "default" : "ghost";
  };
  return (

      <ResizablePanelGroup
        direction={isMobile ? "vertical" : "horizontal"}
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full  items-stretch "
      >
        <ResizablePanel
          defaultSize={(defaultLayout && defaultLayout[0]) || 20}
          collapsedSize={navCollapsedSize}
          collapsible={isMobile ? false : true}
          minSize={10}
          maxSize={20}
          onCollapse={(collapsed) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed
            )}`;
          }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Request",
                icon: Inbox,
                variant: getLinkVariant("Request"),
                href: "/request",
              },
              {
                title: "Submit",
                icon: UploadCloudIcon,
                variant: getLinkVariant("Submit"),
                href: "/submit",
              },
              {
                title: "Chat",
                icon: MessageCircle,
                variant: getLinkVariant("Chat"),
                href: "/chat",
              },
            ]}
          />
          <Separator className="container mx-auto" />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Profile",
                icon: User,
                variant: getLinkVariant("Profile"),
                href: "/profile",
              },
            ]}
          />
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={(defaultLayout && defaultLayout[1]) || 40}
          minSize={35}
        >
          <div className="h-full flex-1 flex-col  md:flex">
            {firstPanel}
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={(defaultLayout && defaultLayout[2]) || 50}
          minSize={25}
        >
          {secondPanel}
        </ResizablePanel>
      </ResizablePanelGroup>

  );
}

export default Wrapper;
