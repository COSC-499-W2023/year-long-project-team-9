"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle } from "lucide-react";
import { Rooms, Messages } from "stack/database/src/sql.generated";
import { useQueryState } from "nuqs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

const userEmail = "imightbejan@gmail.com";
interface ChatLogProps {
  room: Rooms;
  messages: Messages[];
  updateChatMessages: Function;
  createMessage: Function;
}

export default function ChatLog({
  room,
  messages,
  updateChatMessages,
  createMessage,
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
  const getDateTime = (): Date => {
    const currDate = new Date();
    const year = currDate.getFullYear();
    const month = padZero(currDate.getMonth() + 1);
    const day = padZero(currDate.getDate());
    const hour = padZero(currDate.getHours());
    const minute = padZero(currDate.getMinutes());
    const second = padZero(currDate.getSeconds());
    return new Date(`${year}.${month}.${day} ${hour}:${minute}:${second}`);
  };
  function padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }
  const handleClick = () => {
    let newMessageUUID = uuidv4();
    let newMessageUUIDUnique = false;
    while (!newMessageUUIDUnique) {
      const sameUUIDList = messages.filter(
        (message) => message.messageId === newMessageUUID
      );
      if (sameUUIDList.length === 0) {
        newMessageUUIDUnique = true;
      } else {
        newMessageUUID = uuidv4();
      }
    }
    const newMessage: Messages = {
      messageId: newMessageUUID,
      roomId: room.roomId,
      senderEmail: userEmail,
      creationDate: new Date(),
      messageContent: chatMessage,
      isRead: false,
    };
    setChatMessage("");
    addNewChatMessage(newMessage);
    // createMessage(newMessage);
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
