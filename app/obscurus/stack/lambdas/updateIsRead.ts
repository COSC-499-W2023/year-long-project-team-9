import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Messages } from "../database/src/messages";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const eventBody = event.body;
  const res = await Messages.setIsRead(eventBody.isRead, eventBody.messageId);
  try {
    const numRowsUpdated = Number(res.numUpdatedRows);
    if (numRowsUpdated === 1) {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: `${Number(res.numUpdatedRows)} row(s) updated.`,
      };
    }
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: "Improper amount of rows updated",
    };
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: "Improper amount of rows updated",
    };
  }
};
