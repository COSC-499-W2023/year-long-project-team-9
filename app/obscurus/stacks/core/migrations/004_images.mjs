import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db 
 */
export async function up(db) {
    await db.schema
    .createTable("images")
    .addColumn("sub","varchar",(col) => col.primaryKey().references("users.sub").onDelete("cascade"))
    .addColumn("image","bytea",(col) => col.notNull())
    .execute();
}

/**
 * @param {Kysely<any>} db 
 */
export async function down(db) {
    await db.schema.dropTable("images").execute();
}