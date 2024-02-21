import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Users } from "../core/src/users";
import type { Users as UsersType } from "../core/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const newUser: UsersType = {
    email: "fffffffffff@example.com",
    givenName: "ffffff",
    familyName: "Dofffe",
    isLoggedInWithSocialIdentityProvider: false,
    isAdmin: false,
    profileImage: "https://example.com/profile.jpg",
    preference: "n",
    connectionId: null,
  };

  const users = await Users.addUser(newUser);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(users),
  };
};
