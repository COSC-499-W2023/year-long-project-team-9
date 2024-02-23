import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages } from "../database/src/messages";
import { Messages as MessagesType } from "../database/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const messages: MessagesType[] = await Messages.list();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(messages),
  };
};
