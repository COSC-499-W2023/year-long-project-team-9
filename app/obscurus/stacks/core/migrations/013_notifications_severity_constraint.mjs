import { Kysely, sql } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .alterTable("notifications")
    .addCheckConstraint(
      "notifications_severity_constraint",
      sql`(severity = 'requests' OR severity = 'submissions' OR severity = 'messages')`,
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema
    .alterTable("notifications")
    .dropConstraint("notifications_severity_constraint")
    .execute();
}
