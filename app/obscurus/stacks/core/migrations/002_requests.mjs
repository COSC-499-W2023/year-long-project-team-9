import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("requests")
    .addColumn("requestId", "varchar", (col) => col.primaryKey())
    .addColumn("requestTitle", "varchar", (col) => col.notNull())
    .addColumn("requesterEmail", "varchar", (col) =>
      col.references("users.email"),
    )
    .addColumn("isStarred", "boolean", (col) =>
      col.notNull().defaultTo(false),
    )
    .addColumn("grouping", "varchar")
    .addColumn("description", "varchar")
    .addColumn("blurred", "boolean", (col) => col.notNull())
    .addColumn("dueDate", "date", (col) => col.notNull())
    .addColumn("creationDate", "timestamp", (col) =>
      col.notNull().defaultTo("now()"),
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("requests").execute();
}
