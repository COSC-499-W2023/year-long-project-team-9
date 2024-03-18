import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Users, getUserNames } from "../database/src/users";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const userNames = await getUserNames();
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userNames),
  };
};
