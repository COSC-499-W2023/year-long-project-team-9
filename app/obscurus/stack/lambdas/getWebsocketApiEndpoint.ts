import { Config } from "sst/node/config";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const websocketApiEndpoint = Config.WEBSOCKET_API_ENDPOINT;

  return {
    statusCode: 200,
    body: JSON.stringify({ websocketApiEndpoint }),
  };
};
