"use server";
import { Api } from "sst/node/api";

export default async function getNotificationsViaEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getNotificationsViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
