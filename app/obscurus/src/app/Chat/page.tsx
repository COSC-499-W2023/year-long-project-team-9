"use server";
// IMPORTS
import { Api } from "sst/node/api";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { Requests, Submissions } from "stacks/core/src/sql.generated";
import { getSubmissions } from "../functions/getSubmissions";
import { getRequests } from "../functions/getRequests";
import SubmitDisplay from "../Submit/components/submit-display";
import Wrapper from "../wrapper";
import SubmitList from "../Submit/components/submit-list";

// CONSTRUCTS
const userEmail = "imightbejan@gmail.com";

// FUNCTIONS
async function getRooms(email: string) {
  const res = await fetch(`${Api.Api.url}/getRoomsViaEmail?email=${email}`);
  if (res.ok) {
    return res.json();
  }
}
function createRoomsMap(roomMessageData: {}) {
  const roomsMap = new Map();
  // const roomsLength = Object.keys(roomMessageData.rooms).length;
  // const messagesLength = Object.keys(roomMessageData.messages).length;
  // for (let i = 0; i < roomsLength; i++) {
  //   const roomId = roomMessageData.rooms[i].roomId;
  //   const roomData = roomMessageData.rooms[i];
  //   const roomMessages = {};
  //   for (let j = 0; j < messagesLength; j++) {
  //     const messageRoomId = roomMessageData.messages[j].roomId;
  //     if (messageRoomId === roomId) {
  //       roomMessages[roomMessageData.messages[j].messageId] =
  //         roomMessageData.messages[j];
  //     }
  //   }
  //   const mapData = {};
  // }
  return roomsMap;
}
export default async function ChatPage() {
  // Getting room and message data
  const roomMessageData = await getRooms(userEmail);
  // console.log(roomMessageData);
  // Adding rooms and messages to a map object
  const roomsMap = createRoomsMap(roomMessageData);
  console.log(roomsMap);

  // Saving layout from cookies
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;
  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={""}
      secondPanel={""}
    />
  );
}
