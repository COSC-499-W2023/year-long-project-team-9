import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Users } from "../database/src/users";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  // const users = await Users.list();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
  };
};