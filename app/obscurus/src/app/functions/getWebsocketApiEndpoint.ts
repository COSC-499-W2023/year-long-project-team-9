"use server";
import { Api } from "sst/node/api";

export async function getWebsocketApiEndpoint() {
  const res = await fetch(Api.Api.url + "/getWebsocketApiEndpoint");

  if (res.ok) {
    return res.json();
  }
}
