"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";
import {
  Rooms,
  Notifications,
  Messages,
} from "stack/database/src/sql.generated";
import { useQueryState } from "nuqs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { uuidv7 } from "uuidv7";

interface ChatLogProps {
  userEmail: string;
  room: Rooms;
  messages: Messages[];
  userName: string;
  otherEmail: string;
  updateChatMessages: Function;
  createMessage: Function;
  sendMessage: Function;
  createMessageNotification: Function;
}

export default function ChatLog({
  userEmail,
  room,
  messages,
  userName,
  otherEmail,
  updateChatMessages,
  createMessage,
  sendMessage,
  createMessageNotification,
}: ChatLogProps) {
  const getRoomMessages = () => {
    return messages.filter((message) => message.roomId === room.roomId);
  };
  const handleChatMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setChatMessage(value);
  };
  const addNewChatMessage = (newChatMessage: Messages) => {
    const newChatMessages = [...messages, newChatMessage];
    updateChatMessages(newChatMessages);
  };
  const handleClick = () => {
    const newMessageUUID = uuidv7();
    const newMessage: Messages = {
      messageId: newMessageUUID,
      roomId: room.roomId,
      senderEmail: userEmail,
      creationDate: new Date(),
      messageContent: chatMessage,
      isRead: false,
    };
    const newNotificationUUID = uuidv7();
    const newNotification: Notifications = {
      notificationId: newNotificationUUID,
      userEmail: otherEmail,
      type: "messages",
      creationDate: new Date(),
      content: `New message from ${userName}`,
      isRead: false,
      isTrashed: false,
    };
    setChatMessage("");
    addNewChatMessage(newMessage);
    // createMessage(newMessage);
    sendMessage(JSON.stringify(newMessage));
    createMessageNotification(newNotification);
  };

  const roomMessages = getRoomMessages();
  const [chatMessage, setChatMessage] = useState("");

  return room ? (
    <div className="flex flex-col mt-auto">
      <ScrollArea className="sm:max-h-80 md:max-h-80 2xl:max-h-max">
        {roomMessages.map((message) => (
          <div key={message.messageId}>
            {message.senderEmail === userEmail && (
              <div className="flex justify-end">
                <div className="flex flex-col ml-auto w-max max-w-[75%] rounded-md m-1 mr-5 bg-accent p-2">
                  <p className="break-all max-w-xs">{message.messageContent}</p>
                </div>
              </div>
            )}
            {message.senderEmail != userEmail && (
              <div className="flex w-3/4 m-1">
                <div className="flex flex-col w-max max-w-[75%] rounded-md m-1 ml-4 bg-primary text-secondary p-2">
                  <p className="break-all max-w-xs">{message.messageContent}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
      <div className="flex mr-3 ml-3 mb-6 mt-4 gap-2">
        <Input
          className="items-end resize-none "
          placeholder="Send Message"
          maxLength={160}
          value={chatMessage}
          onChange={(e) => handleChatMessageChange(e)}
        ></Input>
        <Button
          variant="ghost"
          onClick={() => handleClick()}
          disabled={chatMessage.length < 1}
        >
          <ArrowUpCircle></ArrowUpCircle>
        </Button>
      </div>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
