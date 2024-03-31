import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../database/src/submissions";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const data = JSON.parse(event.body);
  await Submissions.setStatus(data.status, data.submissionId);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Updated submission status successfully!",
  };
};
