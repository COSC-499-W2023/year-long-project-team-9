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
import getProfileImgPresignedUrl from "../functions/getProfileImgPresignedUrl";

async function Submit() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

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
      setSubmittedDate={setSubmittedDate}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
    />
  );
}

export default Submit;
