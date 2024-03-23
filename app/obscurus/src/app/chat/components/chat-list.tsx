"use client";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { cn } from "@/app/functions/utils";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { MessageCircle, Search } from "lucide-react";
import { Input } from "../../../components/ui/input";
import { useQueryState } from "nuqs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface ChatListProps {
  userEmail: string;
  rooms: Rooms[];
  messages: Messages[];
  getOtherParticipantEmail: Function;
  getOtherParticipantName: Function;
  getOtherParticipantInitials: Function;
  checkUnreadMessages: Function;
  getLatestMessage: Function;
  sortRooms: Function;
  setIsReadTrue: Function;
  isCollapsed?: boolean;
}

export default function ChatList({
  userEmail,
  rooms,
  messages,
  getOtherParticipantEmail,
  getOtherParticipantName,
  getOtherParticipantInitials,
  checkUnreadMessages,
  getLatestMessage,
  sortRooms,
  setIsReadTrue,
}: ChatListProps) {
  const [search, setSearch] = useQueryState("search");
  const [roomId, setRoomId] = useQueryState("roomId");

  const handleClick = (item: Rooms) => {
    setRoomId(item.roomId);
    setIsReadTrue(item.roomId, getOtherParticipantEmail(item));
    messages.forEach((message) => {
      if (
        message.roomId === item.roomId &&
        message.senderEmail === getOtherParticipantEmail(item) &&
        message.isRead === false
      ) {
        message.isRead = true;
      }
    });
  };

  const tabContent = () => {
    sortRooms();
    const filteredRooms = rooms.filter((filRoom) => {
      const searchTerm = search?.toLowerCase();
      const matchesSearch =
        !searchTerm ||
        getOtherParticipantName(getOtherParticipantEmail(filRoom))
          .toLowerCase()
          .includes(searchTerm);
      return matchesSearch;
    });
    return filteredRooms && filteredRooms.length > 0 ? (
      <div className="flex flex-col gap-2 p-4 pt-2 h-full overflow-y-auto">
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
                <AvatarImage
                  alt={getOtherParticipantName(getOtherParticipantEmail(item))}
                />
                <AvatarFallback>
                  {getOtherParticipantInitials(getOtherParticipantEmail(item))}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col w-full">
                <div className="flex flex-col">
                  <div className="flex flex-row">
                    <div className="flex items-center gap-2 w-full">
                      <div className="font-semibold text-ellipsis line-clamp-1">
                        {getOtherParticipantName(
                          getOtherParticipantEmail(item)
                        )}
                      </div>
                      {checkUnreadMessages(item) && (
                        <span className="flex p-1 rounded-full bg-blue-600" />
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
                  {getLatestMessage(item) === undefined && "No Message History"}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    ) : (
      <div className="h-full flex flex-col space-y-4 justify-center items-center text-muted-foreground">
        <MessageCircle className="h-20 w-20" />
        <p className=" text-lg">No rooms available.</p>
      </div>
    );
  };

  return rooms ? (
    <div className="flex h-screen flex-col min-h-full">
      <div className="flex items-center p-2 px-5">
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
      <Separator />
      {tabContent()}
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
