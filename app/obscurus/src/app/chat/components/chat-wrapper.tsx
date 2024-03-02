"use client";
import { useState, useEffect } from "react";
import Wrapper from "../../wrapper";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import ChatList from "./chat-list";
import ChatDisplay from "./chat-display";

interface ChatWrapperProps {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userEmail: string;
  rooms: Rooms[];
  messages: Messages[];
  createMessage: Function;
}

export default function ChatWrapper({
  defaultLayout,
  defaultCollapsed,
  userEmail,
  rooms,
  messages,
  createMessage,
}: ChatWrapperProps) {
  const [chatMessages, setChatMessages] = useState<Messages[]>(messages);
  const [chatRooms, setChatRooms] = useState<Rooms[]>(rooms);
  const [socket, setSocket] = useState<WebSocket | null>(null);

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

  useEffect(() => {
    const ws = new WebSocket(
      "wss://o4tgfyn9n6.execute-api.us-west-2.amazonaws.com/Soren"
    );
    const handleBeforeUnload = () => {
      console.log("Page reloading or closing, disconnecting WebSocket");
      ws.close();
    };

    ws.onopen = () => {
      console.log("Connected to WebSocket");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    setSocket(ws);

    ws.onmessage = (event) => {
      console.log("Here");
      const messageData = event.data;
      try {
        const messageJSON: Messages = JSON.parse(messageData);
        if (!checkIfMessageInList(messageJSON)) {
          const newMessages = [...chatMessages, messageJSON];
          updateChatMessages(newMessages);
        }
      } catch {
        console.log("Message data is not valid JSON");
      }
    };

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      console.log("Disconnecting WebSocket");
      ws.close();
    };
  }, []);
  const sendMessage = (messageData: string) => {
    if (socket) {
      socket.send(JSON.stringify({ action: "sendmessage", data: messageData }));
    }
  };
  const checkIfMessageInList = (newMessage: Messages) => {
    const newMessages = chatMessages.filter(
      (message) => message.messageId === newMessage.messageId
    );
    return newMessages.length > 0;
  };

  return (
    <>
      <Wrapper
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
        firstPanel={
          <ChatList
            userEmail={userEmail}
            rooms={chatRooms}
            messages={chatMessages}
            getOtherParticipantEmail={getOtherParticipantEmail}
            getOtherParticipantName={getOtherParticipantName}
            checkUnreadMessages={checkUnreadMessages}
            getLatestMessage={getLatestMessage}
            sortRooms={sortRooms}
          />
        }
        secondPanel={
          <ChatDisplay
            userEmail={userEmail}
            rooms={chatRooms}
            messages={chatMessages}
            getOtherParticipantEmail={getOtherParticipantEmail}
            getOtherParticipantName={getOtherParticipantName}
            updateChatMessages={updateChatMessages}
            createMessage={createMessage}
            sendMessage={sendMessage}
          />
        }
      />
    </>
  );
}
