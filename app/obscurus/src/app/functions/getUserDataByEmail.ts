"use server";
import { Api } from "sst/node/api";

async function getUserDataByEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getUserDataByEmail", {
    method: "post",
    body: email,
  });

  if (res.ok) {
    return res.json();
  }
}

export default getUserDataByEmail;
