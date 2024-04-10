"use server";
import { cookies } from "next/headers";
import {
  Users,
  Requests,
  Submissions,
} from "@obscurus/database/src/sql.generated";
import { getUserViaEmail } from "../functions/getUserViaEmail";
import RequestWrapper from "./components/request-wrapper";
import { getRequestsViaEmail } from "../functions/getRequestsViaEmail";
import trashRequest from "../functions/trashRequest";
import unarchiveRequest from "../functions/unarchiveRequest";
import archiveRequest from "../functions/archiveRequest";
import createRequest from "./components/create/function/createRequest";
import { redirect } from "next/navigation";
import getProfileImgPresignedUrl from "../functions/getProfileImgPresignedUrl";
import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import getEnrichedRequestsByEmail from "../functions/getEnrichedRequestsByEmail";
import { getCurrentUser } from "aws-amplify/auth/server";
import updateRequest from "../functions/updateRequest";
import getDownloadPresignedUrl from "../functions/getDownloadPresignedUrl";

async function Request() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
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
    <RequestWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData.user}
      archiveRequest={archiveRequest}
      unarchiveRequest={unarchiveRequest}
      trashRequest={trashRequest}
      createRequest={createRequest}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
      getEnrichedRequestsByEmail={getEnrichedRequestsByEmail}
      updateRequest={updateRequest}
      getDownloadPresignedUrl={getDownloadPresignedUrl}
    />
  );
}

export default Request;
