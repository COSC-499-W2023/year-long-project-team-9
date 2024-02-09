import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("submissions")
    .addColumn("submission_id", "varchar", (col) => col.primaryKey())
    .addColumn("requestee_email", "varchar", (col) =>
      col.notNull().defaultTo("NULL"),
    )
    .addColumn("status", "varchar", (col) => col.notNull().defaultTo("todo"))
    .addColumn("is_starred", "boolean", (col) =>
      col.notNull().defaultTo("false"),
    )
    .addColumn("is_read", "boolean", (col) => col.notNull().defaultTo("false"))
    .addColumn("grouping", "varchar")
    .addColumn("title", "varchar")
    .addColumn("submitted_date", "timestamp")
    .addColumn("request_id", "varchar", (col) =>
      col.notNull().references("requests.request_id"),
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("submissions").execute();
}
