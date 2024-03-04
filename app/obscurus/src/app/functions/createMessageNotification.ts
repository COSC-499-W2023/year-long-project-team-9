"use server";
import { Api } from "sst/node/api";
import { Notifications as NotificationsType } from "../../../stack/database/src/sql.generated";

const createMessageNotification = async (
  newNotification: NotificationsType
) => {
  const notificationListRes: NotificationsType[] = await fetch(
    `${Api.Api.url}/listNotifications`
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  const notificationListMatch = notificationListRes.filter(
    (notification) =>
      notification.userEmail === newNotification.userEmail &&
      notification.type === newNotification.type &&
      notification.content === newNotification.content
  );
  if (notificationListMatch.length > 0) {
    const res = await fetch(Api.Api.url + "/updateNotificationDate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotification),
    });
    if (res.ok) {
      return res.json();
    } else {
      return "Failed to update";
    }
  } else {
    console.log("HERE");
    const res = await fetch(Api.Api.url + "/createNotification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNotification),
    });
    if (res.ok) {
      return res.json();
    } else {
      return "Failed to insert";
    }
  }
};

export default createMessageNotification;
