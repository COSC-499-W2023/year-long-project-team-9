import type { NextPage } from "next";
import Layout from "@/components/layout";
import { useState } from "react";
import Image from "next/image";

import { accounts, requests } from "../data/data";
import Mail from "@/components/mail";
import Home from "./Home";
import mail from "@/components/mail";
import MailDisplay from "@/components/mail-display";
import MailList from "@/components/mail-list";
import Nav from "@/components/nav";
import { Input } from "@/components/ui/input";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Send, Search } from "lucide-react";
import router, { useRouter } from "next/router";
import { Mail as m } from "../data/data";
import { useMail } from "@/components/hooks/use-mail";
import MyVideos from "./MyVideos";
import { Api } from "sst/node/api";
import useSWR from "swr";
import Hero from "@/components/Hero";
import CreateRequest from "./CreateRequest";


export async function getServerSideProps() {
  const fetchData = async () => {
    try {
      const apiURL = Api.Api.url
      const response = await fetch(apiURL + "/getSubmissions");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json(); // return the data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const submissions = await fetchData(); // get the data
  return {
    props: { submissions }, // pass the data as a prop
  };
};

const fetcher = (url: string, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

export function Index({ submissions }: { submissions: any }) {

  const { data, error } = useSWR("/api/getSubmissions", fetcher);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (!data) {
    return <div>Loading...</div>;
  }
  
  console.log(data)
  // interface MailProps {
  //   accounts: {
  //     label: string;
  //     email: string;
  //     icon: React.ReactNode;
  //   }[];
  //   mails: Mail[];
  //   defaultLayout: number[] | undefined;
  //   defaultCollapsed?: boolean;
  //   navCollapsedSize: number;
  // }

  const defaultLayout = [265, 440, 655];
  const defaultCollapsed = false;
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [mail] = useMail();
  const router = useRouter();

  return (
    <>
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
            defaultSize={defaultLayout[1]}
            collapsedSize={1}
            collapsible={true}
            minSize={15}
            maxSize={20}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          ></ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={1} minSize={30}>
            <Tabs defaultValue="all">
              <div className="flex items-center px-4">
                <h1 className="text-xl font-bold"></h1>
                <div
                  className="ml-auto"
                  onClick={() => router.push("/CreateRequest")}
                >
                  <Nav
                    isCollapsed={false}
                    links={[
                      {
                        title: "Create Request",
                        icon: Send,
                        variant: "ghost",
                        href: "/CreateRequest",
                      },
                    ]}
                  />
                </div>
              </div>
              <Separator />
              <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <TabsContent value="all" className="m-0">
                <MailList items={requests} />
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                <MailList items={requests.filter((item) => !item.read)} />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[2]}>
            <MailDisplay
              mail={requests.find((item) => item.id === mail.selected) || null}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </>
  );
}

const IndexPage: NextPage = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return <Layout><MyVideos videoUrl={"test3.mp4"}/></Layout>
};

export default IndexPage;
