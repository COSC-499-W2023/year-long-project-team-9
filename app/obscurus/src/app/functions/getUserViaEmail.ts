"use server";
import { Api } from "sst/node/api";

export async function getUserViaEmail(email: string) {
  console.log("Email", email);
  const res = await fetch(Api.Api.url + "/getUserViaEmail", {
    method: "post",
    body: email,
  });
  if (res.ok) {
    console.log("User data", res);
    return res.json();
  }
}
