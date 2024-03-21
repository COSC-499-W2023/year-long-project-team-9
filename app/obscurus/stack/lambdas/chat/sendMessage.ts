import { ApiGatewayManagementApi } from "aws-sdk";
import { APIGatewayProxyHandler, APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";
import { Connections as ConnectionsType } from "@obscurus/database/src/sql.generated";

export const main: APIGatewayProxyHandlerV2 = async (event:any) => {
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
          const delConnection = await Connections.remove(connectionId);
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
