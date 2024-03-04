"use server";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { getRoomsViaEmail } from "../functions/getRoomsViaEmail";
import { getMessages } from "../functions/getMessages";
import ChatWrapper from "./components/chat-wrapper";
import createMessage from "../functions/createMessage";

const userEmail = "imightbejan@gmail.com";

async function Chat() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  const rooms: Rooms[] = await getRoomsViaEmail(userEmail);
  const messages: Messages[] = await getMessages();

  const getLatestMessage = (item: Rooms): Messages => {
    const currRoomId = item.roomId;
    const roomMessages = messages.filter(
      (messageItem) => messageItem.roomId === currRoomId
    );
    return roomMessages[roomMessages.length - 1];
  };
  const handleTimezoneOffset = (item: Messages) => {
    const messageDateTime = new Date(item.creationDate).getTime();
    const userTimezoneOffset = -new Date().getTimezoneOffset() * 60 * 1000;
    return new Date(messageDateTime + userTimezoneOffset);
  };

  if (rooms) {
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
  if (messages) {
    messages.forEach((message) => {
      message.creationDate = handleTimezoneOffset(message);
    });
  }

  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <ChatWrapper
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        rooms={rooms}
        messages={messages}
        createMessage={createMessage}
      />
    </Suspense>
  );
}

export default Chat;
