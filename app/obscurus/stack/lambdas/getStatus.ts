import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../database/src/submissions";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const body = event.body;
  const submissionId = JSON.parse(body).submissionId;
  const res = await Submissions.getStatus(submissionId)
  if (!res) {
    return {
      statusCode: 404,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Not Found" }),
    };
  }
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data: res}),
  };
};
