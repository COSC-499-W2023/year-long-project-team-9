import { Kysely, sql } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .alterTable("submissions")
    .addCheckConstraint(
      "status_constraint",
      sql`(status = 'backlog' OR status = 'todo' OR status = 'in progress' OR status = 'done' OR status = 'canceled')`
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema
    .alterTable("submissions")
    .dropConstraint("status_constraint")
    .execute();
}
