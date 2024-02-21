"use server";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { getSubmissions } from "../functions/getSubmissions";
import { getRequests } from "../functions/getRequests";
import SubmitDisplay from "./components/submit-display";
import { cookies } from "next/headers";
import Wrapper from "../wrapper";
import SubmitList from "./components/submit-list";

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
      firstPanel={<SubmitList requests={requests} submissions={submissions} />}
      secondPanel={<SubmitDisplay requests={requests} submissions={submissions} />}
    />
  );
}

export default Submit;
