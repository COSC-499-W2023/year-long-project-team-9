"use server";
import { Requests, Submissions } from "stack/database/src/sql.generated";
import { getSubmissions } from "../../../functions/getSubmissions";
import { getRequests } from "../../../functions/getRequests";
import SubmitDisplay from "./components/submit-display";
import { cookies } from "next/headers";
import Wrapper from "@/app/wrapper";
import SubmitList from "./components/submit-list";
import { Suspense } from "react";
import hello from "../../../functions/hello";
import getPresignedUrl from "../../../functions/getPresignedUrl";
import { triggerJob } from "../../../functions/triggerJob";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import updateStatus from "../../../functions/updateStatus";
import getDownloadPresignedUrl from "../../../functions/getDownloadPresignedUrl";

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
  const submissions: Submissions[] = await getSubmissions();
  const requests: Requests[] = await getRequests();

  console.log("triggerJob", triggerJob);
  console.log("updateStatus", updateStatus);
  console.log("getPresignedUrl", getPresignedUrl);
  console.log("getDownloadPresignedUrl", getDownloadPresignedUrl);
  // console.log("service url", process.env.NEXT_PUBLIC_SERVICE_URL);

  return (
    <>
      <Wrapper
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
        firstPanel={
          <SubmitList requests={requests} submissions={submissions} />
        }
        secondPanel={
          <SubmitDisplay
            requestId={requests[0].requestId || ""}
            requests={requests}
            submissions={submissions}
            getPresignedUrl={getPresignedUrl}
            getDownloadPresignedUrl={getDownloadPresignedUrl}
            triggerJob={triggerJob}
            updateStatus={updateStatus}
          />
        }
      />
    </>
  );
}

export default Submit;
