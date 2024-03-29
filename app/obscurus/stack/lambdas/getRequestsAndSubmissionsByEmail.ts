import { getRequestsAndSubmissionsByEmail } from "@obscurus/database/src/requests";
import { Submissions } from "@obscurus/database/src/sql.generated";
import { EnrichedSubmissions } from "@obscurus/database/src/types/enrichedSubmission";
import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (event: any) => {
  const email = event.body;
  const { submissionsByUserWithRequestsAndUsers } =
    await getRequestsAndSubmissionsByEmail(email);

  const enrichedSubmissions: EnrichedSubmissions[] =
    submissionsByUserWithRequestsAndUsers.map((item) => ({
      submissionId: item.submissionId,
      requesteeEmail: item.requesteeEmail,
      status: item.status,
      title: item.submissionTitle,
      grouping: item.submissionGrouping,
      isRead: item.isRead,
      submittedDate: item.submittedDate,
      requestId: item.requestId,
      requestDetails: {
        requestId: item.requestId,
        requestTitle: item.requestTitle,
        requesterEmail: item.requesterEmail,
        description: item.description,
        blurred: item.blurred,
        grouping: item.grouping,
        creationDate: item.creationDate,
        dueDate: item.dueDate,
      },
      requestee: {
        givenName: item.requesteeGivenName,
        familyName: item.requesteeFamilyName,
        profileImage: item.requesteeProfileImage,
      },
      requester: {
        givenName: item.requesterGivenName,
        familyName: item.requesterFamilyName,
        profileImage: item.requesterProfileImage,
      },
    }));

  return {
    statusCode: 200,
    body: JSON.stringify({ submissions: enrichedSubmissions }),
  };
};
