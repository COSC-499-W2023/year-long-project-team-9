import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { JobContainerProps } from "sst/constructs";
import { Job } from "sst/node/job";
import { Api } from "sst/node/api";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  
  
  try {
    const { jobId } = await Job.SteveJobs.run({
      payload: {
        requestId: event.requestId,
        submissionId: event.submissionId,
      },
    });

    const updateStatus = async (status: string) => {
      try {
        const response = await fetch(Api.Api.url + "/updateStatus", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jobId: jobId,
            requestId: event.requestId,
            submissionId: event.submissionId,
            status: status
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Server responded with ${response.status}: ${response.statusText}`
          );
        }

        const responseData = await response.json();
        console.log(responseData);
        return responseData
        
      } catch (error) {
        console.error("Error updating status:", error);
      }
    };


    updateStatus("PROCESSING")

    
  } catch {
    console.error("Error running the job");
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
