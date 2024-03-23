import { ApiGatewayManagementApi } from "aws-sdk";
import { APIGatewayProxyHandler, APIGatewayProxyHandlerV2 } from "aws-lambda";
import { Connections } from "@obscurus/database/src/connections";
import { Connections as ConnectionsType } from "@obscurus/database/src/sql.generated";
import { Submissions } from "@obscurus/database/src/submissions";

export const main: APIGatewayProxyHandlerV2 = async (event:any) => {
    const data = JSON.parse(event.body).data;
    const res = await Submissions.setStatus(data.status, data.submissionId);
    return { statusCode: 200, body: "Message sent" };
  }
