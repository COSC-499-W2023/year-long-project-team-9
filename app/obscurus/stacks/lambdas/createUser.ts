import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Users} from "../core/src/users";
import type {Users as UsersType} from "../core/src/sql.generated"

export const handler: APIGatewayProxyHandlerV2 = async () => {

const newUser:UsersType = {
    sub: '1111111', 
    email: 'johndoe@example.com', 
    given_name: 'John',
    family_name: 'Doe', 
    timezone: 'America/New_York', 
    language: 'en-US',
    is_logged_in_with_social_identity_provider: false, 
    is_admin: false,
    profile_image: 'https://example.com/profile.jpg', 
};
  const users = await Users.addUser(newUser);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(users),
  };
};