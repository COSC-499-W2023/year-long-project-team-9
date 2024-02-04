import { ReactNode, useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import { ThemeProvider } from "../components/ui/theme-provider";
import {
  FileUp,
  Inbox,
  MessageCircle,
  Search,
  Send,
  Youtube,
} from "lucide-react";
import Nav from "../components/nav";
import { useMail } from "../components/hooks/use-mail";
import { useRouter } from "next/router";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import MailDisplay from "../components/mail-display";
import MailList from "../components/mail-list";
import { Input } from "../components/ui/input";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "../components/ui/resizable";
import { Mail, requests } from "../data/data";
import MyVideos from "@/components/MyVideos";
import { useTheme } from "next-themes";
import Home from "@/components/Home";
import { ListRequests } from "../components/ListRequests";

type LayoutProps = {
  children: ReactNode;
  panels : {
    left: React.ReactNode;
    center: React.ReactNode;
    right: React.ReactNode;
  }
};

export default function Layout({ left, center, right }: {left: React.ReactNode; center: React.ReactNode; right: React.ReactNode;}) {
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [mail] = useMail();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [signedIn, isSignedIn] = useState(true);

  // const [firstTab, setFirstTab] = useState<TabType>("Requests");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col h-screen  w-full">
        <NavBar />
        {signedIn ? (
          <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
              direction="horizontal"
              className="h-full max-h-[800px] items-stretch border-y-2"
            >
              <ResizablePanel
                defaultSize={defaultLayout[1]}
                collapsedSize={1}
                collapsible={false}
                minSize={10}
                maxSize={15}
                className={cn(
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
                      href: "/CreateRequest",
                    },
                    {
                      title: "Submissions",
                      icon: FileUp,
                      variant: "ghost",
                      href: "MySubmissions",
                    },
                    {
                      title: "My Videos",
                      icon: Youtube,
                      variant: "ghost",
                      href: "/VideoPlayer",
                    },
                    {
                      title: "Chat",
                      icon: MessageCircle,
                      variant: "ghost",
                      href: "/Message",
                    },
                  ]}
                />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel className="" defaultSize={15} maxSize={50}>
                {center}
              </ResizablePanel>
              {/* <ResizableHandle withHandle /> */}
              {/* <ResizablePanel className="" defaultSize={10}>
                {right}
              </ResizablePanel> */}
            </ResizablePanelGroup>
          </TooltipProvider>
        ) : (
          <Home />
        )}
      </div>
    </ThemeProvider>
  );
}
