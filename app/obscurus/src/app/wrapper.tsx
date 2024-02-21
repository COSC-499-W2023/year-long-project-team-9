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

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [submissionId] = useSubmission();
  const router = useRouter();
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
        defaultSize={10}
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
      {children}
    </ResizablePanelGroup>
  );
}

export default Wrapper;
