import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("rooms")
    .addColumn("room_id", "varchar", (col) => col.primaryKey())
    .addColumn("connection_id", "varchar", (col) => col.notNull())
    .addColumn("participant_1_email", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("participant_2_email", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("participant_1_room_given_name", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("participant_1_room_family_name", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("participant_2_room_given_name", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("participant_2_room_family_name", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("is_active", "boolean", (col) =>
      col.notNull().defaultTo("false")
    )
    .addColumn("creation_date", "date", (col) =>
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
