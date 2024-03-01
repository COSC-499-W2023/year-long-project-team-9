import { APIGatewayProxyHandler } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";
import { Connections as ConnectionsType } from "@obscurus/database/src/sql.generated";
import { getEmail } from "@/app/functions/authenticationMethods";

export const main: APIGatewayProxyHandler = async (event) => {
  if (event.requestContext != undefined) {
    if (event.requestContext.connectionId != undefined) {
      const newConnectionId = event.requestContext.connectionId;
      const newConnectionEmail = (await getEmail()).toString();
      const newConnection: ConnectionsType = {
        connectionId: newConnectionId,
        email: newConnectionEmail,
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
