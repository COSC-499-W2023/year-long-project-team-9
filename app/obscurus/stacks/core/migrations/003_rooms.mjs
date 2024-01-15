import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db 
 */
export async function up(db) {
    await db.schema
    .createTable("rooms")
    .addColumn("room_id","bigserial",(col) => col.primaryKey())
    .addColumn("request_id","bigserial",(col) => col.notNull().references("requests.request_id"))
    .addColumn("room_name","varchar",(col) => col.notNull())
    .addColumn("connection_id","varchar",(col) => col.notNull())
    .addColumn("number_of_participants","integer",(col) => col.notNull())
    .addColumn("participants_subs","varchar",(col) => col.notNull())
    .addColumn("creation_date","timestamp",(col) => col.notNull().defaultTo("now()"))
    .execute();
}

/**
 * @param {Kysely<any>} db 
 */
export async function down(db) {
    await db.schema.dropTable("rooms").execute();
}