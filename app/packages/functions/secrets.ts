import { Config } from "sst/node/config";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { SFNClient, StartExecutionCommand } from "@aws-sdk/client-sfn";

export const handler: APIGatewayProxyHandlerV2 = async (event:any) => {
  const userPoolId = Config.USER_POOL_ID_KEY;
  const userPoolWebClientId = Config.USER_POOL_ID_KEY;

  return {
    statusCode: 200,
    body: JSON.stringify({userPoolId, userPoolWebClientId})
  };
};
