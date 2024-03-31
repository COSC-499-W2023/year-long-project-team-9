import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { sendEmailTextBlockViaNoReply } from "@obscurus/ses/src/sendEmailTextBlockViaNoReply";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  console.log("Received event:", event);
  const email = event.email;
  const subject = event.subject;
  const text = event.text;
  const res = await sendEmailTextBlockViaNoReply(email, subject, text);
  console.log("Email sent to", email, "successfully!");
  return { statusCode: 200, body: `Email sent to ${email} successfully!` };
};
