import { sub } from "date-fns";
import { SQL } from "./sql";

export async function getRequestsViaEmail(event: any) {
  // the data passed in the wrapper function
  const payload = JSON.parse(event.body);

  // getting email and grouping
  const email = payload.email;
  const grouping = payload.grouping;

  let requests = SQL.DB.selectFrom("requests")
    .selectAll()
    .where("requester_email", "=", email)
    .where("grouping", "=", grouping)
    .execute();

  let submissions = SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "submissions.request_id", "requests.request_id")
    .select([
      "submissions.submission_id",
      "submissions.requestee_email",
      "submissions.status",
      "submissions.priorities",
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
  console.log(JSON.stringify("requests": requests, "submissions": submissions));
  //return JSON.parse(returnedRequests, returnedSubmissions);
}
