"use server";
import { WebSocketApi } from "sst/node/websocket-api";

export async function getWebsocketApiEndpoint() {
  return WebSocketApi.WSApi.url;
}
