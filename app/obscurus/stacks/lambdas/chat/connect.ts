import { APIGatewayProxyHandler } from "aws-lambda";
import { Connections } from "../../core/src/connections";
import { Connections as ConnectionsType } from "../../core/src/sql.generated";

export const main: APIGatewayProxyHandler = async (event) => {
  if (event.requestContext != undefined) {
    if (event.requestContext.connectionId != undefined) {
      const newConnection: ConnectionsType = {
        connectionId: event.requestContext.connectionId,
      };
      const connection = await Connections.addConnection(newConnection);
      return { statusCode: 200, body: "Connected" };
    } else {
      return { statusCode: 500, body: "Error, undefined" };
    }
  } else {
    return { statusCode: 500, body: "Error, undefined" };
  }
};
