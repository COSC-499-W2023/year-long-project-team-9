import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Requests } from "../core/src/requests";

export const handler: APIGatewayProxyHandlerV2 = async () => {

const newRequest = {
    
        request_id: 22,
        description: 'Some description',
        request_title: 'Some title',
        requester_sub: 'sub',
        video_processing: false,
        due_date: new Date(), 
        video_language: 'English',
        creation_date: new Date(), 
    };
  const requests = await Requests.insert(newRequest);



  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requests),
  };
};