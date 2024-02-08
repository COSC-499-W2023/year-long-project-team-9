"use server";
import { Api } from "sst/node/api";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import Dashboard from "./dashboard/page";
import { Wrapper } from "./wrapper";
import Home from "./Home/page";
import { ListRequests } from "@/components/ListRequests";
import RequestDisplay from "@/components/request-display";
import RequestList from "@/components/request-list";
import { cookies } from "next/headers";
import { MainContent } from "./main-content";

// when you want data from a particular user, set email to their email in the users table
const email = "";

async function getSubmissions() {
  const res = await fetch(Api.Api.url + "/getSubmissions");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getRequests() {
  const res = await fetch(Api.Api.url + "/getRequests");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function getUsers() {
  const res = await fetch(Api.Api.url + "/getusers");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getRequestsViaEmail(email: string, grouping: string) {
  const res = await fetch(Api.Api.url + "/getRequestsViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
      grouping: grouping,
    }),
  });
  console.log(res.json());
}

export default async function Page() {
  const submissions: Submissions[] = await getSubmissions();
  const requests: Requests[] = await getRequests();
  const getRequestsForAUserTest = await getRequestsViaEmail(
    "bakar.a.muhammad@gmail.com",
    "NULL",
  );
  console.log(requests);
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;
  return (
    <Wrapper
      mainContent={
        <MainContent defaultLayout={defaultLayout} requests={requests} />
      }
      defaultLayout={defaultLayout}
      navCollapsedSize={defaultCollapsed}
    />
  );
}
