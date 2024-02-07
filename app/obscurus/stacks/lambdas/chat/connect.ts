import { APIGatewayProxyHandler } from "aws-lambda";

export const main: APIGatewayProxyHandler = async (event) => {
  const query = {
    text: "INSERT INTO rooms(connection_id,participant1_email,participant1_sub,participant2_email,particpant2_sub) VALUES($1,doe@gmail.com,sub1,mike@gmail.com,sub2)",
    values: [event.requestContext.connectionId],
  };

  return { statusCode: 200, body: "Connected" };
};
