import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("users")
    .addColumn("email", "varchar", (col) => col.primaryKey())
    .addColumn("given_name", "varchar", (col) => col.notNull())
    .addColumn("family_name", "varchar", (col) => col.notNull())
    .addColumn("is_logged_in_with_social_identity_provider", "boolean", (col) =>
      col.notNull().defaultTo("false")
    )
    .addColumn("is_admin", "boolean", (col) => col.notNull().defaultTo("false"))
    .addColumn("profile_image", "varchar", (col) =>
      col.notNull().defaultTo("NULL")
    )
    .addColumn("preference", "varchar", (col) => col.notNull().defaultTo("{}"))
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("users").execute();
}
