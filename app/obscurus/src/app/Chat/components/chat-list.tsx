"use client";
// IMPORTS
import { useEffect } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "@/lib/utils";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import Nav from "../../../components/nav";
import { request } from "@playwright/test";
import {} from "@radix-ui/react-tabs";
import { Input } from "../../../components/ui/input";
import { useQueryState } from "nuqs";

// CONSTRUCTS
const userEmail = "imightbejan@gmail.com";
interface ChatsListProps {
  rooms: Rooms[];
  messages: Messages[];
  isCollapsed?: boolean;
}

// FUNCTIONS
export default function ChatList({ rooms, messages }: ChatsListProps) {
  const router = useRouter();
  const [search, setSearch] = useQueryState("search");
  const [roomId, setRoomId] = useQueryState("roomId");

  const handleClick = (item: Rooms) => {
    setRoomId(item.roomId);
    console.log("Selected RoomID to list", roomId);
  };

  const getLatestMessage = (item: Rooms): Messages => {
    const currRoomId = item.roomId;
    const roomMessages = messages.filter(
      (messageItem) => messageItem.roomId === currRoomId
    );
    return roomMessages[roomMessages.length - 1];
  };

  const sortRooms = () => {
    if (rooms != undefined) {
      rooms.sort((a, b) => {
        const dateA = getLatestMessage(a)
          ? new Date(getLatestMessage(a).creationDate)
          : new Date(0);
        const dateB = getLatestMessage(b)
          ? new Date(getLatestMessage(b).creationDate)
          : new Date(0);
        return dateB.getTime() - dateA.getTime();
      });
    }
  };

  useEffect(() => {
    sortRooms();
    !roomId && setRoomId(rooms[0].roomId);
  }),
    [];

  return rooms ? (
    <div>
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

      <div className="flex flex-col gap-2 p-4 pt-0 h-full">
        {rooms.map((item) => (
          <button
            key={item.roomId}
            className={cn(
              "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
              roomId === item.roomId && "bg-muted"
            )}
            onClick={() => handleClick(item)}
          >
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center w-full justify-between">
                <div className="flex items-center gap-2 w-full h-full">
                  <div className="font-semibold">
                    {item.participant1Email === userEmail
                      ? item.participant1RoomGivenName +
                          " " +
                          item.participant1RoomFamilyName ||
                        item.participant1Email
                      : item.participant2RoomGivenName +
                          " " +
                          item.participant2RoomFamilyName ||
                        item.participant2Email}
                  </div>
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
                getLatestMessage(item).messageContent?.substring(0, 300)}
              {getLatestMessage(item) === undefined && "No Message History"}
            </div>
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
