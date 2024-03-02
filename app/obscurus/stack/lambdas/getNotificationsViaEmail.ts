import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getNotificationsViaEmail } from "../database/src/notifications";
import { Notifications as NotificationsType } from "../database/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.queryStringParameters != undefined) {
    const notifications: NotificationsType[] = await getNotificationsViaEmail(
      event.queryStringParameters.email
    );
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notifications),
    };
  } else {
    return { statusCode: 400 };
  }
};
