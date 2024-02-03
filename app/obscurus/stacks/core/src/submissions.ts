export * as Submissions from "./submissions";

import { SQL } from "./sql";
import type { Submissions } from "./sql.generated";

// export function update(newValues : Submissions) {
//     return SQL.DB.updateTable("submissions").set(newValues).where("submission_id", "=", 1)

// }


export function list() {
    return SQL.DB.selectFrom("submissions").selectAll()
    .execute();
}
export function insert(newValues: Submissions) {
    return SQL.DB.insertInto("submissions").values({
        submission_id: newValues.submission_id,
        requestee_email: newValues.requestee_email,
        is_completed: newValues.is_completed,
        submitted_date: newValues.submitted_date,
        request_id: newValues.request_id,
    })
    .execute();
}