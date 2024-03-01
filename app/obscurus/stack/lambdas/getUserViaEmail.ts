import { getUserViaEmail } from "@obscurus/database/src/getUserViaEmail";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.body === undefined) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }
  const body = JSON.parse(event.body);
  if (body.email === undefined) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
    };
  }

  const user = await getUserViaEmail(body.email);
  console.log(user);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
};
