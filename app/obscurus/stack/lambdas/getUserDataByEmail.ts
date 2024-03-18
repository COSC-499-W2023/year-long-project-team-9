import { getRequestsViaEmail } from "@obscurus/database/src/request";
import { Users, getUserDataByEmail } from "@obscurus/database/src/users";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  console.log("event", event);
  const data = event.body;
  console.log("email", data);
  const [requests, submissions] = await getUserDataByEmail(data || "");
  return {
    statusCode: 200,
    body: JSON.stringify({ requests, submissions }),
  };
};
