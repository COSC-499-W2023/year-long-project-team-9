"use server";
import { Api } from "sst/node/api";

export async function getMessages() {
  const res = await fetch(Api.Api.url + "/getMessages");

  if (res.ok) {
    return res.json();
  }
}
