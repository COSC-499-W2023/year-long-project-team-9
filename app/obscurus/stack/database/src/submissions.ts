export * as Submissions from "./submissions";

import { SQL } from "./sql";
import type { Submissions, Users } from "./sql.generated";
import { request } from "http";
import { Status } from "./types/status";
import { sendEmailTextBlockViaNoReply } from "@obscurus/ses/src/sendEmailTextBlockViaNoReply";

export function list() {
  return SQL.DB.selectFrom("submissions").selectAll().execute();
}
export function insert(newValues: Submissions) {
  return SQL.DB.insertInto("submissions")
    .values({
      title: newValues.title,
      submissionId: newValues.submissionId,
      requesteeEmail: newValues.requesteeEmail,
      status: newValues.status,
      grouping: newValues.grouping,
      isRead: newValues.isRead,
      submittedDate: newValues.submittedDate,
      requestId: newValues.requestId,
    })
    .execute();
}

export function setStatus(status: Status, submissionId: string, requesterEmail: string, requesteeEmail: string) {
  if (status === "COMPLETED") {
    sendEmailTextBlockViaNoReply(
      requesteeEmail,
      "obscurus - Submission Completed!",
      `Your submission has completed processing!`,
      "submit"
    );
    sendEmailTextBlockViaNoReply(
      requesterEmail,
      "obscurus - New Submission!",
      `A new submission has been received!`,
      "submit"
    );
  }
  return SQL.DB.updateTable("submissions")
    .set({
      status: status,
    })
    .where("submissionId", "=", submissionId)
    .executeTakeFirst();
}

export function updateIsRead(isRead: boolean, submissionId: string) {
  return SQL.DB.updateTable("submissions")
    .set({
      isRead: isRead,
    })
    .where("submissionId", "=", submissionId)
    .executeTakeFirst();
}

export function getStatus(submissionId: string) {
  return SQL.DB.selectFrom("submissions")
    .select("status")
    .where("submissionId", "=", submissionId)
    .executeTakeFirst();
}

export function setSubmittedDate(submissionId: string) {
  return SQL.DB.updateTable("submissions")
    .set({
      submittedDate: new Date(),
    })
    .where("submissionId", "=", submissionId)
    .executeTakeFirst();
}
