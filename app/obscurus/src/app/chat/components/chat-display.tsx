"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense } from "react";
import ChatLog from "../../chat/components/chat-log";

interface ChatDisplayProps {
  userEmail: string;
  rooms: Rooms[];
  messages: Messages[];
  getOtherParticipantEmail: Function;
  getOtherParticipantName: Function;
  updateChatMessages: Function;
  createMessage: Function;
  sendMessage: Function;
  createMessageNotification: Function;
}

export default function ChatDisplay({
  userEmail,
  rooms,
  messages,
  getOtherParticipantEmail,
  getOtherParticipantName,
  updateChatMessages,
  createMessage,
  sendMessage,
  createMessageNotification,
}: ChatDisplayProps) {
  const [roomId, setRoomId] = useQueryState("roomId");

  if (!roomId) {
    setRoomId(rooms[0].roomId);
  }

  const getUserName = (item: Rooms | undefined) => {
    if (item === undefined) {
      return "";
    } else if (item.participant1Email === userEmail) {
      return (
        item.participant1RoomGivenName + " " + item.participant1RoomFamilyName
      );
    } else {
      return (
        item.participant2RoomGivenName + " " + item.participant2RoomFamilyName
      );
    }
  };

  const selected = rooms.find((item) => item.roomId === roomId);
  const userName = getUserName(selected);
  const otherEmail = getOtherParticipantEmail(selected);
  const otherUserName = getOtherParticipantName(
    getOtherParticipantEmail(selected)
  );

  return selected ? (
    <div className="flex h-full flex-col min-h-full">
      <div className="flex flex-row items-center justify-left p-4">
        <Avatar>
          <AvatarImage alt={otherUserName} />
          <AvatarFallback>
            {otherUserName
              .split(" ")
              .map((chunk: string[]) => chunk[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="pl-2 flex flex-col">
          <div className="text-2x1 font-semibold">{otherUserName}</div>
          <div className="text-xs text-muted-foreground">{otherEmail}</div>
        </div>
      </div>
      <Separator />
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <ChatLog
          userEmail={userEmail}
          room={selected}
          messages={messages}
          userName={userName}
          otherEmail={otherEmail}
          updateChatMessages={updateChatMessages}
          createMessage={createMessage}
          sendMessage={sendMessage}
          createMessageNotification={createMessageNotification}
        />
      </Suspense>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
