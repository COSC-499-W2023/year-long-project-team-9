import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("submissions")
    .addColumn("submission_id", "bigserial", (col) => col.primaryKey())
    .addColumn("requestee_email", "varchar", (col) => col.notNull())
    .addColumn("is_completed", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("due_date", "date", (col) => col.notNull())
    .addColumn("submitted_date", "timestamp")
    .addColumn("request_id", "bigserial", (col) =>
      col.notNull().references("requests.request_id")
    )
    .addCheckConstraint(
      "is_completed_constraint",
      "(is_completed = 'NULL' OR is_completed = 'IN-PROGRESS' OR is_completed = 'FAILED' OR is_completed = 'COMPLETED')"
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("submissions").execute();
}
