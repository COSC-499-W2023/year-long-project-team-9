import { getUserViaEmail } from "@obscurus/database/src/getUserViaEmail";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const email = event?.body as string;
  const user = await getUserViaEmail(event?.body as string);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({user}),
  };
};
