"use server";
import { cookies } from "next/headers";
import getPresignedUrl from "@/app/functions/getPresignedUrl";
import { triggerJob } from "@/app/functions/triggerJob";
import updateStatus from "@/app/functions/updateStatus";
import getDownloadPresignedUrl from "@/app/functions/getDownloadPresignedUrl";
import getUserDataByEmail from "@/app/functions/getUserDataByEmail";
import getStatus from "@/app/functions/getStatus";
import { SubmitWrapper } from "@/app/submit/components/submit-wrapper";

async function Submit({ params }: { params: { requestId: string } }) {
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
      requestId={params.requestId}
    />
  );
}

export default Submit;
