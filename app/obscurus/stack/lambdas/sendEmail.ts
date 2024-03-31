import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { sendEmailTextBlockViaNoReply } from "@obscurus/ses/src/sendEmailTextBlockViaNoReply";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const data = JSON.parse(event.body).data;
  const email = data.email;
  const subject = data.subject;
  const text = data.text;
  await sendEmailTextBlockViaNoReply(email, subject, text);
  return { statusCode: 200, body: `Email sent to ${email} successfully!` };
};