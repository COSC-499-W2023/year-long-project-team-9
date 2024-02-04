import { ListRequests } from "@/components/ListRequests";
import Layout from "./layout";
import Dashboard from "@/components/dashboard";
import MyVideos from "@/components/MyVideos";
import { Api } from "sst/node/api";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import MyRequests from "@/components/MyRequests";
import RequestDisplay from "@/components/request-display";
import { ListSubmissions } from "@/components/ListSubmissions";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "@/components/nav";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Inbox, FileUp, Youtube, MessageCircle } from "lucide-react";
import { ReactNode, useState } from "react";

export async function getServerSideProps() {
  const fetchData = async (route: string) => {
    try {
      const apiURL = Api.Api.url;
      const response = await fetch(apiURL + route);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let data = await response.json();
      // data = data.map((item: any) => ({
      //   ...item,
      //   is_completed: item.is_completed === 'NULL' ? null : item.is_completed,
      // }));
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const requests = await fetchData("/getRequests");
  const submissions = await fetchData("/getSubmissions");

  return {
    props: { requests, submissions },
  };
}

export default function Wrapper({
  left,
  center,
  right,
}: {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}) {
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  return (
    <Layout>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full max-h-[800px] items-stretch border-y-2"
        >
          <ResizablePanel
            defaultSize={defaultLayout[1]}
            collapsedSize={1}
            collapsible={true}
            minSize={5}
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
          <ResizableHandle withHandle />
          <ResizablePanel className="" defaultSize={15} maxSize={50}>
            {right}
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </Layout>
  );
}
