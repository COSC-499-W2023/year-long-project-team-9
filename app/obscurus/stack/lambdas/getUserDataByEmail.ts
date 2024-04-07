import { getRequestsViaEmail } from "@obscurus/database/src/requests";
import { Users, getUserDataByEmail } from "@obscurus/database/src/users";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  console.log("event", event);
  const email = event.body;
  console.log("email", email);
  const [requests, submissions] = await getUserDataByEmail(email || "");
  return {
    statusCode: 200,
    body: JSON.stringify({ requests, submissions }),
  };
};
