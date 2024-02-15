import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("rooms")
    .addColumn("roomId", "varchar", (col) => col.primaryKey())
    .addColumn("connectionId", "varchar")
    .addColumn("participant1Email", "varchar")
    .addColumn("participant2Email", "varchar")
    .addColumn("participant1RoomGivenName", "varchar")
    .addColumn("participant1RoomFamilyName", "varchar")
    .addColumn("participant2RoomGivenName", "varchar")
    .addColumn("participant2RoomFamilyName", "varchar")
    .addColumn("isActive", "boolean", (col) =>
      col.notNull().defaultTo(false),
    )
    .addColumn("creationDate", "date", (col) =>
      col.notNull().defaultTo("now()"),
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("rooms").execute();
}
