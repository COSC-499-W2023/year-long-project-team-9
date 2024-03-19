"use server";
import notificationsRead from "@/app/functions/notificationsRead";
import { SQL } from "./sql";

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
  const deleteNotification = await SQL.DB.deleteFrom("notifications").where(
    "notificationId",
    "=",
    id
  );
  // console.log(deleteNotification);
}

export async function notificationRead(email: string) {
  const notificationRead = await SQL.DB.updateTable("notifications")
    .set({ isRead: true })
    .where("userEmail", "=", email);
  // console.log(notificationRead);
}
