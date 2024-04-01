"use client"
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

const WebSocketContext = createContext<WebSocket | null>(null);

export const WebSocketProvider = ({ children, url }: {children: ReactNode | ReactNode[], url: string}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);


    ws.onopen = () => {
      console.log('WebSocket Connected');
      setSocket(ws);
    };

    ws.onclose = () => console.log('WebSocket Disconnected');

    return () => {
      ws.close();
    };
  }, [url]);

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  return useContext(WebSocketContext);
};
