export * as Users from "./users";

import { SQL } from "./sql";

export function list() {
    return SQL.DB.selectFrom("users")
    .selectAll()
    .execute();
}