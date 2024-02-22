"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense } from "react";
import ChatLog from "./chat-log";

const userEmail = "imightbejan@gmail.com";
interface ChatDisplayProps {
  rooms: Rooms[];
  messages: Messages[];
}

export default function ChatDisplay({ rooms, messages }: ChatDisplayProps) {
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

  return selected ? (
    <div className="flex h-full flex-col min-h-full">
      <div className="flex flex-col items-center justify-center p-2">
        <Avatar>
          <AvatarImage alt={otherUserName} />
          <AvatarFallback>
            {otherUserName
              .split(" ")
              .map((chunk) => chunk[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="font-semibold">{otherUserName}</div>
      </div>
      <Separator className="mb-5" />
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <ChatLog room={selected} messages={messages} />
      </Suspense>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
