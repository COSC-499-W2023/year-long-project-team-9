"use server";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { getSubmissions } from "../functions/getSubmissions";
import { getRequests } from "../functions/getRequests";
import SubmitDisplay from "./components/submit-display";
import { cookies } from "next/headers";
import Wrapper from "@/app/wrapper";
import SubmitList from "./components/submit-list";
import { Suspense } from "react";
import hello from "../functions/hello";
import getPresignedUrl from "../functions/getPresignedUrl";
import { triggerJob } from "../functions/triggerJob";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import updateStatus from "../functions/updateStatus";
import getDownloadPresignedUrl from "../functions/getDownloadPresignedUrl";
import getUserDataByEmail from "../functions/getUserDataByEmail";
import getStatus from "../functions/getStatus";
import { SubmitWrapper } from "./components/submit-wrapper";
import { WebSocketApi } from "sst/node/websocket-api";

async function Submit() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  // console.log("Layout", layout);
  // console.log("Collapsed", collapsed?.value);
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
  // console.log("service url", process.env.NEXT_PUBLIC_SERVICE_URL);

  const wsApi = process.env.NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT;

  console.log("wsApi", wsApi);


  return (
    <Suspense fallback={<div>loading...</div>}>
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
    </Suspense>
  );
}

export default Submit;
