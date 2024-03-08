export * as Notifications from "./notifications";

import { SQL } from "./sql";
import type { Notifications } from "./sql.generated";

export function list() {
  return SQL.DB.selectFrom("notifications")
    .selectAll()
    .orderBy("creationDate", "asc")
    .execute();
}

export function insert(notification: Notifications) {
  return "";
  // return SQL.DB.insertInto("notifications")
  //   .values({
  //     notificationId: notification.notificationId,
  //     userEmail: notification.userEmail,
  //     type: notification.type,
  //     creationDate: new Date(notification.creationDate),
  //     content: notification.content,
  //     isRead: notification.isRead,
  //     isTrashed: notification.isTrashed,
  //   })
  //   .execute();
}

export function updateNotificationDate(notification: Notifications) {
  return SQL.DB.updateTable("notifications")
    .set({
      creationDate: new Date(notification.creationDate),
    })
    .where("notificationId", "=", notification.notificationId)
    .executeTakeFirst();
}
