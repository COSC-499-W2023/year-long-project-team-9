"use server";
import { cookies } from "next/headers";
import getPresignedUrl from "../functions/getPresignedUrl";
import { triggerJob } from "../functions/triggerJob";
import updateStatus from "../functions/updateStatus";
import getDownloadPresignedUrl from "../functions/getDownloadPresignedUrl";
import getUserDataByEmail from "../functions/getUserDataByEmail";
import getStatus from "../functions/getStatus";
import { SubmitWrapper } from "./components/submit-wrapper";
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

  console.log("triggerJob", triggerJob);
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
      triggerJob={triggerJob}
      updateStatus={updateStatus}
      getStatus={getStatus}
      getUserDataByEmail={getUserDataByEmail}
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      websocketApiEndpoint={wsApi as string}
    />
  );
}

export default Submit;
