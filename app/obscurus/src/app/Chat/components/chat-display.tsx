"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense } from "react";
import { formatDistanceToNow, formatDistance, format } from "date-fns";

const userEmail = "imightbejan@gmail.com";
interface ChatsDisplayProps {
  rooms: Rooms[];
  messages: Messages[];
}

export default function ChatDisplay({ rooms, messages }: ChatsDisplayProps) {
  const [roomId, setRoomId] = useQueryState("roomId");
  const [submissionId, setSubmissionId] = useQueryState("submissionId");
  const [upload, setUpload] = useQueryState("upload");
  const [showVideos, setShowVideos] = useQueryState("showVideos");
  const [uploading, setUploading] = useQueryState("upload");

  if (!roomId) {
    setRoomId(rooms[0].roomId);
  }
  console.log("RoomId", roomId);

  const selected = rooms.find((item) => item.roomId === roomId);
  console.log("Selected room to display", selected);

  return selected ? (
    <div className="flex h-full flex-col min-h-full">
      <div className="flex items-center justify-center p-2">
        <div className="flex items-center gap-2"></div>
        <Avatar className="">
          <AvatarImage alt={userEmail} />
          <AvatarFallback>
            {userEmail
              .split(" ")
              .map((chunk) => chunk[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="font-semibold">
          {selected.participant1Email === userEmail
            ? selected.participant2RoomGivenName +
                " " +
                selected.participant2RoomFamilyName ||
              selected.participant2Email
            : selected.participant1RoomGivenName +
                " " +
                selected.participant1RoomFamilyName ||
              selected.participant1Email}
        </div>
      </div>
      <Separator />
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        }
      ></Suspense>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
