import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getSubmissionsViaEmail } from "../core/src/getSubmissionsViaEmail";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  // the data passed in the wrapper function
  const submissions = await getSubmissionsViaEmail(event.body);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submissions),
  };
};
