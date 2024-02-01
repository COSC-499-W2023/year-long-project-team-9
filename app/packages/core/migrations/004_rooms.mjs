import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("rooms")
    .addColumn("room_id", "bigserial", (col) => col.primaryKey())
    .addColumn("connection_id", "varchar", (col) => col.notNull())
    .addColumn("participant1_email", "varchar", (col) => col.notNull())
    .addColumn("participant1_sub", "varchar")
    .addColumn("participant2_email", "varchar", (col) => col.notNull())
    .addColumn("participant2_sub", "varchar")
    .addColumn("participant1_room_name", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("participant2_room_name", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("is_active", "boolean", (col) =>
      col.notNull().defaultTo("false")
    )
    .addColumn("creation_date", "timestamp", (col) =>
      col.notNull().defaultTo("now()")
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("rooms").execute();
}
