"use server";
import { Api } from "sst/node/api";

export default async function notificationsRead(id: string) {
  console.log("Hello World");
  const res = await fetch(Api.Api.url + "/notificationsRead", {
    method: "post",
    body: JSON.stringify({
      id: id,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
