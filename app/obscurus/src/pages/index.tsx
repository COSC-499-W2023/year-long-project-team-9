import Layout from "@/components/layout";
import { Api } from "sst/node/api";
import { Requests, Submissions, Users } from "stacks/core/src/sql.generated";
import { ListRequests } from "@/components/ListRequests";
import { useState } from "react";
import CreateRequest from "@/components/CreateRequest";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Nav from "@/components/nav";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Inbox, FileUp, Youtube, MessageCircle } from "lucide-react";
import Home from "@/components/Home";
import TestDatabase from "@/components/TestDatabase";
import Hero from "@/components/Hero";
import RequestDisplay from "@/components/request-display";

export async function getServerSideProps() {
  const fetchData = async (route: string) => {
    try {
      const apiURL = Api.Api.url;
      const response = await fetch(apiURL + route);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        return response.json();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const requests: Requests[] = await fetchData("/getRequests");
  const submissions: Submissions[] = await fetchData("/getSubmissions");
  const users: Users[] = await fetchData("/getUsers");
  return {
    props: { requests, submissions, users }, // pass the data as a prop
  };
}

const IndexPage = ({
  requests,
  submissions,
  users,
}: {
  requests: Requests[];
  submissions: Submissions[];
  users: Users[];
}) => {
  const u: Users[] = users;
  const s: Submissions[] = submissions;
  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  return (
    <Layout>
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
          <ResizablePanel className="" defaultSize={15}>
            {requests ? <ListRequests requests={requests} /> : <Home />}
          </ResizablePanel>
      

          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={20}>
            {requests ? (
              requests.map((request) => <RequestDisplay request={request} key={request.request_id} />)
            ) : (
              <Home />
            )}
            {/* <CreateRequest /> */}
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </Layout>
  );
};

export default IndexPage;
