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
import { SubmissionsForRequest } from "./types/types-for-request";
import getPresignedUrl from "../functions/getPresignedUrl";

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
  const userEmail = await getEmail();
  const userData: Users = await getUserViaEmail(userEmail);
  const requestPageData: { request: Requests[]; submissions: Submissions[] } =
    await getRequestsViaEmail(userEmail);
  const request: Requests[] = requestPageData.request;
  const submissionsForRequestPageData: Submissions[] =
    requestPageData.submissions;

  const submissions: SubmissionsForRequest[] = [];
  for (let i = 0; i < submissionsForRequestPageData.length; i++) {
    const url = await getPresignedUrl(
      submissionsForRequestPageData[i].submissionId
    );
    if (!url) {
      submissions.push({
        submissionId: submissionsForRequestPageData[i].submissionId,
        requesteeEmail: submissionsForRequestPageData[i].requesteeEmail,
        status: submissionsForRequestPageData[i].status,
        title: submissionsForRequestPageData[i].title,
        grouping: submissionsForRequestPageData[i].grouping,
        isRead: submissionsForRequestPageData[i].isRead,
        submittedDate: submissionsForRequestPageData[i].submittedDate,
        requestId: submissionsForRequestPageData[i].requestId,
        url: null,
      });
    } else {
      submissions.push({
        submissionId: submissionsForRequestPageData[i].submissionId,
        requesteeEmail: submissionsForRequestPageData[i].requesteeEmail,
        status: submissionsForRequestPageData[i].status,
        title: submissionsForRequestPageData[i].title,
        grouping: submissionsForRequestPageData[i].grouping,
        isRead: submissionsForRequestPageData[i].isRead,
        submittedDate: submissionsForRequestPageData[i].submittedDate,
        requestId: submissionsForRequestPageData[i].requestId,
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
    />
  );
}

export default Request;
