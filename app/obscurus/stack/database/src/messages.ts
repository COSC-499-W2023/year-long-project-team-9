export * as Messages from "./messages";

import { SQL } from "./sql";
import type { Messages } from "./sql.generated";

export type isReadUpdateType = {
  isRead: boolean;
  messageId: string;
};

export function list() {
  return SQL.DB.selectFrom("messages").selectAll().execute();
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

export function updateIsRead(isReadUpdate: isReadUpdateType) {
  return SQL.DB.updateTable("messages")
    .set({
      isRead: isReadUpdate.isRead,
    })
    .where("messageId", "=", isReadUpdate.messageId)
    .executeTakeFirst();
}
