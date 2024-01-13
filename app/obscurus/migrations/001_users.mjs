import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db 
 */
export async function up(db) {
    await db.schema
    .createTable("users")
    .addColumn("sub","varchar",(col) => col.primaryKey())
    .addColumn("email","varchar",(col) => col.notNull())
    .addColumn("given_name","varchar",(col) => col.notNull())
    .addColumn("family_name","varchar",(col) => col.notNull())
    .addColumn("birthday","date",(col) => col.notNull())
    .addColumn("timezone","varchar",(col) => col.notNull())
    .addColumn("language","varchar",(col) => col.notNull())
    .addColumn("is_logged_in_with_social_identity_provider","boolean",(col) => col.notNull())
    .execute();
}

/**
 * @param {Kysely<any>} db 
 */
export async function down(db) {
    await db.schema.dropTable("users").execute();
}