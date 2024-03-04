import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages } from "../database/src/messages";
import type { Messages as MessagesType } from "../database/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const newMessage: MessagesType = JSON.parse(event.body);
  const messages = await Messages.insert(newMessage);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messages),
  };
};
