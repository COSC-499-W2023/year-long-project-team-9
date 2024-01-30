import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../core/src/requests";
import { Submissions } from "stacks/core/src/submissions";
import type { Submissions as SubmissionsType } from "stacks/core/src/sql.generated";
import { ApiHandler } from "sst/node/api";

export const handler = ApiHandler(async (evt) => {
  const submissions = await Submissions.list();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submissions),
  };
});