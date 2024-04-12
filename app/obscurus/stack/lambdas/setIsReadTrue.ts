import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages } from "../database/src/messages";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const eventData = JSON.parse(event.body);
  const isRead = await Messages.setIsReadTrue(
    eventData.roomId,
    eventData.senderEmail
  );
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(isRead),
  };
};
