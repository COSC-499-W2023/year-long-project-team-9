// import { APIGatewayProxyHandlerV2 } from "aws-lambda";
// import { getRequestsViaEmail } from "../core/src/getRequestsViaEmail";

// export const handler: APIGatewayProxyHandlerV2 = async (event) => {
//   // the data passed in the wrapper function
//   const requests = await getRequestsViaEmail(event.body);

//   console.log(requests);

//   return {
//     statusCode: 200,
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(requests),
//   };
// };
