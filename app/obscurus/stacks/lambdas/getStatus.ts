import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../core/src/requests";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const reqs = await Requests.getStatus("test3.mp4");

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(reqs),
  };
};