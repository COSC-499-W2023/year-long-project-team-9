"use server";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { cookies } from "next/headers";
import Wrapper from "../wrapper";
import { Suspense } from "react";
import SignInForm from "./components/sign-in-form";

async function Auth() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  console.log("Layout", layout);
  console.log("Collapsed", collapsed?.value);
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<SignInForm />}
      secondPanel={<p>Hello world</p>}
    />
  );
}

export default Auth;
