import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Users } from "../database/src/users";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
    const data = JSON.parse(event.body);
    console.log("Updating user information:", data);
    // await Users.setStatus(data.status, data.submissionId);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: "Updated user information successfully!",
    };
  };