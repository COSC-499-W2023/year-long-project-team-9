"use server";
import { cookies } from "next/headers";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { getRoomsViaEmail } from "../functions/getRoomsViaEmail";
import { getUserNames } from "../functions/getUserNames";
import { getMessages } from "../functions/getMessages";
import ChatWrapper from "./components/chat-wrapper";
import createMessage from "../functions/createMessage";
import createMessageNotification from "../functions/createMessageNotification";
import setIsReadTrue from "../functions/setIsReadTrue";
import getProfileImgPresignedUrl from "../functions/getProfileImgPresignedUrl";
import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import { getCurrentUser } from "aws-amplify/auth/server";

type UserNames = {
  email: string;
  givenName: string;
  familyName: string;
  profileImage: any;
};

async function Chat() {
  async function getCurrentUserServer() {
    try {
      const currentUser = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec) => getCurrentUser(contextSpec),
      });
      console.log(currentUser);
      return {
        signedIn: true,
        email: currentUser.signInDetails?.loginId ?? "",
      };
    } catch (error) {
      console.log(error);
      return { signedIn: false, email: "" };
    }
  }
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  const { signedIn, email } = await getCurrentUserServer();
  const rooms: Rooms[] = await getRoomsViaEmail(email);
  const userNames: UserNames[] = await getUserNames();
  const messages: Messages[] = await getMessages();

  if (userNames) {
    const getProfileImage = async () => {
      for (const user of userNames) {
        const imgkey = user.profileImage;
        const url = await getProfileImgPresignedUrl(imgkey);
        user.profileImage = url;
      }
    };
    getProfileImage();
  }

  const getLatestMessage = (item: Rooms): Messages => {
    const currRoomId = item.roomId;
    const roomMessages = messages.filter(
      (messageItem) => messageItem.roomId === currRoomId
    );
    return roomMessages[roomMessages.length - 1];
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


  return (
    <ChatWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userEmail={email}
      rooms={rooms}
      userNames={userNames}
      messages={messages}
      createMessage={createMessage}
      createMessageNotification={createMessageNotification}
      setIsReadTrue={setIsReadTrue}
      getProfileImgPresignedUrl={getProfileImgPresignedUrl}
    />
  );
}

export default Chat;
