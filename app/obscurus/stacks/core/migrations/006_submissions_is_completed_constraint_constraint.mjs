import { Kysely, sql } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .alterTable("submissions")
    .addCheckConstraint(
      "is_completed_constraint",
      sql`(is_completed = 'NULL' OR is_completed = 'IN-PROGRESS' OR is_completed = 'FAILED' OR is_completed = 'COMPLETED' OR is_completed = 'TRASHED')`
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema
    .alterTable("submissions")
    .dropConstraint("is_completed_constraint")
    .execute();
}
