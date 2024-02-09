import { Kysely, sql } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .alterTable("notifications")
    .addCheckConstraint(
      "notifications_type_constraint",
      sql`(type = 'requests' OR type = 'submissions' OR type = 'messages')`,
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema
    .alterTable("notifications")
    .dropConstraint("notifications_type_constraint")
    .execute();
}
