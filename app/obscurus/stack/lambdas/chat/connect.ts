import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";
import { Connections as ConnectionsType } from "@obscurus/database/src/sql.generated";

export const main: APIGatewayProxyHandlerV2 = async (event: any) => {
  if (event.requestContext != undefined) {
    if (event.requestContext.connectionId != undefined) {
      const newConnection: ConnectionsType = {
        connectionId: event.requestContext.connectionId,
      };
      const connection = await Connections.insert(newConnection);
      return { statusCode: 200, body: "Connected" };
    } else {
      return { statusCode: 500, body: "Error, undefined" };
    }
  } else {
    return { statusCode: 500, body: "Error, undefined" };
  }
};
