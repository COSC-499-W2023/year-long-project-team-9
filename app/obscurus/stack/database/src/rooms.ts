export * as Rooms from "./rooms";

import { SQL } from "./sql";

export async function getRoomsViaEmail(payload: any) {
  return SQL.DB.selectFrom("rooms")
    .selectAll()
    .where("isActive", "=", true)
    .where("participant1Email", "=", payload)
    .orWhere("participant2Email", "=", payload)
    .execute();
}

export async function activateRooms(email: string) {
  return SQL.DB.updateTable("rooms")
    .set({ isActive: true })
    .where("participant1Email", "=", email)
    .orWhere("participant2Email", "=", email)
    .execute();
}
