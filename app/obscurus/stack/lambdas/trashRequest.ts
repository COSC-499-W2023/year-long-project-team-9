import { trashRequest } from "@obscurus/database/src/requests";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (!event.body) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }
  const body = JSON.parse(event.body);
  if (!body.id) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  const notification = await trashRequest(body.id);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify("success"),
  };
};
