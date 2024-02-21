export * as Requests from "./requests";

import { formSchema } from "@/components/CreateRequest";
import { SQL } from "./sql";
import { Requests } from "./sql.generated";
import { GroupingState } from "@tanstack/react-table";
import { element } from "prop-types";

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

export async function selectRequestsUsingEmail(email: string) {
  let request = SQL.DB.selectFrom("requests")
    .selectAll()
    .where("requesterEmail", "=", email)
    .orderBy("creationDate", "desc")
    .execute();
  let submission = SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "submissions.requestId", "requests.requestId")
    .where("requests.requesterEmail", "=", email)
    .select([
      "submissions.submissionId",
      "submissions.requesteeEmail",
      "submissions.status",
      "submissions.isRead",
      "submissions.grouping",
      "submissions.title",
      "submissions.submittedDate",
      "submissions.requestId",
    ])
    .execute();
  let jsonRequest = {};
  let jsonSubmission = {};
  const resultFromRequest = await request;
  const resultFromSubmission = await submission;
  // resultFromSubmission.forEach((element) => console.log(element));
  for (let i = 0; i < resultFromRequest.length; i++) {
    jsonRequest[i] = resultFromRequest[i];
  }
  for (let i = 0; i < resultFromSubmission.length; i++) {
    jsonSubmission[i] = resultFromSubmission[i];
  }
  return { requests: jsonRequest, submissions: jsonSubmission };
}
