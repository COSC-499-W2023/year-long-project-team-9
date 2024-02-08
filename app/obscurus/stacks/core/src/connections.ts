export * as Connections from "./connections";

import { SQL } from "./sql";
import { Connections } from "./sql.generated";

export function addConnection(newConnection: Connections) {
  return SQL.DB.insertInto("connections")
    .values({
      connection_id: newConnection.connection_id,
    })
    .execute();
}

export function removeConnection(newConnection: Connections) {
  return SQL.DB.deleteFrom("connections")
    .where("connections.connection_id", "=", newConnection.connection_id)
    .execute();
}
