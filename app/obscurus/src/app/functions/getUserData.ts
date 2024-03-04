"use server";
import { Api } from "sst/node/api";

export async function getUserViaEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getUserViaEmail", {
    method: "post",
    body: JSON.stringify({
      email: email,
    }),
  });
  if (res.ok) {
    return res.json();
  }
}
