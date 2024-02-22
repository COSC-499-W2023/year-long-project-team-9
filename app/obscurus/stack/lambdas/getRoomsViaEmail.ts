import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getRoomsViaEmail } from "@obscurus/database/src/getRoomsViaEmail";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  // the data passed in the wrapper function
  console.log(event);
  if (event.queryStringParameters != undefined) {
    const rooms = await getRoomsViaEmail(event.queryStringParameters.email);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rooms),
    };
  } else {
    return { statusCode: 400 };
  }
};
