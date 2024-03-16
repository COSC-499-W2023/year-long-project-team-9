"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpCircle } from "lucide-react";
import {
  Rooms,
  Notifications,
  Messages,
} from "stack/database/src/sql.generated";
import { uuidv7 } from "uuidv7";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
  const roomMessages = getRoomMessages();
  const [chatMessage, setChatMessage] = useState("");
  const handleChatMessageChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
      type: "CHAT",
      referenceId: room.roomId,
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

  const handleTextareaKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent default behavior (inserting new line)
      if (chatMessage.length > 0) {
        handleClick();
      }
    }
  };

  return room ? (
    <div className="flex flex-col mt-auto relative">
      <div id="chatScroll" className="h-screen overflow-y-auto">
        {roomMessages.map((message) => (
          <div key={message.messageId}>
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
      <div className="flex mr-3 ml-3 mb-6 mt-4 gap-2">
        <Textarea
          className="items-end resize-none "
          placeholder="Send Message"
          maxLength={160}
          value={chatMessage}
          onChange={(e) => handleChatMessageChange(e)}
          onKeyDown={(e) => handleTextareaKeyDown(e)}
        ></Textarea>
        <div className="flex flex-col">
          <Button
            variant="ghost"
            onClick={() => handleClick()}
            disabled={chatMessage.length < 1}
          >
            <ArrowUpCircle></ArrowUpCircle>
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            {chatMessage.length}/160
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div>Failed to load data....</div>
  );
}
