"use client";
import { useEffect, useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "@/app/functions/utils";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { Search } from "lucide-react";
import {} from "@radix-ui/react-tabs";
import { Input } from "../../../components/ui/input";
import { useQueryState } from "nuqs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const userEmail = "imightbejan@gmail.com";
interface ChatListProps {
  rooms: Rooms[];
  messages: Messages[];
  getOtherParticipantEmail: Function;
  getOtherParticipantName: Function;
  checkUnreadMessages: Function;
  getLatestMessage: Function;
  updateChatMessages: Function;
  setMessagesAsRead: Function;
  sortRooms: Function;
  isCollapsed?: boolean;
}

export default function ChatList({
  rooms,
  messages,
  getOtherParticipantEmail,
  getOtherParticipantName,
  checkUnreadMessages,
  getLatestMessage,
  updateChatMessages,
  setMessagesAsRead,
  sortRooms,
}: ChatListProps) {
  const [search, setSearch] = useQueryState("search");
  const [roomId, setRoomId] = useQueryState("roomId");

  const handleClick = (item: Rooms) => {
    setRoomId(item.roomId);
    setMessagesAsRead(item);
    console.log("Selected RoomID to list", roomId);
  };

  useEffect(() => {
    !roomId && setRoomId(rooms[0].roomId);
  }),
    [];

  const tabContent = () => {
    sortRooms();
    const filteredRooms = rooms.filter((filRoom) => {
      const searchTerm = search?.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        getOtherParticipantName(filRoom).toLowerCase().includes(searchTerm);
      return matchesSearch;
    });
    return (
      <ScrollArea className="h-full">
        <div className="flex flex-col gap-2 p-4 pt-0 h-full">
          {filteredRooms.map((item) => (
            <button
              key={item.roomId}
              className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                roomId === item.roomId && "bg-muted"
              )}
              onClick={() => handleClick(item)}
            >
              <div className="flex flex-row gap-2 w-full">
                <Avatar>
                  <AvatarImage alt={getOtherParticipantName(item)} />
                  <AvatarFallback>
                    {getOtherParticipantName(item)
                      .split(" ")
                      .map((chunk: string[]) => chunk[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <div className="flex items-center gap-2 w-full h-full">
                        <div className="font-semibold">
                          {getOtherParticipantName(item)}
                        </div>
                        {checkUnreadMessages(item) && (
                          <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>

                      <div
                        className={cn(
                          "ml-auto text-xs w-full flex justify-end",
                          roomId === item.roomId
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {" "}
                        {getLatestMessage(item) != undefined &&
                          formatDistanceToNow(
                            new Date(getLatestMessage(item)?.creationDate),
                            {
                              addSuffix: true,
                            }
                          )}
                        {getLatestMessage(item) === undefined && "N/A"}
                      </div>
                    </div>
                  </div>
                  <div className="line-clamp-2 text-xs text-muted-foreground">
                    {getLatestMessage(item) != undefined &&
                      getLatestMessage(item).messageContent.length > 24 &&
                      getLatestMessage(item).messageContent?.substring(0, 24) +
                        "..."}
                    {getLatestMessage(item) != undefined &&
                      getLatestMessage(item).messageContent.length <= 24 &&
                      getLatestMessage(item).messageContent}
                    {getLatestMessage(item) === undefined &&
                      "No Message History"}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    );
  };

  return rooms ? (
    <div className="flex h-full flex-col min-h-full">
      <div className="flex items-center px-4">
        <h1 className="text-xl font-bold">Chats</h1>
      </div>
      <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <form>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={search || "Search"}
              className="pl-8"
              onChange={(e) => setSearch(e.target.value || null)}
              value={search || undefined}
            />
          </div>
        </form>
      </div>
      {tabContent()}
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
