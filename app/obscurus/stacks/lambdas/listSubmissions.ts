import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../core/src/submissions";
import type { Submissions as SubmissionsType } from "stacks/core/src/sql.generated";
import { Task } from "@/app/tasks/data/schema";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const submissions:Task[] = await Submissions.list();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submissions),
  };
}