import { Kysely, sql } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .alterTable("submissions")
    .addCheckConstraint(
      "submissions_grouping_constraint",
      sql`(grouping = 'NULL' OR grouping = 'IN-TRASH' OR grouping = 'TRASHED' OR grouping = 'ARCHIVED')`
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema
    .alterTable("submissions")
    .dropConstraint("submissions_grouping_constraint")
    .execute();
}
