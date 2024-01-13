import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db 
 */
export async function up(db) {
    await db.schema
    .createTable("users")
    .addColumn("sub","text",(col) => col.primaryKey())
    .addColumn("email","text",(col) => col.notNull())
    .execute();
}

/**
 * @param {Kysely<any>} db 
 */
export async function down(db) {
    await db.schema.dropTable("users").execute();
}