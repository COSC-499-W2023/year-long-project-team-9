"use server";
import { Api } from "sst/node/api";

export async function getRoomsViaEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getUserData", {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
}
