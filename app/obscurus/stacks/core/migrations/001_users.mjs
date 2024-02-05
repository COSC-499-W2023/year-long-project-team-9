import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("users")
    .addColumn("sub", "varchar", (col) => col.primaryKey())
    .addColumn("email", "varchar", (col) => col.notNull().unique())
    .addColumn("given_name", "varchar", (col) => col.notNull())
    .addColumn("family_name", "varchar", (col) => col.notNull())
    .addColumn("birthdate", "date", (col) => col.notNull())
    .addColumn("timezone", "varchar")
    .addColumn("language", "varchar")
    .addColumn("is_logged_in_with_social_identity_provider", "boolean", (col) =>
      col.notNull().defaultTo("false")
    )
    .addColumn("is_admin", "boolean", (col) => col.notNull().defaultTo("false"))
    .addColumn("profile_image", "varchar")
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("users").execute();
}
