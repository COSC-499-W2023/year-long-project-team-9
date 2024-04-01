import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../database/src/submissions";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const data = JSON.parse(event.body);
  console.log("Setting submitted date:", data);
  await Submissions.setSubmittedDate(data.submissionId);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Submitted date set successfully!",
  };
};
