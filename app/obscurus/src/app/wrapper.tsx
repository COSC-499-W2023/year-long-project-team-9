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
} from "lucide-react";
import Nav from "@/components/nav";
import { ListRequests } from "@/components/ListRequests";
import { Children, ReactNode, Suspense, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { useMail } from "../components/ui/mail/use-mail";
import { useRouter } from "next/navigation";

const componentMappings = {
  ListRequests: ListRequests,
};

export function Wrapper({
  // defaultLayout = [265, 440, 655],
  // defaultCollapsed = false,
  // navCollapsedSize,
  children,
}: {
  // defaultLayout: number[];
  // defaultCollapsed: boolean;
  // navCollapsedSize: number;
  children: ReactNode | ReactNode[];
}) {
  // const s: Submissions[] = submissions;

  const [activeComponent, setActiveComponent] = useState("mainContent");

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mail] = useMail();
  const router = useRouter();

  console.log(children);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        onLayout={(sizes) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className="h-full  items-stretch"
      >
        <ResizablePanel
          defaultSize={1}
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
                variant: "default",
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
            isCollapsed={false}
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

        
        {children}
      </ResizablePanelGroup>
      
    </TooltipProvider>
  );
}

export default Wrapper;
