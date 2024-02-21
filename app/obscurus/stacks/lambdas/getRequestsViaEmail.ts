import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { selectRequestsUsingEmail } from "stacks/core/src/requests";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  // returning if event is invalid
  if (event === undefined || event.body === undefined) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify("{}"),
    };
  }
  // Getting email from event
  const email = JSON.parse(event.body)["email"];
  console.log(email);
  const data = await selectRequestsUsingEmail(email);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};
