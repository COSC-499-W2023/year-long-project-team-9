import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Notifications } from "../database/src/notifications";
import { Notifications as NotificationsType } from "../database/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const notifications: NotificationsType[] = await Notifications.list();
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(notifications),
  };
};
