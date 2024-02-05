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
  Sun,
  Search,
  Send,
  User,
  LogOut,
} from "lucide-react";
import Nav from "@/components/nav";
import NavBar from "@/components/NavBar";
import { ListRequests } from "@/components/ListRequests";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import Image from "next/image";
import Home from "./Home/page";
import { ReactNode, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Dashboard from "./dashboard/page";
import { useMail } from "./mail/use-mail";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MailDisplay } from "./mail/components/mail-display";
import { MailList } from "./mail/components/mail-list";
import { mails } from "./mail/data";
import RequestList from "@/components/request-list";
import RequestDisplay from "@/components/request-display";

const componentMappings = {
  ListRequests: ListRequests,
};

export function Wrapper({
  defaultLayout = [265, 440, 655],
  defaultCollapsed = false,
  navCollapsedSize,
  mainContent,
}: {
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
  mainContent: ReactNode;
}) {
  // const s: Submissions[] = submissions;

  const [activeComponent, setActiveComponent] = useState("mainContent");

  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [mail] = useMail();
  const router = useRouter();

  return (
    <TooltipProvider delayDuration={0}>
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
          defaultSize={defaultLayout[0]}
          collapsedSize={10}
          collapsible={true}
          minSize={15}
          maxSize={20}
          //   onCollapse={(collapsed: boolean) => {
          //     setIsCollapsed(collapsed)
          //     document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          //       collapsed
          //     )}`
          //   }}
          className={cn(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
        >
          {/* <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]': 'px-2')}>
    <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
  </div>
  <Separator /> */}
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

          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: "Profile",
                label: "",
                icon: User,
                variant: "ghost",
              },
              {
                title: "Sign Out",
                icon: LogOut,
                variant: "ghost",
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
       {mainContent}
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
