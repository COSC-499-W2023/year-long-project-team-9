import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("users")
    .addColumn("email", "varchar", (col) => col.primaryKey())
    .addColumn("givenName", "varchar", (col) => col.notNull())
    .addColumn("familyName", "varchar", (col) => col.notNull())
    .addColumn("profileImage", "varchar")
    .addColumn("joinedDate", "date", (col) => col.notNull().defaultTo("now()"))
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("users").execute();
}
