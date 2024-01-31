import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../core/src/requests";
import { Requests as r } from "stacks/core/src/sql.generated";

export const handler: APIGatewayProxyHandlerV2 = async () => {

const newRequest: r = {
  request_id: '22222',
  description: 'Some description',
  request_title: 'Some title',
  requester_sub: 'sub',
  video_processing: false,
  due_date: new Date(),
  video_language: 'English',
  creation_date: new Date(),
  read: false
};
  const requests = await Requests.insert(newRequest);



  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requests),
  };
};