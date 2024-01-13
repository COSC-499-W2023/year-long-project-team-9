import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db 
 */
export async function up(db) {
    await db.schema
    .createTable("requests")
    .addColumn("request_id","bigserial",(col) => col.primaryKey())
    .execute();
}

/**
 * @param {Kysely<any>} db 
 */
export async function down(db) {
    await db.schema.dropTable("requests").execute();
}