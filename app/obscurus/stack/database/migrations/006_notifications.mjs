import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("notifications")
    .addColumn("notificationId", "varchar", (col) => col.primaryKey())
    .addColumn("userEmail", "varchar", (col) => col.notNull())
    .addColumn("type", "varchar", (col) => col.notNull())
    .addColumn("creationDate", "timestamp", (col) =>
      col.notNull().defaultTo("now()")
    )
    .addColumn("content", "varchar", (col) => col.notNull())
    .addColumn("isRead", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("isTrashed", "boolean", (col) => col.notNull().defaultTo(false))
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("notifications").execute();
}
