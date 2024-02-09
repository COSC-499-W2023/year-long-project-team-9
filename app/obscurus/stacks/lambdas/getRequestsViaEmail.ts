import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../core/src/submissions";
import type { Submissions as SubmissionsType } from "stacks/core/src/sql.generated";
import { getRequestsViaEmail } from "../core/src/getRequestsViaEmail";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  // the data passed in the wrapper function
  const requests = await getRequestsViaEmail(event);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requests),
  };
};
