"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense, useState } from "react";
import { Archive, Trash2, ArrowLeft } from "lucide-react";
import { formatDistanceToNow, formatDistance, format } from "date-fns";
import Upload from "../../Submit/components/upload";

export default function ChatDisplay({
  rooms,
  messages,
}: {
  rooms: Rooms[];
  messages: Messages[];
}) {
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

  return messages ? (
    <div className="flex h-full flex-col min-h-full">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2"></div>
      </div>
      <Separator />
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Upload />
      </Suspense>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
