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
