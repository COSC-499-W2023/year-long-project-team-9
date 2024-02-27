"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense } from "react";
import ChatLog from "../../chat/components/chat-log";

const userEmail = "imightbejan@gmail.com";
interface ChatDisplayProps {
  rooms: Rooms[];
  messages: Messages[];
  updateChatMessages: Function;
}

export default function ChatDisplay({
  rooms,
  messages,
  updateChatMessages,
}: ChatDisplayProps) {
  const [roomId, setRoomId] = useQueryState("roomId");

  if (!roomId) {
    setRoomId(rooms[0].roomId);
  }

  const selected = rooms.find((item) => item.roomId === roomId);
  var otherUserName = "";
  if (selected?.participant1Email === userEmail) {
    otherUserName =
      selected.participant2RoomGivenName +
      " " +
      selected.participant2RoomFamilyName;
  } else if (selected?.participant2Email === userEmail) {
    otherUserName =
      selected.participant1RoomGivenName +
      " " +
      selected.participant1RoomFamilyName;
  }
  var otherEmail = "";
  if (
    selected?.participant1Email === userEmail &&
    selected?.participant2Email != null
  ) {
    otherEmail = selected.participant2Email;
  } else if (
    selected?.participant2Email === userEmail &&
    selected?.participant1Email != null
  ) {
    otherUserName = selected.participant1Email;
  }

  return selected ? (
    <div className="flex h-full flex-col min-h-full">
      <div className="flex flex-row items-center justify-left p-4">
        <Avatar>
          <AvatarImage alt={otherUserName} />
          <AvatarFallback>
            {otherUserName
              .split(" ")
              .map((chunk) => chunk[0])
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
          room={selected}
          messages={messages}
          updateChatMessages={updateChatMessages}
        />
      </Suspense>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
