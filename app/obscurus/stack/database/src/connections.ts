export * as Connections from "./connections";

import { SQL } from "./sql";
import { Connections } from "./sql.generated";

export function list() {
  return SQL.DB.selectFrom("connections").selectAll().execute();
}

export function insert(newConnection: Connections) {
  return SQL.DB.insertInto("connections")
    .values({
      connectionId: newConnection.connectionId,
    })
    .execute();
}

export function remove(connectionId: string) {
  return SQL.DB.deleteFrom("connections")
    .where("connectionId", "=", connectionId)
    .execute();
}
