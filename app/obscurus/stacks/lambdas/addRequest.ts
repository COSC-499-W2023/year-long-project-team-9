import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../core/src/requests";

export const handler: APIGatewayProxyHandlerV2 = async (
  data: string,
  sub: string
) => {
  const addRequest = await Requests.addRequest(data, sub);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(addRequest),
  };
};
