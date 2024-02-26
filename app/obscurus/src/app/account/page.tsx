"use server";
import { cookies } from "next/headers";
import Wrapper from "@/app/wrapper";
import { getEmail } from "../functions/authenticationMethods";
import AccountForm from "./components/account-from";

async function Account() {
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
  // You will need to do a database call and get the info of the user
  // TODO
  // Will be used for current password
  const password = "Password1@";

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <AccountForm userEmail={email} userPassword={password}></AccountForm>
      }
      secondPanel={<>{email}</>}
    />
  );
}

export default Account;
