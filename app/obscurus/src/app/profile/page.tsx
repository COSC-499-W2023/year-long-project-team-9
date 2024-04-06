"use server";
import { cookies } from "next/headers";
import {
  Users,
  Requests,
  Submissions,
} from "@obscurus/database/src/sql.generated";
import getUserDataByEmail from "../functions/getUserDataByEmail";
import { getRequestsViaEmail } from "../functions/getRequestsViaEmail";
import ProfileWrapper from "./components/profile-wrapper";
import getPresignedUrl from "../functions/getPresignedUrl";
import getProfileImgPresignedUrl from "../functions/getProfileImgPresignedUrl";
import updateUser from "../functions/updateUser";
import { redirect } from "next/navigation";

async function Account() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  console.log("Layout", layout);
  console.log("Collapsed", collapsed?.value);
  console.log("getPresignedUrl", getPresignedUrl);
  console.log("getProfileImgPresignedUrl", getProfileImgPresignedUrl);

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  const userEmail = "imightbejan@gmail.com"
  const userData: Users = await getUserDataByEmail(userEmail);


  return (
    <ProfileWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData}
      getPresignedUrl={getPresignedUrl}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
      updateUser={updateUser}
    />
  );
}

export default Account;
