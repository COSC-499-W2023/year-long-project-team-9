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
import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import { getCurrentUser } from "aws-amplify/auth/server";
import { getUserViaEmail } from "../functions/getUserData";
import { getSubmissions } from "../functions/getSubmissions";

async function Account() {
  async function getCurrentUserServer() {
    try {
      const currentUser = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec) => getCurrentUser(contextSpec),
      });
      console.log(currentUser);
      return {
        signedIn: true,
        email: currentUser.signInDetails?.loginId ?? "",
      };
    } catch (error) {
      console.log(error);
      return { signedIn: false, email: "" };
    }
  }
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  const { signedIn, email } = await getCurrentUserServer();
  const userData: Users = await getUserViaEmail(email);
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
  
  // const completedVideos = await getCompletedVideo(email);


  // console.log("video", completedVideos);
  
  return (
    <ProfileWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData}
      getPresignedUrl={getPresignedUrl}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
      updateUser={updateUser}
      requestNum={requestNum}
      completedVideos={completedVideos}
    />
  );
}

export default Account;
