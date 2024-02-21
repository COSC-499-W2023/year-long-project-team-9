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
import SubmissionsList from "@/app/Submit/components/submissions-list";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";
import { useSubmission } from "@/components/hooks/use-submission";
import RequestsList from "./Submit/components/request-list";
import RequestDisplay from "./Submit/components/request-display";

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
    "/CreateRequest": "Request",
    "/Submit": "Submit",
    "/Home": "Chat",
  };

  const getLinkVariant = (title: string) => {
    const currentRoute = pathname;
    return routeToLinkVariant[currentRoute] === title ? "default" : "ghost";
  };
  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full  items-stretch "
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
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
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Request",
                icon: Inbox,
                variant: getLinkVariant("Request"),
                href: "/CreateRequest",
              },
              {
                title: "Submit",
                icon: FileUp,
                variant: getLinkVariant("Submit"),
                href: "/Submit",
              },
              {
                title: "Chat",
                icon: MessageCircle,
                variant: getLinkVariant("Chat"),
                href: "/Home",
              },
            ]}
          />
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <div className="max-h-[800px] h-full flex-1 flex-col p-6  md:flex overflow-y-scroll">
            <Suspense fallback={<div>Loading...</div>}>{firstPanel}</Suspense>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[2]}>
          {secondPanel}
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}

export default Wrapper;
