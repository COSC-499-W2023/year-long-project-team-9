import { ApiGatewayManagementApi } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";

export const main: APIGatewayProxyHandlerV2 = async (event: any) => {
  if (event.body != null) {
    const messageData = JSON.parse(event.body).data;
    const { stage, domainName } = event.requestContext;
    const connectionsList = await Connections.list();
    const apiG = new ApiGatewayManagementApi({
      endpoint: `${domainName}/${stage}`,
    });
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
          const delConnection = await Connections.remove(connectionId);
        }
      }
    };
    await Promise.all(connectionsList.map(postToConnection));
    return { statusCode: 200, body: "Message sent" };
  }
  return { statusCode: 500, body: "Error, undefined" };
};
