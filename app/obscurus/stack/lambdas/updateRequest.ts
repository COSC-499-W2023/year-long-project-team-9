import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Submissions } from "../database/src/submissions";
import { Requests } from "@obscurus/database/src/requests";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const data = JSON.parse(event.body);
  console.log("Updating submission status:", data);
  await Requests.updateGrouping(data.requestId, data.grouping);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Updated submission status successfully!",
  };
};
