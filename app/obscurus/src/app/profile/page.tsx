"use server";
import { cookies } from "next/headers";
import { getEmail } from "../functions/authenticationMethods";
import { Users } from "@obscurus/database/src/sql.generated";
import { getUserViaEmail } from "../functions/getUserData";
import ProfileWrapper from "./components/profile-wapper";

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
  const getUserInformation: Users[] = await getUserViaEmail(userEmail);
  const userData: Users = getUserInformation[0];

  return (
    <ProfileWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData}
    />
  );
}

export default Account;
