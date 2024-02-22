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
    .addColumn("isLoggedInWithSocialIdentityProvider", "boolean", (col) =>
      col.notNull().defaultTo(false)
    )
    .addColumn("isAdmin", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("profileImage", "varchar")
    .addColumn("preference", "varchar", (col) => col.notNull().defaultTo("{}"))
    .addColumn("connectionId", "varchar", (col) =>
      col.references("connections.connectionId").defaultTo(null)
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("users").execute();
}
