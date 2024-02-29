import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages } from "../database/src/messages";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const messageId: string = event.body;
  const isReadRes = await Messages.setIsReadTrue(messageId);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(isReadRes),
  };
};
