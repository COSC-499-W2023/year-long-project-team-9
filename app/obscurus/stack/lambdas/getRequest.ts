import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import {Requests} from "../database/src/requests"

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const res = await Requests.get(event.requestId)
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Request retrieved successfully!",
  };
}