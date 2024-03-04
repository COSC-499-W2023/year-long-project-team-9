"use server";
import { Api } from "sst/node/api";

export async function getRequestsViaEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getRequestsViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
