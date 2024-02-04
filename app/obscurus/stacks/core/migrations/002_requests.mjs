import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("requests")
    .addColumn("request_id", "bigserial", (col) => col.primaryKey())
    .addColumn("request_title", "varchar", (col) => col.notNull())
    .addColumn("requester_email", "varchar", (col) =>
      col.references("users.email")
    )
    .addColumn("is_starred", "boolean", (col) =>
      col.notNull().defaultTo("false")
    )
    .addColumn("grouping", "varchar", (col) => col.notNull().defaultTo("NULL"))
    .addColumn("description", "varchar")
    .addColumn("blurred", "boolean", (col) => col.notNull())
    .addColumn("due_date", "date", (col) => col.notNull())
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
