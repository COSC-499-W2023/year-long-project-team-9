"use server";
import { Api } from "sst/node/api";

export default async function notificationsRead(email: string) {
  const res = await fetch(Api.Api.url + "/notificationsRead", {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
