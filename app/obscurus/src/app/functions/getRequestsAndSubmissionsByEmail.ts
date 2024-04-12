"use server";
import { Api } from "sst/node/api";

async function getRequestsAndSubmissionsByEmail(email: string) {
  const res = await fetch(Api.Api.url + "/getRequestsAndSubmissionsByEmail", {
    method: "post",
    body: email,
  });

  if (res.ok) {
    return res.json();
  }
}

export default getRequestsAndSubmissionsByEmail;
