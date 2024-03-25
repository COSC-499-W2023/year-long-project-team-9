"use server";
import { SQL } from "./sql";

// methods for notification feature
export async function getNotificationsViaEmail(email: string) {
  const notifications = await SQL.DB.selectFrom("notifications")
    .selectAll()
    .where("userEmail", "=", email)
    .where("isTrashed", "=", false)
    .orderBy("creationDate", "desc")
    .execute();
  return notifications;
}

export async function deleteNotification(id: string) {
  const deleteNotification = await SQL.DB.updateTable("notifications")
    .set({ isTrashed: true })
    .where("notificationId", "=", id)
    .execute();
}

export async function readNotification(id: string) {
  const notificationRead = await SQL.DB.updateTable("notifications")
    .set({ isRead: true })
    .where("notificationId", "=", id)
    .execute();
  // console.log(notificationRead);
}
