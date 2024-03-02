"use server";
import { Api } from "sst/node/api";
import { Messages as MessagesType } from "../../../stack/database/src/sql.generated";

const createMessage = async (newMessage: MessagesType) => {
  const res = await fetch(Api.Api.url + "/createMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessage),
  });
  if (res.ok) {
    return res.json();
  } else {
    return "Failed to insert";
  }
};

export default createMessage;
