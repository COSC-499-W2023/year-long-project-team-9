export * as Requests from "./requests";

import { formSchema } from "@/components/CreateRequest";
import { SQL } from "./sql";
import { Requests } from "./sql.generated";
import { GroupingState } from "@tanstack/react-table";

export function list() {
  return SQL.DB.selectFrom("requests").selectAll().execute();
}
export function insert(request: Requests) {
  return SQL.DB.insertInto("requests")
    .values({
      requestId: request.requestId,
      requestTitle: request.requestTitle,
      requesterEmail: request.requesterEmail,
      grouping: request.grouping,
      description: request.description,
      blurred: request.blurred,
      creationDate: request.creationDate,
      dueDate: request.dueDate,
    })
    .execute();
}

export function get(request: Requests) {
  return SQL.DB.selectFrom("requests")
    .where("requestId", "=", request.requestId)
    .execute();
}

// export async function getRequestsAndSubmissionsByEmail(email: string) {
//   const submissionsByUserWithRequests = await SQL.DB.selectFrom("submissions")
//     .innerJoin("requests", "requests.requestId", "submissions.requestId")
//     .select([
//       "submissions.submissionId",
//       "submissions.requesteeEmail",
//       "submissions.status",
//       "submissions.title as submissionTitle",
//       "submissions.grouping as submissionGrouping",
//       "submissions.isRead",
//       "submissions.submittedDate",
//       "submissions.requestId",
//       "requests.requestId",
//       "requests.requestTitle",
//       "requests.requesterEmail",
//       "requests.grouping",
//       "requests.description",
//       "requests.blurred",
//       "requests.creationDate",
//       "requests.dueDate",
//     ])
//     .where("submissions.requesteeEmail", "=", email)
//     .execute();

//   return {
//     submissionsByUserWithRequests,
//   };
// }

export async function getRequestsAndSubmissionsByEmail(email: string) {
  const submissionsByUserWithRequestsAndUsers = await SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "requests.requestId", "submissions.requestId")
    .innerJoin("users as requestee", "requestee.email", "submissions.requesteeEmail")
    .innerJoin("users as requester", "requester.email", "requests.requesterEmail")
    .select([
      // Submissions data
      "submissions.submissionId",
      "submissions.requesteeEmail",
      "submissions.status",
      "submissions.title as submissionTitle",
      "submissions.grouping as submissionGrouping",
      "submissions.isRead",
      "submissions.submittedDate",
      "submissions.requestId",
      // Requests data
      "requests.requestId",
      "requests.requestTitle",
      "requests.requesterEmail",
      "requests.description",
      "requests.grouping",
      "requests.blurred",
      "requests.creationDate",
      "requests.dueDate",
      // Requestee user data
      "requestee.givenName as requesteeGivenName",
      "requestee.familyName as requesteeFamilyName",
      "requestee.profileImage as requesteeProfileImage",
      // Requester user data
      "requester.givenName as requesterGivenName",
      "requester.familyName as requesterFamilyName",
      "requester.profileImage as requesterProfileImage",
    ])
    .where("submissions.requesteeEmail", "=", email)
    .where("submissions.status", "!=", "ARCHIVED")
    .where("submissions.status", "!=", "TRASHED")
    .execute();

  return {
    submissionsByUserWithRequestsAndUsers,
  };
}
