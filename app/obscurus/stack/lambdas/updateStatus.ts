import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../database/src/submissions";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  console.log("event", event)
  const data = JSON.parse(event.body);
  console.log("data", data)
  console.log("submissionId", data.submissionId)
  const res = await Submissions.setStatus(data.status, data.submissionId)
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Updated submission status successfully!",
  };
}
