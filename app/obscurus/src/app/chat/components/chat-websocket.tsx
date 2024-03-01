"use client";
import React, { useEffect } from "react";

interface ChatWebsocketProps {
  updateUserConnectionId: Function;
}

export default function ChatWebsocket({
  updateUserConnectionId,
}: ChatWebsocketProps) {
  useEffect(() => {
    const socket = new WebSocket(
      "wss://o4tgfyn9n6.execute-api.us-west-2.amazonaws.com/Soren"
    );
    const handleBeforeUnload = () => {
      console.log("Page reloading or closing, disconnecting WebSocket");
      socket.close();
    };

    socket.onopen = () => {
      console.log("Connected to WebSocket");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    socket.onmessage = (event) => {
      // Example of handling a message from the server that contains the connection ID
      const data = JSON.parse(event.data);
      if (data.type === "connectionId") {
        console.log(data.connectionId);
      }
    };

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      console.log("Disconnecting WebSocket");
      socket.close();
    };
  }, []);

  return <></>;
}
