import { SQL } from "./sql";

export async function getRequestsViaEmail(payload: any) {
  const jsonPayload = JSON.parse(payload);
  const email = jsonPayload.email;
  const grouping = jsonPayload.grouping;

  let requests = SQL.DB.selectFrom("requests")
    .selectAll()
    .where("requester_email", "=", email)
    .where("grouping", "is", grouping)
    .where("grouping", "=", grouping)
    .execute();
  let submissions = SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "submissions.request_id", "requests.request_id")
    .select([
      "submissions.submission_id",
      "submissions.requestee_email",
      "submissions.status",
      "submissions.is_starred",
      "submissions.is_read",
      "submissions.grouping",
      "submissions.title",
      "submissions.submitted_date",
      "submissions.request_id",
    ])
    .where("requests.requester_email", "=", email)
    .execute();
  const returnedRequests = JSON.stringify(await requests);
  const returnedSubmissions = JSON.stringify(await submissions);
  return {
    requests: returnedRequests,
    submissions: returnedSubmissions,
  };
  //return JSON.parse(returnedRequests, returnedSubmissions);
}
