"use server";
import { cookies } from "next/headers";
import getPresignedUrl from "../functions/getPresignedUrl";
import { sendToService } from "../functions/sendToService";
import updateStatus from "../functions/updateStatus";
import getDownloadPresignedUrl from "../functions/getDownloadPresignedUrl";
import getStatus from "../functions/getStatus";
import { SubmitWrapper } from "./components/submit-wrapper";
import getRequestsAndSubmissionsByEmail from "../functions/getRequestsAndSubmissionsByEmail";
import { getUserViaEmail } from "../functions/getUserData";
import setSubmittedDate from "../functions/setSubmittedDate";
import { isSignedIn } from "../functions/authenticationMethods";
import { redirect } from "next/navigation";

async function Submit() {
  const signedIn = await isSignedIn();
  if (!signedIn) {
    redirect("/");
  }

  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  console.log("updateStatus", updateStatus);
  console.log("getStatus", getStatus);
  console.log("getPresignedUrl", getPresignedUrl);
  console.log("getDownloadPresignedUrl", getDownloadPresignedUrl);

  const wsApi = process.env.NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT;

  console.log("wsApi", wsApi);

  return (
    <SubmitWrapper
      getPresignedUrl={getPresignedUrl}
      getDownloadPresignedUrl={getDownloadPresignedUrl}
      sendToService={sendToService}
      updateStatus={updateStatus}
      getStatus={getStatus}
      getRequestsAndSubmissionsByEmail={getRequestsAndSubmissionsByEmail}
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      getUserViaEmail={getUserViaEmail}
      setSubmittedDate={setSubmittedDate}
    />
  );
}

export default Submit;
