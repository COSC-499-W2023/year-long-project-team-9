"use server";
// IMPORTS
import { Api } from "sst/node/api";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import { getSubmissions } from "../functions/getSubmissions";
import { getRequests } from "../functions/getRequests";
import SubmitDisplay from "../Submit/components/submit-display";
import Wrapper from "../wrapper";
import ChatList from "../Chat/components/chat-list";
import { getRoomsViaEmail } from "../functions/getRoomsViaEmail";
import { getMessages } from "../functions/getMessages";

// CONSTRUCTS
const userEmail = "imightbejan@gmail.com";

// FUNCTIONS
async function Chat() {
  // Saving layout from cookies
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  // console.log("Layout", layout);
  // console.log("Collapsed", collapsed?.value);
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  // Getting room and message data
  const rooms: Rooms[] = await getRoomsViaEmail(userEmail);
  const messages: Messages[] = await getMessages();

  // Return function
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<ChatList rooms={rooms} messages={messages} />}
      secondPanel={""}
    />
  );
}

// EXPORT
export default Chat;
