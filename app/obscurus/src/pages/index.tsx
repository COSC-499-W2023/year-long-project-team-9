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
import { Label, Separator } from "@radix-ui/react-dropdown-menu";
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
import { ListRequests } from "./ListRequests";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Submissions } from "stacks/core/src/sql.generated";

export async function getServerSideProps() {
  const fetchData = async () => {
    try {
      const apiURL = Api.Api.url;
      const response = await fetch(apiURL + "/getSubmissions");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      } else {
        return response.json();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
    }
  };

  const submissions: Submissions[] = await fetchData(); // get the data
  return {
    props: { submissions }, // pass the data as a prop
  };
}

// const fetcher = (url: string, init?: RequestInit) =>
//   fetch(url, init).then((res) => res.json());

const IndexPage = ({ submissions }: { submissions: Submissions[] }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const s: Submissions[] = submissions;
  // const { data, error, isLoading } = useSWR("/api/getSubmissions", fetcher);

  // if (error) {
  //   return <div>error</div>
  // }

  // if (!data) {
  //   return <div>"No data."</div>
  // }

  // if (isLoading){
  //   return <div>loading...</div>
  // }

  // if(data){
  //   console.log(JSON.stringify(data))
  //}
  return (
    <Layout>
      {" "}
      { s ? ( <><div className="grid justify-center items-center pt-10 pb-5">
        <h1 className="text-3xl font-extrabold">Submissions</h1>
      </div><div className="grid grid-cols-3 gap-3 px-2">
          {s.map((i: Submissions) => (
            <Card
              id="collapsed"
              className="overflow-auto justify-self-start drop-shadow-md border-2 hover:bg-accent bg-card"
            >
              <CardHeader>
                <div className="space-x-2 flex items-center">
                  <CardTitle className="text-xl">
                    {i.request_id}
                  </CardTitle>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label>Email: {i.requestee_email}</Label>
                  {/* <Label>Timezone: {user.timezone}</Label>
            <Label>Language: {user.language}</Label>
            <Label>
              Social Identity User:{" "}
              {user.is_logged_in_with_social_identity_provider}
            </Label>
            <Label>Admin: {user.is_admin}</Label>
            <Label>Specialised ID: {user.sub}</Label> */}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div></>):(<div>NA</div>)}
     
    </Layout>
  );
};

export default IndexPage;
