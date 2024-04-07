import { ApiGatewayManagementApi } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";
import { Submissions } from "@obscurus/database/src/submissions";
import { Requests } from "@obscurus/database/src/requests";

export const main: APIGatewayProxyHandlerV2 = async (event: any) => {
  if (!event.body) {
    return { statusCode: 400, body: "Bad Request: Missing body" };
  }

  console.log("Received event:", event);
  let messageData: any;
  try {
    const parsedBody = JSON.parse(event.body).data;
    console.log("Parsed body:", parsedBody);
    const requestId = parsedBody.requestId;
    const grouping = parsedBody.status;

    console.log("Updating submission status:", requestId, grouping);

    if (!requestId || !grouping) {
      return { statusCode: 400, body: "Bad Request: Missing submissionId or newStatus" };
    }

    await Requests.updateGrouping(grouping, requestId);

    messageData = JSON.stringify({
      action: "updateRequestGrouping",
      data: { requestId, grouping }
    });

    console.log("Message data:", messageData);
  } catch (error) {
    console.error("Error parsing event body:", error);
    return { statusCode: 400, body: "Bad Request: Invalid JSON format" };
  }


  const { stage, domainName } = event.requestContext;

  const endpoint = `https://${domainName}/${stage}`;
  const apiG = new ApiGatewayManagementApi({ endpoint });

  const connectionsList = await Connections.list();

  const postToConnection = async (connectionId: string) => {
    try {
      await apiG.postToConnection({ ConnectionId: connectionId, Data: messageData }).promise();
    } catch (e) {
      if ((e as AWS.AWSError).statusCode === 410) {
        await Connections.remove(connectionId);
      } else {
        console.error(`Failed to post to connection ${connectionId}:`, e);
      }
    }
  };

  await Promise.all(connectionsList.map(({ connectionId }) => postToConnection(connectionId)));

  return { statusCode: 200, body: "Message sent" };
};
