"use server";
import { Api } from "sst/node/api";
import { Messages as MessagesType } from "stack/database/src/sql.generated";
import { isReadUpdateType } from "stack/database/src/messages";

const updateIsRead = async (isReadMessage: MessagesType) => {
  const isReadUpdate: isReadUpdateType = {
    isRead: true,
    messageId: isReadMessage.messageId,
  };
  const res = await fetch(Api.Api.url + "/updateIsRead", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(isReadUpdate),
  });
  console.log("Fetch complete");
  if (res.ok) {
    return res.json();
  } else {
    return "Failed to update";
  }
};

export default updateIsRead;
