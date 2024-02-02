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
import { Mail, requests } from "../data/data";
import MyVideos from "@/components/MyVideos";
import { useTheme } from "next-themes"; 
import Home from "@/components/Home";
import { ListRequests } from "./ListRequests";

type LayoutProps = {
  children: ReactNode;
};


export default function Layout({ children }: LayoutProps) {
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
      <div className="flex flex-col h-full fixed w-full">
        <NavBar />
        {signedIn ? (

           <>{children}</>
        ) : (
          <Home />
        )}
      </div>
    </ThemeProvider>
  );
}
