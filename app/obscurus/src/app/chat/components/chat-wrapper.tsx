"use client";
import { useState } from "react";
import Wrapper from "../../wrapper";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import ChatList from "./chat-list";
import ChatDisplay from "./chat-display";
import { isReadUpdateType } from "@obscurus/database/src/messages";

const userEmail = "imightbejan@gmail.com";
interface ChatWrapperProps {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  rooms: Rooms[];
  messages: Messages[];
  createMessage: Function;
  updateIsRead: Function;
}

export default function ChatWrapper({
  defaultLayout,
  defaultCollapsed,
  rooms,
  messages,
  createMessage,
  updateIsRead,
}: ChatWrapperProps) {
  const [chatMessages, setChatMessages] = useState<Messages[]>(messages);
  const [chatRooms, setChatRooms] = useState<Rooms[]>(rooms);

  const getOtherParticipantEmail = (item: Rooms | undefined) => {
    if (item === undefined) {
      return "";
    } else if (item.participant1Email === userEmail) {
      return item.participant2Email;
    } else {
      return item.participant1Email;
    }
  };
  const getOtherParticipantName = (item: Rooms | undefined) => {
    if (item === undefined) {
      return "";
    } else if (item.participant1Email === userEmail) {
      return (
        item.participant2RoomGivenName + " " + item.participant2RoomFamilyName
      );
    } else {
      return (
        item.participant1RoomGivenName + " " + item.participant1RoomFamilyName
      );
    }
  };
  const checkUnreadMessages = (item: Rooms) => {
    const roomMessages = chatMessages.filter(
      (message) =>
        message.roomId === item.roomId &&
        !message.isRead &&
        message.senderEmail != userEmail
    );
    return roomMessages.length > 0;
  };
  const getLatestMessage = (item: Rooms): Messages => {
    const currRoomId = item.roomId;
    const roomMessages = chatMessages.filter(
      (messageItem) => messageItem.roomId === currRoomId
    );
    return roomMessages[roomMessages.length - 1];
  };
  const updateChatMessages = (newChatMessages: Messages[]) => {
    setChatMessages(newChatMessages);
  };
  const setMessagesAsRead = (item: Rooms) => {
    chatMessages.forEach((message) => {
      if (message.roomId === item.roomId) {
        if (
          !message.isRead &&
          message.senderEmail === getOtherParticipantEmail(item)
        ) {
          message.isRead = true;
          const isReadUpdate: isReadUpdateType = {
            isRead: true,
            messageId: message.messageId,
          };
          updateIsRead(isReadUpdate);
        }
      }
    });
  };
  const sortRooms = () => {
    if (chatRooms != undefined) {
      setChatRooms(
        chatRooms.sort((a, b) => {
          const dateA = getLatestMessage(a)
            ? new Date(getLatestMessage(a).creationDate)
            : new Date(0);
          const dateB = getLatestMessage(b)
            ? new Date(getLatestMessage(b).creationDate)
            : new Date(0);
          return dateB.getTime() - dateA.getTime();
        })
      );
    }
  };

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <ChatList
          rooms={chatRooms}
          getOtherParticipantName={getOtherParticipantName}
          checkUnreadMessages={checkUnreadMessages}
          getLatestMessage={getLatestMessage}
          setMessagesAsRead={setMessagesAsRead}
          sortRooms={sortRooms}
        />
      }
      secondPanel={
        <ChatDisplay
          rooms={chatRooms}
          messages={chatMessages}
          getOtherParticipantEmail={getOtherParticipantEmail}
          getOtherParticipantName={getOtherParticipantName}
          updateChatMessages={updateChatMessages}
          createMessage={createMessage}
        />
      }
    />
  );
}
