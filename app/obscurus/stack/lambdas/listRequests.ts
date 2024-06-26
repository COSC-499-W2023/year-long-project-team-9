import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../database/src/requests";
import {Requests as RequestsType} from "../database/src/sql.generated"

export const handler: APIGatewayProxyHandlerV2 = async () => {
  const requests:RequestsType[] = await Requests.list();

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requests),
  };
};