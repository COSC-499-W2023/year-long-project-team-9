import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages } from "../database/src/messages";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const eventBody = event.body;
  const res = await Messages.setIsRead(eventBody.isRead, eventBody.messageId);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "updateIsRead successful.",
  };
};
