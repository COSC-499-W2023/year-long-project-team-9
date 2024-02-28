export * as Messages from "./messages";

import { SQL } from "./sql";
import type { Messages } from "./sql.generated";
import { request } from "http";
import { Status } from "./types/status";

export function list() {
  return SQL.DB.selectFrom("messages").selectAll().execute();
}

export function insert(message: Messages) {
  return SQL.DB.insertInto("messages")
    .values({
      messageId: message.messageId,
      roomId: message.roomId,
      senderEmail: message.senderEmail,
      creationDate: message.creationDate,
      messageContent: message.messageContent,
      isRead: message.isRead,
    })
    .execute();
}
