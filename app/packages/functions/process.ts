import { APIGatewayProxyHandlerV2 } from "aws-lambda";
import { JobContainerProps } from "sst/constructs";
import { Job } from "sst/node/job";



export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  

    console.log(event)
    
    const { jobId } = await Job.SteveJobs.run ({
      payload: {
        requestId: event.requestId,
      },
    });
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: "Uploaded successfully",
    };
  };