"use client";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { format, isSameDay } from "date-fns";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

interface ChatLogProps {
  userEmail: string;
  room: Rooms;
  messages: Messages[];
}

export default function ChatLog({ userEmail, room, messages }: ChatLogProps) {
  const getRoomMessages = () => {
    return messages.filter((message) => message.roomId === room.roomId);
  };
  const roomMessages = getRoomMessages();

  const isSameDayAsPrevious = (currentDate: Date, index: number) => {
    if (index === 0) {
      return false; // Always show separator before the first message
    }
    const previousDate = new Date(roomMessages[index - 1].creationDate);
    return isSameDay(currentDate, previousDate);
  };

  return room ? (
    <div id="chatScroll" className="mt-2 overflow-y-auto">
      {roomMessages.map((message, index) => (
        <div key={message.messageId}>
          {!isSameDayAsPrevious(new Date(message.creationDate), index) && (
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                {format(new Date(message.creationDate), "MMMM d, yyyy")}
              </span>
            </div>
          )}
          {message.senderEmail === userEmail ? (
            <div className="flex justify-end">
              <div className="flex flex-col ml-auto w-max max-w-[75%] rounded-md m-1 mr-5 bg-accent p-2">
                <p className="text-pretty break-words max-w-xs">
                  {message.messageContent}
                </p>
                <p className="text-xs text-muted-foreground text-right mt-1">
                  {formatDistanceToNow(new Date(message.creationDate), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex w-3/4 m-1">
              <div className="flex flex-col w-max max-w-[75%] rounded-md m-1 ml-4 bg-primary text-secondary p-2">
                <p className="text-pretty break-words max-w-xs">
                  {message.messageContent}
                </p>
                <p className="text-xs text-muted-foreground text-left mt-1">
                  {formatDistanceToNow(new Date(message.creationDate), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
