import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";

export const main: APIGatewayProxyHandlerV2 = async (event: any) => {
  if (event.requestContext != undefined) {
    if (event.requestContext.connectionId != undefined) {
      const connectionId: string = event.requestContext.connectionId;
      const connection = await Connections.remove(connectionId);
      return { statusCode: 200, body: "Disconnected" };
    } else {
      return { statusCode: 500, body: "Error, undefined" };
    }
  } else {
    return { statusCode: 500, body: "Error, undefined" };
  }
};
