import { Requests } from "@obscurus/database/src/requests";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const main: APIGatewayProxyHandlerV2 = async (event: any) => {
  const data = JSON.parse(event.body).data;
  const res = Requests.deleteRequest(data.requestId);
  return { statusCode: 200, body: "Request deleted!" };
};
