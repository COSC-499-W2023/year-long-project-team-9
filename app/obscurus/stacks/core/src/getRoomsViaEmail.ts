import { SQL } from "./sql";

export async function getRoomsViaEmail(payload: any) {
  const rooms = await SQL.DB.selectFrom("rooms")
    .selectAll()
    .where("participant1Email", "=", payload)
    .orWhere("participant2Email", "=", payload)
    .execute();
  return rooms;
}
