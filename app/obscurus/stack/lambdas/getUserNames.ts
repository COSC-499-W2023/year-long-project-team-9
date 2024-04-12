import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Users, getUserNames } from "../database/src/users";

type UserNames = {
  email: string;
  givenName: string;
  familyName: string;
};

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const userNames: UserNames[] = await getUserNames();
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userNames),
  };
};
