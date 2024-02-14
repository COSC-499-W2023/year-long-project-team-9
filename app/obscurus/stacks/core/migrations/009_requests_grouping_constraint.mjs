import { Kysely, sql } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .alterTable("requests")
    .addCheckConstraint(
      "requests_grouping_constraint",
      sql`(grouping = null OR grouping = 'in trash' OR grouping = 'trashed' OR grouping = 'archived')`,
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
