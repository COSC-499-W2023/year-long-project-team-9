import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("requests")
    .addColumn("request_id", "varchar", (col) => col.primaryKey())
    .addColumn("request_title", "varchar", (col) => col.notNull())
    .addColumn("requester_sub", "varchar", (col) =>
      col.notNull().references("users.sub")
    )
    .addColumn("description", "varchar")
    .addColumn("video_processing", "boolean", (col) => col.notNull())
    .addColumn("due_date", "date", (col) => col.notNull())
    .addColumn("video_language", "varchar", (col) => col.notNull())
    .addColumn("creation_date", "timestamp", (col) =>
      col.notNull().defaultTo("now()")
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("requests").execute();
}
