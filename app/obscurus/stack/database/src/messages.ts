export * as Messages from "./messages";

import { SQL } from "./sql";
import type { Messages } from "./sql.generated";

export function list() {
  return SQL.DB.selectFrom("messages")
    .selectAll()
    .orderBy("creationDate", "desc")
    .execute();
}

export function insert(message: Messages) {
  return SQL.DB.insertInto("messages")
    .values({
      messageId: message.messageId,
      roomId: message.roomId,
      senderEmail: message.senderEmail,
      creationDate: new Date(message.creationDate),
      messageContent: message.messageContent,
      isRead: message.isRead,
    })
    .execute();
}

export function setIsReadTrue(messageId: string) {
  return SQL.DB.updateTable("messages")
    .set({
      isRead: true,
    })
    .where("messageId", "=", messageId)
    .executeTakeFirst();
}
