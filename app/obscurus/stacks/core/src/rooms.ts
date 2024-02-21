export * as Rooms from "./rooms";

import { SQL } from "./sql";
import type { Submissions } from "./sql.generated";
import { request } from "http";
import { Status } from "./types/status";

export async function getRoomsViaEmail(payload: any) {
  return SQL.DB.selectFrom("rooms")
    .selectAll()
    .where("participant1Email", "=", payload)
    .orWhere("participant2Email", "=", payload)
    .execute();
}
