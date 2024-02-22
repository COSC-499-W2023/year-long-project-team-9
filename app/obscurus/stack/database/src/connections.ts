export * as Connections from "./connections";

import { SQL } from "./sql";
import { Connections } from "./sql.generated";

export function list() {
  return SQL.DB.selectFrom("connections").selectAll().execute();
}

export function addConnection(newConnection: Connections) {
  return SQL.DB.insertInto("connections")
    .values({
      connectionId: newConnection.connectionId,
    })
    .execute();
}

export function removeConnection(newConnection: Connections) {
  return SQL.DB.deleteFrom("connections")
    .where("connections.connectionId", "=", newConnection.connectionId)
    .execute();
}
