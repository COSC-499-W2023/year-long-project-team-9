export * as Messages from "./messages";

import { SQL } from "./sql";
import type { Messages } from "./sql.generated";
import { request } from "http";
import { Status } from "./types/status";

export function list() {
  return SQL.DB.selectFrom("messages").selectAll().execute();
}
