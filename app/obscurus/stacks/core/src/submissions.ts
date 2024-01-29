export * as Submissions from "./submissions";

import { SQL } from "./sql";

export function update(newValues : any) {
    return SQL.DB.updateTable("submissions").set(newValues).where("submission_id", "=", 1)
}