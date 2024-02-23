import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { getRoomsViaEmail } from "../database/src/rooms";
import { Rooms as RoomsType } from "../database/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  if (event.queryStringParameters != undefined) {
    const rooms: RoomsType[] = await getRoomsViaEmail(
      event.queryStringParameters.email
    );
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rooms),
    };
  } else {
    return { statusCode: 400 };
  }
};
