"use server";
import { cookies } from "next/headers";
import { getEmail } from "../../functions/authenticationMethods";
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
  const email = await getEmail();

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<CreateForm></CreateForm>}
      secondPanel={<>{email}</>}
    />
  );
}

export default Create;
