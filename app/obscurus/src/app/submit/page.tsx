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

async function Submit() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  console.log("sendToService", sendToService);
  console.log("updateStatus", updateStatus);
  console.log("getStatus", getStatus);
  console.log("getPresignedUrl", getPresignedUrl);
  console.log("getDownloadPresignedUrl", getDownloadPresignedUrl);
  console.log("getRequestsAndSubmissions", getRequestsAndSubmissionsByEmail);
  console.log("getUserViaEmail", getUserViaEmail);

  const wsApi = process.env.NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT;
  const serviceUrl = process.env.NEXT_PUBLIC_SERVICE_URL;

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
      websocketApiEndpoint={wsApi as string}
      getUserViaEmail={getUserViaEmail}

    />
  );
}

export default Submit;
