"use server";
import { cookies } from "next/headers";
import { getEmail } from "../functions/authenticationMethods";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { getRoomsViaEmail } from "../functions/getRoomsViaEmail";
import { getUserNames } from "../functions/getUserNames";
import { getMessages } from "../functions/getMessages";
import ChatWrapper from "./components/chat-wrapper";
import createMessage from "../functions/createMessage";
import createMessageNotification from "../functions/createMessageNotification";

type UserNames = {
  email: string;
  fullName: string;
};

async function Chat() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  const userEmail = await getEmail();
  const rooms: Rooms[] = await getRoomsViaEmail(userEmail);
  const userNames: UserNames[] = await getUserNames();
  console.log(userNames);
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
    <ChatWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userEmail={userEmail}
      websocketApiEndpoint={process.env.NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT as string}
      rooms={rooms}
      userNames={userNames}
      messages={messages}
      createMessage={createMessage}
      createMessageNotification={createMessageNotification}
    />
  );
}

export default Chat;
