export * as Requests from "./requests";

import { SQL } from "./sql";

export function list() {
    return SQL.DB.selectFrom("requests")
    .selectAll()
    .execute();
}