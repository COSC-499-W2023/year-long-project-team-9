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
import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import { getCurrentUser } from "aws-amplify/auth/server";
import { getUserViaEmail } from "../functions/getUserViaEmail";

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



  async function getCurrentUserServer() {
    try {
      const currentUser = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec) => getCurrentUser(contextSpec),
      });
      return {
        signedIn: true,
        email: currentUser.signInDetails?.loginId ?? "",
      };
    } catch (error) {
      console.log(error);
      return { signedIn: false, email: "" };
    }
  }
  const { signedIn, email } = await getCurrentUserServer();



  const userData = await getUserViaEmail(email);


  if (!userData) {
    redirect("/");
  }

  return (
    <ProfileWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData.user}
      getPresignedUrl={getPresignedUrl}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
      updateUser={updateUser}
    />
  );
}

export default Account;
