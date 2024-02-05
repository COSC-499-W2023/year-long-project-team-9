import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("messages")
    .addColumn("message_id", "varchar", (col) => col.primaryKey())
    .addColumn("room_id", "varchar", (col) =>
      col.notNull().references("rooms.room_id")
    )
    .addColumn("sender_email", "varchar", (col) =>
      col.notNull().references("users.email")
    )
    .addColumn("creation_date", "timestamp", (col) => col.notNull())
    .addColumn("message_content", "varchar", (col) => col.notNull())
    .addColumn("is_read", "boolean", (col) => col.notNull().defaultTo("false"))
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("messages").execute();
}
