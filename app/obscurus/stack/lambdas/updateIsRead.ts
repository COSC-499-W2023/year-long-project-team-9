import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages, isReadUpdateType } from "../database/src/messages";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const isReadUpdate: isReadUpdateType = JSON.parse(event.body);
  const isReadRes = await Messages.updateIsRead(isReadUpdate);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(isReadRes),
  };
};
