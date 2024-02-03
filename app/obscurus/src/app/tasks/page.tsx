"use client"

import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inbox, FileUp, Youtube, MessageCircle } from "lucide-react";
import  Nav  from "@/components/nav";




export default function Wrapper() {



    // const u: Users[] = users;
  // const s: Submissions[] = submissions;
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  return (
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          className="h-full max-h-[800px] items-stretch"
        >
          <ResizablePanel
            defaultSize={10}
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
          <ResizablePanel className="" defaultSize={15}>
            {/* {requests ? <ListRequests requests={requests} /> : <div>h</div>} */}
          </ResizablePanel>

          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20}>
            {/* {requests ? (
              requests.map((request) => <RequestDisplay request={request} key={request.request_id} />)
            ) : (
              <div>h</div>
            {/* <CreateRequest /> */}

            
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
  );
}