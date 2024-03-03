"use server";
import { cookies } from "next/headers";
import Wrapper from "../wrapper";
import { Suspense } from "react";
import hello from "../functions/hello";
import { getEmail } from "../functions/authenticationMethods";
import RequestList from "./components/request-list";
import {
  Users,
  Requests,
  Submissions,
} from "@obscurus/database/src/sql.generated";
import { getUserViaEmail } from "../functions/getUserData";
import RequestWeapper from "./components/request-wrapper";
import { getRequestsViaEmail } from "../functions/getRequestsViaEmail";

async function Request() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  console.log("Layout", layout);
  console.log("Collapsed", collapsed?.value);
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;
  const userEmail = await getEmail();
  const userData: Users[] = await getUserViaEmail(userEmail);
  const requestPageData: { request: Requests[]; submissions: Submissions[] } =
    await getRequestsViaEmail(userEmail);
  // const requests: Requests[] = requestPageData.request;
  // const submissions: Submissions[] = requestPageData.submissions;
  const requests: Requests[] = requestPageData.request;
  const submissions: Submissions[] = requestPageData.submissions;
  console.log(requests);
  console.log(submissions);

  return (
    <RequestWeapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      requests={requests}
      submissions={submissions}
      userData={userData}
    />
  );
}

export default Request;
