"use server";
import { cookies } from "next/headers";
import Wrapper from "@/app/wrapper";
import { getEmail } from "../functions/authenticationMethods";
import AccountForm from "./components/profile-from";
import ProfileForm from "./components/profile-from";
import { Users } from "@obscurus/database/src/sql.generated";
import { getUserViaEmail } from "../functions/getUserData";

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
  const userEmail = await getEmail();
  const userData: Users[] = await getUserViaEmail(userEmail);
  // You will need to do a database call and get the info of the user
  // TODO
  // Will be used for current password
  const password = "Password1@";

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<ProfileForm userData={userData}></ProfileForm>}
      secondPanel={<>{userData[0].email}</>}
    />
  );
}

export default Account;
