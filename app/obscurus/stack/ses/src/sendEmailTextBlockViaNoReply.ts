import * as AWS from "aws-sdk";
export async function sendEmailTextBlockViaNoReply(
  email: string,
  subject: string,
  textblock: string
) {
  const templateData = {
    customsubject: subject,
    textblock: "textblock",
  };
  const params = {
    Source: "no-reply@obscurus.me",
    Destination: {
      ToAddresses: [email],
    },
    Template: "text-block-email",
    TemplateData: JSON.stringify(templateData),
  };
  const ses = new AWS.SES({ apiVersion: "latest" });
  ses
    .sendTemplatedEmail(params)
    .promise()
    .then((data) => console.log(data))
    .catch((err) => console.log(err, err.stack));
}
