"use server";
import { cookies } from "next/headers";
import { getEmail } from "../../functions/authenticationMethods";
import CreaterWeapper from "./components/create-weapper";

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
    <CreaterWeapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      email={email}
    />
  );
}

export default Create;
