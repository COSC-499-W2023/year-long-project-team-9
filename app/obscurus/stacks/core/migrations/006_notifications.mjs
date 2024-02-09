import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("notifications")
    .addColumn("notification_id", "varchar", (col) => col.primaryKey())
    .addColumn("user_email", "varchar", (col) =>
      col.notNull().references("users.email"),
    )
    .addColumn("type", "varchar", (col) => col.notNull())
    .addColumn("creation_date", "timestamp", (col) =>
      col.notNull().defaultTo(now()),
    )
    .addColumn("content", "varchar", (col) => col.notNull())
    .addColumn("is_read", "boolean", (col) => col.notNull().defaultTo("false"))
    .addColumn("is_trashed", "boolean", (col) =>
      col.notNull().defaultTo("false"),
    )
    .addColumn("severity", "varchar", (col) => col.notNull())
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("notifications").execute();
}
