"use server";
import { cookies } from "next/headers";
import {
  Users,
  Requests,
  Submissions,
} from "@obscurus/database/src/sql.generated";
import { getRequestsViaEmail } from "../functions/getRequestsViaEmail";
import ProfileWrapper from "./components/profile-wrapper";
import getPresignedUrl from "../functions/getPresignedUrl";
import getProfileImgPresignedUrl from "../functions/getProfileImgPresignedUrl";
import updateUser from "../functions/updateUser";
import { redirect } from "next/navigation";
import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import { getCurrentUser } from "aws-amplify/auth/server";
import { getUserViaEmail } from "../functions/getUserViaEmail";
import { getSubmissions } from "../functions/getSubmissions";

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

  const requestPageData: { request: Requests[]; submissions: Submissions[] } =
    await getRequestsViaEmail(email);
  const requests: Requests[] = requestPageData.request;
  const submissions: Submissions[] = await getSubmissions();
  const requestNum = requests.length;
  console.log("requests", requestNum);

  const filteredSubmissions: Submissions[] = submissions.filter(submission => {
    return (
      submission.requesteeEmail === email &&
      submission.status === "COMPLETED"
    );
  });
  const completedVideos = filteredSubmissions.length;
  console.log("submitssions", completedVideos);

  return (
    <ProfileWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData.user}
      getPresignedUrl={getPresignedUrl}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
      updateUser={updateUser}
      requestNum={requestNum}
      completedVideos={completedVideos}
    />
  );
}

export default Account;
