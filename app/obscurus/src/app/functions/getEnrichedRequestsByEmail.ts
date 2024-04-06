"use server";
import { Api } from "sst/node/api";

async function getEnrichedRequestsByEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getEnrichedRequestsByEmail", {
    method: "post",
    body: email,
  });


  if (res.ok) {
    return res.json();
  }
}

export default getEnrichedRequestsByEmail;
