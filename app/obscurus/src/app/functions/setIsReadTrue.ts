"use server";
import { Api } from "sst/node/api";

const setIsReadTrue = async (messageId: string) => {
  const res = await fetch(Api.Api.url + "/setIsReadTrue", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: messageId,
  });
  if (res.ok) {
    return res.json();
  } else {
    return "Failed to update";
  }
};

export default setIsReadTrue;
