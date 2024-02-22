"use client";
import { Button } from "@/components/ui/button";
import { Rooms, Messages } from "stacks/core/src/sql.generated";
import { useQueryState } from "nuqs";
import { ScrollArea } from "@/components/ui/scroll-area";

const userEmail = "imightbejan@gmail.com";
interface ChatLogProps {
  room: Rooms;
  messages: Messages[];
}

export default function ChatLog({ room, messages }: ChatLogProps) {
  const getRoomMessages = () => {
    return messages.filter((message) => message.roomId === room.roomId);
  };
  const roomMessages = getRoomMessages();
  return room ? (
    <div className="flex h-full flex-col min-h-full">
      <ScrollArea>
        <div className="flex flex-col">
          {roomMessages.map((message) => (
            <div>
              {message.senderEmail === userEmail && (
                <div className="flex flex-col ml-auto w-max max-w-[75%] rounded-md m-1 mr-5 bg-accent p-2">
                  {message.messageContent}
                </div>
              )}
              {message.senderEmail != userEmail && (
                <div className="flex flex-col w-max max-w-[75%] rounded-md m-1 ml-4 bg-primary text-secondary p-2">
                  {message.messageContent}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
