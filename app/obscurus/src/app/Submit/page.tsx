"use server";
import { Api } from "sst/node/api";
import Image from "next/image";
import { columns } from "./components/columns";
import { UserNav } from "./components/user-nav";
import { DataTable } from "./components/data-table";
import { Video } from "./schema";
import { ReactNode, Suspense } from "react";
import SubmissionsList from "@/app/Submit/components/submissions-list";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { PulseLoader } from "react-spinners";
import SubmissionDisplay from "./components/submission-display";
import Page from "./[requestId]/page";
import { getSubmissions } from "../functions/getSubmissions";
import { getRequests } from "../functions/getRequests";
import RequestDisplay from "./components/request-display";
import RequestsList from "./components/request-list";
import { cookies } from "next/headers";
import Wrapper from "../wrapper";

async function Submit() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  console.log("Layout", layout);
  console.log("Collapsed", collapsed?.value);
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;
  const submissions: Submissions[] = await getSubmissions();
  const requests: Requests[] = await getRequests();

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<RequestsList requests={requests} />}
      secondPanel={<RequestDisplay requests={requests} />}
    />
  );
}

export default Submit;
