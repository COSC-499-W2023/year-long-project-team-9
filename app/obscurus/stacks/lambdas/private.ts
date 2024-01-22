import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const main: APIGatewayProxyHandlerV2 = async (event) => {
  return {
    statusCode: 200,
    //werid bug
    // body: `Hello ${event.requestContext.authorizer.iam.cognitoIdentity.identityId}!`,
    body: ""
  };
};
