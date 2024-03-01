import { ApiGatewayManagementApi } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";
import { Connections as ConnectionsType } from "@obscurus/database/src/sql.generated";

export const main: APIGatewayProxyHandler = async (event) => {
  if (event.body != null) {
    // Save applicable data
    const messageData = JSON.parse(event.body).data;
    const { stage, domainName } = event.requestContext;

    // Get all connections
    const connectionsList = await Connections.list();

    // Get API Gateway
    const apiG = new ApiGatewayManagementApi({
      endpoint: `${domainName}/${stage}`,
    });

    // Helper method
    const postToConnection = async function ({
      connectionId,
    }: {
      connectionId: string;
    }) {
      try {
        await apiG
          .postToConnection({ ConnectionId: connectionId, Data: messageData })
          .promise();
      } catch (e) {
        if ((e as AWS.AWSError).statusCode === 410) {
          // Remove stale connections
          const staleConnection: ConnectionsType = {
            connectionId: connectionId,
          };
          const delConnection = await Connections.remove(staleConnection);
        }
      }
    };

    // Iterate through all connections
    await Promise.all(connectionsList.map(postToConnection));

    // Return status code
    return { statusCode: 200, body: "Message sent" };
  }
  // Return status code
  return { statusCode: 500, body: "Error, undefined" };
};
