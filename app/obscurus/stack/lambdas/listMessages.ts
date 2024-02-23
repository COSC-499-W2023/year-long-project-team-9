import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages } from "../core/src/messages";
import { Messages as MessagesType } from "../core/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const messages: MessagesType[] = await Messages.list();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messages),
  };
};
