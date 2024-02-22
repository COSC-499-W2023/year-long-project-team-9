"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense } from "react";

const userEmail = "imightbejan@gmail.com";
interface ChatLogProps {
  room: Rooms;
  messages: Messages[];
}

export default function ChatDisplay({ room, messages }: ChatLogProps) {
  const [roomId, setRoomId] = useQueryState("roomId");

  if (!roomId) {
    setRoomId(room.roomId);
  }

  var otherUserName = "";
  if (room?.participant1Email === userEmail) {
    otherUserName =
      room.participant2RoomGivenName + " " + room.participant2RoomFamilyName;
  } else if (room?.participant2Email === userEmail) {
    otherUserName =
      room.participant1RoomGivenName + " " + room.participant1RoomFamilyName;
  }

  return room ? (
    <div className="flex h-full flex-col min-h-full"></div>
  ) : (
    <div>Failed to load data....</div>
  );
}
