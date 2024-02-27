"use server";
import { cookies } from "next/headers";
import Wrapper from "@/app/wrapper";
import RecoverPassword from "../components/recover";

async function Recover() {
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
      firstPanel={<RecoverPassword></RecoverPassword>}
      secondPanel={<>Hello World</>}
    />
  );
}

export default Recover;
