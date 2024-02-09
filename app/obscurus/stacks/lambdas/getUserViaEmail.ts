import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getUserViaEmail } from "../core/src/getUserViaEmail";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  // the data passed in the wrapper function
  const user = await getUserViaEmail(event.body);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
};
