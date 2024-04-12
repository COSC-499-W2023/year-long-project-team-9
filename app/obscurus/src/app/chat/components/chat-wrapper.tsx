"use client";
import { useState, useEffect } from "react";
import Wrapper from "../../wrapper";
import { Rooms, Messages, Users } from "stack/database/src/sql.generated";
import ChatList from "./chat-list";
import ChatDisplay from "./chat-display";
import { useWebSocket } from "@/app/ws-provider";
import { set } from "date-fns";

type UserNames = {
  email: string;
  givenName: string;
  familyName: string;
  profileImage: any;
};

interface ChatWrapperProps {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userEmail: string;
  rooms: Rooms[];
  userNames: UserNames[];
  messages: Messages[];
  createMessage: Function;
  createMessageNotification: Function;
  setIsReadTrue: Function;
  getProfileImgPresignedUrl?: (username: string) => Promise<string>;
  getUserViaEmail?: (email: string) => Promise<Users>;
}

export default function ChatWrapper({
  defaultLayout,
  defaultCollapsed,
  userEmail,
  rooms,
  userNames,
  messages,
  createMessage,
  createMessageNotification,
  setIsReadTrue,
  getProfileImgPresignedUrl,
  getUserViaEmail,
}: ChatWrapperProps) {
  const ws = useWebSocket();
  const [chatMessages, setChatMessages] = useState<Messages[]>(messages);
  const [chatRooms, setChatRooms] = useState<Rooms[]>(rooms);
  const [chatScrollBoolean, setChatScrollBoolean] = useState<boolean>(false);
  const [roomId, setRoomId] = useState<string | undefined>();

  const getOtherParticipantEmail = (item: Rooms | undefined) => {
    if (item === undefined) {
      return "";
    } else if (item.participant1Email === userEmail) {
      return item.participant2Email;
    } else {
      return item.participant1Email;
    }
  };
  const getOtherParticipantName = (email: string) => {
    const otherParticipant: UserNames[] = userNames.filter(
      (user) => user.email === email
    );
    if (otherParticipant.length > 0) {
      return (
        otherParticipant[0].givenName + " " + otherParticipant[0].familyName
      );
    } else {
      return "No Name";
    }
  };
  const getOtherParticipantInitials = (email: string) => {
    const otherParticipant: UserNames[] = userNames.filter(
      (user) => user.email === email
    );
    if (otherParticipant.length > 0) {
      return (
        otherParticipant[0].givenName[0] + otherParticipant[0].familyName[0]
      );
    } else {
      return "N/A";
    }
  };

  const [profileImage, setProfileImage] = useState<string | undefined>(
    undefined
  );
  const getOtherParticipantProfileImg = (email: string) => {
    setProfileImage(undefined);
    const otherParticipant: UserNames[] = userNames.filter(
      (user) => user.email === email
    );
    if (otherParticipant.length > 0) {
      return otherParticipant[0].profileImage;
    }
    return " ";
  };

  const getProfileImage = async (imgkey: any) => {
    if (imgkey === null) {
      setProfileImage("undefined");
    } else if (getProfileImgPresignedUrl) {
      const url = await getProfileImgPresignedUrl(imgkey);
      setProfileImage(url);
    } else {
      setProfileImage("undefined");
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
  const checkIfMessageInList = (newMessage: Messages) => {
    const newMessages = chatMessages.filter(
      (message) => message.messageId === newMessage.messageId
    );
    return newMessages.length > 0;
  };

  useEffect(() => {
    if (!ws) {
      return;
    }
    const handleWebSocketMessages = (event: any) => {
      try {
        const messageJSON = JSON.parse(event.data);
        if (messageJSON && !checkIfMessageInList(messageJSON)) {
          setChatMessages((prevMessages) => [...prevMessages, messageJSON]);
        }
      } catch (error) {
        console.error("Failed to parse message data:", error);
      }
    };

    ws.addEventListener("message", handleWebSocketMessages);

    return () => {
      ws.removeEventListener("message", handleWebSocketMessages);
    };
  }, [ws]);

  const sendMessage = (messageData: string) => {
    console.log("Sent message: ", messageData);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ action: "sendmessage", data: messageData }));
    }
    createMessage(JSON.parse(messageData));
    setChatScrollBoolean(true);

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
            roomId={roomId}
            setRoomId={setRoomId}
            getOtherParticipantEmail={getOtherParticipantEmail}
            getOtherParticipantName={getOtherParticipantName}
            getOtherParticipantInitials={getOtherParticipantInitials}
            checkUnreadMessages={checkUnreadMessages}
            getLatestMessage={getLatestMessage}
            sortRooms={sortRooms}
            setIsReadTrue={setIsReadTrue}
            setChatScrollBoolean={setChatScrollBoolean}
            getProfileImgPresignedUrl={getProfileImgPresignedUrl}
            getUserViaEmail={getUserViaEmail}
            getOtherParticipantProfileImg={getOtherParticipantProfileImg}
          />
        }
        secondPanel={
          <ChatDisplay
            userEmail={userEmail}
            rooms={chatRooms}
            messages={chatMessages}
            roomId={roomId}
            setRoomId={setRoomId}
            getOtherParticipantEmail={getOtherParticipantEmail}
            getOtherParticipantName={getOtherParticipantName}
            getOtherParticipantInitials={getOtherParticipantInitials}
            updateChatMessages={updateChatMessages}
            createMessage={createMessage}
            sendMessage={sendMessage}
            createMessageNotification={createMessageNotification}
            chatScrollBoolean={chatScrollBoolean}
            setChatScrollBoolean={setChatScrollBoolean}
            getUserViaEmail={getUserViaEmail}
            getProfileImgPresignedUrl={getProfileImgPresignedUrl}
            getOtherParticipantProfileImg={getOtherParticipantProfileImg}
          />
        }
      />
    </>
  );
}
