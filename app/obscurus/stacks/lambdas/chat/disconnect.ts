// import { DynamoDB } from "aws-sdk";
// import { APIGatewayProxyHandler } from "aws-lambda";
// import { Table } from "sst/node/table";

// const dynamoDb = new DynamoDB.DocumentClient();

// export const main: APIGatewayProxyHandler = async (event) => {
//   const params = {
//     TableName: Table.Connections.tableName,
//     Key: {
//       id: event.requestContext.connectionId,
//     },
//   };

//   await dynamoDb.delete(params).promise();

//   return { statusCode: 200, body: "Disconnected" };
// };

import { APIGatewayProxyHandler } from "aws-lambda";
import { Connections } from "../../core/src/connections";
import { Connections as ConnectionsType } from "../../core/src/sql.generated";

export const main: APIGatewayProxyHandler = async (event) => {
  if (event.requestContext != undefined) {
    if (event.requestContext.connectionId != undefined) {
      const newConnection: ConnectionsType = {
        connection_id: event.requestContext.connectionId,
      };
      const connection = await Connections.removeConnection(newConnection);
      return { statusCode: 200, body: "Connected" };
    } else {
      return { statusCode: 500, body: "Error, undefined" };
    }
  } else {
    return { statusCode: 500, body: "Error, undefined" };
  }
};
