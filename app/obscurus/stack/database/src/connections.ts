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
      email: newConnection.email,
    })
    .execute();
}

export function remove(newConnection: Connections) {
  return SQL.DB.deleteFrom("connections")
    .where("connections.connectionId", "=", newConnection.connectionId)
    .execute();
}
