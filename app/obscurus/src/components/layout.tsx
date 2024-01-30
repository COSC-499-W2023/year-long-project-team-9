import { ReactNode, useEffect, useState } from "react";

import NavBar from "./NavBar";
import { ThemeProvider } from "./ui/theme-provider";
import {
  FileUp,
  Inbox,
  MessageCircle,
  Search,
  Send,
  Youtube,
} from "lucide-react";
import Nav from "./nav";
import { useMail } from "./hooks/use-mail";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import MailDisplay from "./mail-display";
import MailList from "./mail-list";
import { Input } from "./ui/input";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "./ui/resizable";
import { Mail, mails } from "../data/data";
import Messages from "@/pages/messages";
import MyVideos from "@/pages/MyVideos";
import { useTheme } from "next-themes";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [mail] = useMail();
  const router = useRouter();
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <div className="flex flex-col h-full fixed">
    <NavBar />
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
          {/* <div className=" flex-col flex">
            <Mail
              accounts={accounts}
              mails={mails}
              defaultLayout={[1, 2, 3]}
              defaultCollapsed={false}
              navCollapsedSize={4}
            />
          </div> */}

          <ResizablePanel
            defaultSize={defaultLayout[0]}
            collapsedSize={1}
            collapsible={false}
            minSize={15}
            maxSize={20}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
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
          <ResizablePanel defaultSize={1} minSize={30}>
            <Tabs defaultValue="all">
              <div className="flex items-center px-4">
                <h1 className="text-xl font-bold">Requests</h1>
                <div
                  className="ml-auto"
                  onClick={() => router.push("/CreateRequest")}
                >
                  {/* <Nav
                    isCollapsed={false}
                    links={[
                      {
                        title: "Create Request",
                        icon: Send,
                        variant: "ghost",
                        href: "/CreateRequest",
                      },
                    ]}
                  /> */}
                </div>
              </div>
              <Separator className="primary" />
              <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <TabsContent value="all" className="m-0">
                <MailList items={mails} />
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <MailList items={mails.filter((item) => !item.read)} />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={1} minSize={50}>
          {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
    </ThemeProvider>

  );
}
