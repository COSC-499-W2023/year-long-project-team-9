import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { JobContainerProps } from "sst/constructs";
import { Job } from "sst/node/job";
import { Api } from "sst/node/api";
import updateStatus from "@/app/functions/updateStatus";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  try {


    updateStatus("PROCESSING", event.submissionId);
  } catch {
    console.error("Error running the job");
    updateStatus("FAILED", event.submissionId);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: `Error running the job`,
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: "Uploaded successfully",
  };
};
