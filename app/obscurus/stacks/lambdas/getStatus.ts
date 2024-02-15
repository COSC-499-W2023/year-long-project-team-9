import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../core/src/submissions";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  console.log("Event", event)
  const submissionId = event.submissionId;
  console.log("Submission ID", submissionId)
  const res = await Submissions.getStatus(submissionId)
  console.log("Response", res)
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: res}),
  };
};