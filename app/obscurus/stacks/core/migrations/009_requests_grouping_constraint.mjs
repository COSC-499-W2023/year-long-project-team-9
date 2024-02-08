import { Kysely, sql } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .alterTable("requests")
    .addCheckConstraint(
      "requests_grouping_constraint",
      sql`(grouping = 'NULL' OR grouping = 'IN-TRASH' OR grouping = 'TRASHED' OR grouping = 'ARCHIVED')`
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema
    .alterTable("requests")
    .dropConstraint("requests_grouping_constraint")
    .execute();
}
