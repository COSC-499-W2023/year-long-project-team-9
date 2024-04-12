import { ApiGatewayManagementApi } from "aws-sdk";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";
import { Notifications } from "@obscurus/database/src/notifications";
import { randomUUID } from "crypto";

export const main: APIGatewayProxyHandlerV2 = async (event: any) => {
  if (!event.body) {
    return { statusCode: 400, body: "Bad Request: Missing body" };
  }

  console.log("Received event for new notification:", event);
  let notificationData: any;
  try {
    const parsedBody = JSON.parse(event.body).data;
    console.log("Parsed body for notification:", parsedBody);
    const referenceId = parsedBody.notification.referenceId;
    const email = parsedBody.notification.email;
    const type = parsedBody.notification.type;
    const content = parsedBody.notification.content;

    console.log("Creating new notification:", referenceId, email, type, content);

    if (!referenceId) {
      return { statusCode: 400, body: "Bad Request: Missing referenceId" };
    }

    const notificationId = randomUUID();

    const notificationDetails = {
      notificationId,
      userEmail: email,
      type: type,
      creationDate: new Date(),
      content: content,
      isRead: false,
      isTrashed: false,
      referenceId,
    };

    Notifications.insert(notificationDetails);


    console.log("New notification details:", notificationDetails);


    notificationData = JSON.stringify({
      action: "newNotification",
      data: {
        notification: notificationDetails,
      }
    });

    console.log("Notification data to be sent:", notificationData);
  } catch (error) {
    console.error("Error handling new notification event:", error);
    return { statusCode: 400, body: "Bad Request: Invalid JSON format or data" };
  }

  const { stage, domainName } = event.requestContext;
  const endpoint = `https://${domainName}/${stage}`;
  const apiG = new ApiGatewayManagementApi({ endpoint });

  const connectionsList = await Connections.list();

  const postToConnection = async (connectionId: string) => {
    try {
      await apiG.postToConnection({ ConnectionId: connectionId, Data: notificationData }).promise();
    } catch (e) {
      if ((e as AWS.AWSError).statusCode === 410) {
        console.log(`Removing stale connection: ${connectionId}`);
        await Connections.remove(connectionId);
      } else {
        console.error(`Failed to post new notification to connection ${connectionId}:`, e);
      }
    }
  };

  await Promise.all(connectionsList.map(({ connectionId }) => postToConnection(connectionId)));

  return { statusCode: 200, body: "New notification message sent" };
};
