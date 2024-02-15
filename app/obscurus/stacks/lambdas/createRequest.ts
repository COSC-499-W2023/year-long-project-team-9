import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../core/src/requests";
import { Requests as r } from "stacks/core/src/sql.generated";
import { GroupingState } from "@tanstack/react-table";

export const handler: APIGatewayProxyHandlerV2 = async () => {

const newRequest: r = {
  requestId: "11111",
  requestTitle: "hello",
  requesterEmail: "x@gmail.com",
  isStarred: false,
  grouping: null,
  description: "h",
  blurred: false,
  creationDate: new Date(),
  dueDate: new Date(),
};
  const requests = await Requests.insert(newRequest);



  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requests),
  };
};