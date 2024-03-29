import { getRequestsAndSubmissionsByEmail } from "@obscurus/database/src/requests";
import { Submissions } from "@obscurus/database/src/sql.generated";
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const email = event.body;
  const { submissionsByUserWithRequests } =
    await getRequestsAndSubmissionsByEmail(email);



  const enrichedSubmissions: EnrichedSubmissions[] = submissionsByUserWithRequests.map(
    (submission) => {
      const {
        submissionId,
        submissionTitle,
        submissionGrouping,
        ...requestDetails
      } = submission;
      return {
        submissionId,
        title: submissionTitle,
        grouping: submissionGrouping,
        requesteeEmail: submission.requesteeEmail,
        status: submission.status,
        isRead: submission.isRead,
        submittedDate: submission.submittedDate,
        requestId: submission.requestId,
        requestDetails: {
          ...requestDetails,
        },
      };
    }
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ submissions: enrichedSubmissions }),
  };
};
