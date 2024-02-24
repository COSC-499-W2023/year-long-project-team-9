"use server";
import { Api } from "sst/node/api";

type updateIsReadBody = {
  isRead: boolean;
  messageId: string;
};

const updateIsRead = async (updateIsReadBody: updateIsReadBody) => {
  const res = await fetch(`${Api.Api.url}/updateIsRead`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateIsReadBody),
  });
  if (res.ok) {
    console.log(res);
    return res.json();
  }
};

export default updateIsRead;
