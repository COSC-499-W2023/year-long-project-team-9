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
import MailList from "../components/request-list";
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
  panels: {
    left: React.ReactNode;
    center: React.ReactNode;
    right: React.ReactNode;
  };
};

export default function Layout({
  children
}: {
  children?: React.ReactNode;
}) {
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [mail] = useMail();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [signedIn, isSignedIn] = useState(true);


  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex flex-col h-screen  w-full">
        <NavBar />
      {children}
      </div>
    </ThemeProvider>
  );
}
