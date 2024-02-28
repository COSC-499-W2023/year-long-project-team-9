"use server";
import { Api } from "sst/node/api";
import { isReadUpdateType } from "../../../stack/database/src/messages";

const updateIsRead = async (isReadUpdate: isReadUpdateType) => {
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
