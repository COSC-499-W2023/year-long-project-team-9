"use server";
import { cookies } from "next/headers";
import { getEmail } from "../functions/authenticationMethods";
import {
  Users,
  Requests,
  Submissions,
} from "@obscurus/database/src/sql.generated";
import { getUserViaEmail } from "../functions/getUserData";
import RequestWrapper from "./components/request-wrapper";
import { getRequestsViaEmail } from "../functions/getRequestsViaEmail";
import trashRequest from "../functions/trashRequest";
import unarchiveRequest from "../functions/unarchiveRequest";
import archiveRequest from "../functions/archiveRequest";
import createRequest from "./components/create/function/createRequest";
import { SubmissionsForRequest } from "./types/types-for-request";
import getPresignedUrl from "../functions/getPresignedUrl";
import { redirect } from "next/navigation";
import getProfileImgPresignedUrl from "../functions/getProfileImgPresignedUrl";

async function Request() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  console.log("Layout", layout);
  console.log("Collapsed", collapsed?.value);
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;
  const userEmail = "imightbejan@gmail.com"
  const userData: Users = await getUserViaEmail(userEmail);
  const requestPageData: { request: Requests[]; submissions: Submissions[] } =
    await getRequestsViaEmail(userEmail);
  const request: Requests[] = requestPageData.request;
  const submissionsDataRequest: Submissions[] = requestPageData.submissions;
  const submissions: SubmissionsForRequest[] = [];
  for (let i = 0; i < submissionsDataRequest.length; i++) {
    const url = await getPresignedUrl(submissionsDataRequest[i].submissionId);
    if (!url) {
      submissions.push({
        submissionId: submissionsDataRequest[i].submissionId,
        requesteeEmail: submissionsDataRequest[i].requesteeEmail,
        status: submissionsDataRequest[i].status,
        title: submissionsDataRequest[i].title,
        grouping: submissionsDataRequest[i].grouping,
        isRead: submissionsDataRequest[i].isRead,
        submittedDate: submissionsDataRequest[i].submittedDate,
        requestId: submissionsDataRequest[i].requestId,
        url: null,
      });
    } else {
      submissions.push({
        submissionId: submissionsDataRequest[i].submissionId,
        requesteeEmail: submissionsDataRequest[i].requesteeEmail,
        status: submissionsDataRequest[i].status,
        title: submissionsDataRequest[i].title,
        grouping: submissionsDataRequest[i].grouping,
        isRead: submissionsDataRequest[i].isRead,
        submittedDate: submissionsDataRequest[i].submittedDate,
        requestId: submissionsDataRequest[i].requestId,
        url: url,
      });
    }
  }

  return (
    <RequestWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      request={request}
      submissions={submissions}
      userData={userData}
      archiveRequest={archiveRequest}
      unarchiveRequest={unarchiveRequest}
      trashRequest={trashRequest}
      createRequest={createRequest}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
    />
  );
}

export default Request;
