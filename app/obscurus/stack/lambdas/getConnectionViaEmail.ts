import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getConnectionViaEmail } from "../database/src/connections";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.queryStringParameters != undefined) {
    const connection: { connectionId: string } | undefined =
      await getConnectionViaEmail(event.queryStringParameters.email);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(connection),
    };
  } else {
    return { statusCode: 400 };
  }
};
