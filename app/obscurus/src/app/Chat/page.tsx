"use server";
// IMPORTS
import { cookies } from "next/headers";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import Wrapper from "../wrapper";
import ChatList from "./components/chat-list";
import ChatDisplay from "./components/chat-display";
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

  const getLatestMessage = (item: Rooms): Messages => {
    const currRoomId = item.roomId;
    const roomMessages = messages.filter(
      (messageItem) => messageItem.roomId === currRoomId
    );
    return roomMessages[roomMessages.length - 1];
  };

  if (rooms != undefined) {
    rooms.sort((a, b) => {
      const dateA = getLatestMessage(a)
        ? new Date(getLatestMessage(a).creationDate)
        : new Date(0);
      const dateB = getLatestMessage(b)
        ? new Date(getLatestMessage(b).creationDate)
        : new Date(0);
      return dateB.getTime() - dateA.getTime();
    });
  }

  // Return function
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={<ChatList rooms={rooms} messages={messages} />}
      secondPanel={<ChatDisplay rooms={rooms} messages={messages} />}
    />
  );
}

// EXPORT
export default Chat;
