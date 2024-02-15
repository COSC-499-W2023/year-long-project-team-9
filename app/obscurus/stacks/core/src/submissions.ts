export * as Submissions from "./submissions";

import { SQL } from "./sql";
import type { Submissions } from "./sql.generated";
import { request } from "http";
import { Status } from "./types/status";

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
      isStarred: newValues.isStarred,
      grouping: newValues.grouping,
      isRead: newValues.isRead,
      submittedDate: newValues.submittedDate,
      requestId: newValues.requestId,
    })
    .execute();
}

export function setStatus(
  status: Status,
  submissionId: string,
) {
  return SQL.DB.updateTable("submissions")
    .set({
      status: status,
    })
    .where("submissionId", "=", submissionId)
    .executeTakeFirst();
}

