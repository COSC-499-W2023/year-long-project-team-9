import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("submissions")
    .addColumn("submissionId", "varchar", (col) => col.primaryKey())
    .addColumn("requesteeEmail", "varchar", (col) =>
      col.notNull().defaultTo("NULL"),
    )
    .addColumn("status", "varchar", (col) => col.notNull().defaultTo("todo"))
    .addColumn("isStarred", "boolean", (col) =>
      col.notNull().defaultTo(false),
    )
    .addColumn("isRead", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("grouping", "varchar")
    .addColumn("title", "varchar")
    .addColumn("submittedDate", "timestamp")
    .addColumn("requestId", "varchar", (col) =>
      col.notNull().references("requests.requestId"),
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("submissions").execute();
}
