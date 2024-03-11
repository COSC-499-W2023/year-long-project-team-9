import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { JobContainerProps } from "sst/constructs";
import { Job } from "sst/node/job";
import { Api } from "sst/node/api";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const updateStatus = async (status: string, submissionId: string) => {
    try {
      const response = await fetch(Api.Api.url + "/updateStatus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          submissionId: submissionId,
          status: status,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Server responded with ${response.status}: ${response.statusText}`
        );
      }

      const responseData = await response.json();
      console.log("Response Data", responseData);
      return responseData;
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  try {
    const { jobId } = await Job.SteveJobs.run({
      payload: {
        submissionId: event.submissionId,
        fileExt: event.fileExt,
      },
    });

    updateStatus("PROCESSING", event.submissionId)


  } catch {
    console.error("Error running the job");
    updateStatus("FAILED", event.submissionId)
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
