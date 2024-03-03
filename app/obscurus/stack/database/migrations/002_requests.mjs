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
      col.references("users.email")
    )
    .addColumn("grouping", "varchar")
    .addColumn("description", "varchar")
    .addColumn("blurred", "boolean", (col) => col.notNull())
    .addColumn("dueDate", "timestamp", (col) => col.notNull())
    .addColumn("creationDate", "date", (col) =>
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
