"use server";
// IMPORTS
import { Api } from "sst/node/api";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { getSubmissions } from "../functions/getSubmissions";
import { getRequests } from "../functions/getRequests";
import SubmitDisplay from "../Submit/components/submit-display";
import Wrapper from "../wrapper";
import SubmitList from "../Submit/components/submit-list";
import { getRoomsViaEmail } from "../functions/getRoomsViaEmail";

// CONSTRUCTS
const userEmail = "imightbejan@gmail.com";

// FUNCTIONS
async function Chat() {
  // Getting room and message data
  const roomMessageData = await getRoomsViaEmail(userEmail);
  // console.log(roomMessageData);

  // Saving layout from cookies
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={""}
      secondPanel={""}
    />
  );
}

// EXPORT
export default Chat;
