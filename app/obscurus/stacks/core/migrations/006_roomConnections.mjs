import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("roomConnections")
    .addColumn("participantEmail", "varchar", (col) => col.primaryKey())
    .addColumn("connectionId", "varchar", (col) =>
      col.references("connections.connectionId")
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("roomConnections").execute();
}
