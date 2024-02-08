import { ApiGatewayManagementApi } from "aws-sdk";
import { APIGatewayProxyHandler } from "aws-lambda";
import { Connections } from "../../core/src/connections";
import { Connections as ConnectionsType } from "../../core/src/sql.generated";

export const main: APIGatewayProxyHandler = async (event) => {
  if (event.body != null) {
    // Save applicable data
    const messageData = JSON.parse(event.body).data;
    const { stage, domainName } = event.requestContext;

    // Get all connections
    const connectionsList = await Connections.list();
    console.log(connectionsList);

    // Get API Gateway
    const apiG = new ApiGatewayManagementApi({
      endpoint: `${domainName}/${stage}`,
    });

    // Helper method
    const postToConnection = async function ({ connection_id }) {
      try {
        await apiG
          .postToConnection({ ConnectionId: connection_id, Data: messageData })
          .promise();
        console.log(connection_id);
      } catch (e) {
        if (e.statusCode === 410) {
          // Remove stale connections
          const staleConnection: ConnectionsType = {
            connection_id: connection_id,
          };
          const delConnection = await Connections.removeConnection(
            staleConnection
          );
        }
      }
    };

    // Iterate through all connections
    await Promise.all(connectionsList.map(postToConnection));

    // Return status code
    return { statusCode: 200, body: "Message sent" };
  }
  console.log("Didn't work");
  // Return status code
  return { statusCode: 500, body: "Error, undefined" };
};
