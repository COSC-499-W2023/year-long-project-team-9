import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../database/src/submissions";
import type { Submissions as SubmissionsType } from "stack/database/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const submissions = await Submissions.list();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submissions),
  };
}