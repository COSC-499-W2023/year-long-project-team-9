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
import { Requests, Submissions, Users } from "stacks/core/src/sql.generated";

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
    } finally {
    }
  };

  const requests: Requests[] = await fetchData("/getRequests");
  const submissions: Submissions[] = await fetchData("/getSubmissions")
  const users: Users[] = await fetchData("/getUsers")
  return {
    props: { requests, submissions, users }, // pass the data as a prop
  };
}

const IndexPage = ({ requests, submissions, users }: { requests: Requests[], submissions: Submissions[], users: Users[] }) => {
  const r: Requests[] = requests;
  const u: Users[] = users;
  const s: Submissions[] = submissions;
  return (
    <Layout>
      {" "}
      { r? ( <><div className="grid justify-center items-center pt-10 pb-5">
        <h1 className="text-3xl font-extrabold">Requests</h1>
      </div><div className="grid grid-cols-3 gap-3 px-2">
          {r.map((i: Requests)  => (
            <Card
            key={i.request_id}
              id="collapsed"
              className="overflow-auto justify-self-start drop-shadow-md border-2 hover:bg-accent bg-card"
            >
              <CardHeader>
                <div className="space-x-2 flex items-center">
                  <CardTitle className="text-xl">
                    {i.request_title}
                  </CardTitle>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <Label>ID: {i.request_id}</Label>
                  <Label>Created on: {i.creation_date.toString()}</Label>
            {/* <Label>Language: {user.language}</Label>
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
