import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../database/src/submissions";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const res = await Submissions.setStatus(event.status, event.submissionId)
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Updated submission status successfully!",
  };
}