import { Kysely, sql } from "kysely";

/**
 * @param db {{Kysely<any>}}
 */
export async function up(db) {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`.execute(db);
}

/**
 * @param {Kysely<any>} db
 */
export async function dow(db) {
  await sql`DROP EXTENSION "uuid-ossp"`.execute(db);
}
