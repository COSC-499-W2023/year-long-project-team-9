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
import Nav from "@/app/nav";
import NavBar from "@/components/NavBar";
import { ListRequests } from "@/components/ListRequests";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import Image from "next/image";
import Home from "./Home/page";
import { ReactNode, useState } from "react";
import { Separator } from "@/components/ui/separator";
import Dashboard from "./dashboard/page";
import { useMail } from "../components/ui/mail/use-mail";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MailDisplay } from "../components/ui/mail/components/mail-display";
import { MailList } from "../components/ui/mail/components/mail-list";
import { mails } from "../components/ui/mail/data";
import RequestList from "@/app/request-list";
import RequestDisplay from "@/app/request-display";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { AvatarFallback, AvatarImage, Avatar } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

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
  const { theme, setTheme } = useTheme();
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
        className="h-full  items-stretch"
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
            brand={
              <Link href="/" className="">
                <Image
                  className="h-8 w-10 ml-3 min-w-full relative"
                  src="/logo.svg"
                  alt="obscurus"
                  width={50}
                  height={50}
                />
              </Link>
            }
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
          {/* <Switch />
          <div className="grid grid-flow-col justify-around items-center p-4 ">
            <div className="flex justify-end space-x-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="theme-toggle"
                  >
                    <Sun size={25} className="stroke-primary fill-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => setTheme("light")}
                    data-testid="light"
                  >
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTheme("dark")}
                    data-testid="dark"
                  >
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setTheme("system")}
                    data-testid="system"
                  >
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/jansdhillon.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div> */}
        </ResizablePanel>
        <ResizableHandle withHandle />
        {mainContent}
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
