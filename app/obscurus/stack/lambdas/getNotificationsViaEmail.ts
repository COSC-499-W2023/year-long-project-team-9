import { getNotificationsViaEmail } from "@obscurus/database/src/notification";
import { getRequestsViaEmail } from "@obscurus/database/src/request";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }
  const body = JSON.parse(event.body);
  if (!body.email) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  const notifications = await getNotificationsViaEmail(body.email);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notifications }),
  };
};
