"use server";
import { cookies } from "next/headers";
import Wrapper from "../wrapper";
import { Suspense } from "react";
import hello from "../functions/hello";
import { getEmail } from "../functions/authenticationMethods";
import RequestList from "./components/request-list";

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
  const email = await getEmail();

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<RequestList email={email}></RequestList>}
      secondPanel={<>{email}</>}
    />
  );
}

export default Request;
