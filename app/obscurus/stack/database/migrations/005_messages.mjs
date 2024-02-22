import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("messages")
    .addColumn("messageId", "varchar", (col) => col.primaryKey())
    .addColumn("roomId", "varchar", (col) =>
      col.notNull().references("rooms.roomId")
    )
    .addColumn("senderEmail", "varchar", (col) =>
      col.notNull().references("users.email")
    )
    .addColumn("creationDate", "timestamp", (col) => col.notNull())
    .addColumn("messageContent", "varchar", (col) => col.notNull())
    .addColumn("isRead", "boolean", (col) => col.notNull().defaultTo(false))
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("messages").execute();
}
