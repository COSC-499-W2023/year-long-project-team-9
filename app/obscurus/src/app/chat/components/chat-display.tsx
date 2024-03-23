"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { useQueryState } from "nuqs";
import { Suspense } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";
import ChatLog from "../../chat/components/chat-log";
import { MessagesSquare } from "lucide-react";

interface ChatDisplayProps {
  userEmail: string;
  rooms: Rooms[];
  messages: Messages[];
  getOtherParticipantEmail: Function;
  getOtherParticipantName: Function;
  getOtherParticipantInitials: Function;
  updateChatMessages: Function;
  createMessage: Function;
  sendMessage: Function;
  createMessageNotification: Function;
}

export default function ChatDisplay({
  userEmail,
  rooms,
  messages,
  getOtherParticipantEmail,
  getOtherParticipantName,
  getOtherParticipantInitials,
  updateChatMessages,
  createMessage,
  sendMessage,
  createMessageNotification,
}: ChatDisplayProps) {
  const [roomId, setRoomId] = useQueryState("roomId");

  const getUserName = (item: Rooms | undefined) => {
    if (item === undefined) {
      return "";
    } else if (item.participant1Email === userEmail) {
      return (
        item.participant1RoomGivenName + " " + item.participant1RoomFamilyName
      );
    } else {
      return (
        item.participant2RoomGivenName + " " + item.participant2RoomFamilyName
      );
    }
  };

  const selected = rooms.find((item) => item.roomId === roomId);
  const userName = getUserName(selected);
  const otherUserEmail = getOtherParticipantEmail(selected);
  const otherUserName = getOtherParticipantName(otherUserEmail);
  const otherUserInitials = getOtherParticipantInitials(otherUserEmail);

  return selected ? (
    <div className="flex flex-col h-full">
      <div className="flex flex-row items-center justify-left p-4">
        <Avatar>
          <AvatarImage alt={otherUserName} />
          <AvatarFallback>{otherUserInitials}</AvatarFallback>
        </Avatar>
        <div className="pl-2 flex flex-col w-[90%]">
          <div className="text-2x1 font-semibold line-clamp-1">
            {otherUserName}
          </div>
          <div className="text-xs text-muted-foreground truncate">
            {otherUserEmail}
          </div>
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
          userEmail={userEmail}
          room={selected}
          messages={messages}
          userName={userName}
          otherUserEmail={otherUserEmail}
          updateChatMessages={updateChatMessages}
          createMessage={createMessage}
          sendMessage={sendMessage}
          createMessageNotification={createMessageNotification}
        />
        <div className="flex-grow" />
        <div className="flex mr-3 ml-3 mb-4 mt-2 gap-2">
          <Textarea
            className="items-end resize-none "
            placeholder="Send Message"
            maxLength={160}
            // value={chatMessage}
            // onChange={(e) => handleChatMessageChange(e)}
            // onKeyDown={(e) => handleTextareaKeyDown(e)}
          ></Textarea>
          <div className="flex flex-col">
            <Button
              variant="ghost"
              // onClick={() => handleClick()}
              // disabled={chatMessage.length < 1}
            >
              <ArrowUpCircle></ArrowUpCircle>
            </Button>
            <p className="text-xs text-muted-foreground text-center align-bottom">
              {/* {chatMessage.length}/160 */}
            </p>
          </div>
        </div>
      </Suspense>
    </div>
  ) : (
    <div className="h-full flex flex-col space-y-4 justify-center items-center text-muted-foreground">
      <MessagesSquare className="h-20 w-20" />
      <p className=" text-lg">No room selected.</p>
    </div>
  );
}
