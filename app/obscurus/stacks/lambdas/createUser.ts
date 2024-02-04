import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Users} from "../core/src/users";
import type {Users as UsersType} from "../core/src/sql.generated"

export const handler: APIGatewayProxyHandlerV2 = async () => {

const newUser:UsersType = {
    sub: 'hhhhhhh', 
    email: 'hhhhhh@example.com', 
    given_name: 'hhhh',
    family_name: 'hhhh', 
    timezone: 'America/Los_Angeles', 
    language: 'en-US',
    is_logged_in_with_social_identity_provider: false, 
    is_admin: false,
    profile_image: 'https://example.com/profile.png', 
};
  const users = await Users.addUser(newUser);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(users),
  };
};