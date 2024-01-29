import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../core/src/requests";

export const handler: APIGatewayProxyHandlerV2 = async (data, sub) => {
  const dataString = JSON.stringify(data);
  const dataSub = JSON.stringify(sub);
  const res = await Requests.addRequest(dataString, dataSub);

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(res),
  };
};
