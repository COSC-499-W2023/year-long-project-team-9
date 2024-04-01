import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Notifications } from "../database/src/notifications";
import type { Notifications as NotificationsType } from "../database/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const newNotification: NotificationsType = JSON.parse(event.body);
  const notifications = Notifications.insert(newNotification);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notifications),
  };
};
