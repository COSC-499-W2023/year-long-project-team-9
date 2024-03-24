"use server";
import { Api } from "sst/node/api";

export default async function readNotification(id: string) {
  console.log("==========================");
  const res = await fetch(Api.Api.url + "/readNotification", {
    method: "post",
    body: JSON.stringify({
      id: id,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
