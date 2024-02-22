"use server";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Wrapper from "@/app/wrapper";
import CreateForm from "./components/create-form";

async function Create() {
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
      firstPanel={<CreateForm />}
      secondPanel={<p>Hello world</p>}
    />
  );
}

export default Create;
