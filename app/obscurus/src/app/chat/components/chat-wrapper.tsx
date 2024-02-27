"use client";
import { useState } from "react";
import Wrapper from "../../wrapper";
import hello from "../../functions/hello";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import ChatList from "./chat-list";
import ChatDisplay from "./chat-display";

const userEmail = "imightbejan@gmail.com";
interface ChatWrapperProps {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  rooms: Rooms[];
  messages: Messages[];
}

export default function ChatWrapper({
  defaultLayout,
  defaultCollapsed,
  rooms,
  messages,
}: ChatWrapperProps) {
  const [chatMessages, setChatMessages] = useState<Messages[]>(messages);
  const [chatRooms, setChatRooms] = useState<Rooms[]>(rooms);
  const getLatestMessage = (item: Rooms): Messages => {
    const currRoomId = item.roomId;
    const roomMessages = chatMessages.filter(
      (messageItem) => messageItem.roomId === currRoomId
    );
    return roomMessages[roomMessages.length - 1];
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
  const updateChatMessages = (newChatMessages: Messages[]) => {
    setChatMessages(newChatMessages);
  };

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <ChatList
          rooms={chatRooms}
          messages={chatMessages}
          getLatestMessage={getLatestMessage}
          sortRooms={sortRooms}
        />
      }
      secondPanel={
        <ChatDisplay
          rooms={chatRooms}
          messages={chatMessages}
          updateChatMessages={updateChatMessages}
        />
      }
    />
  );
}
