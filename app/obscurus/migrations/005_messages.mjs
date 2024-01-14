import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db 
 */
export async function up(db) {
    await db.schema
    .createTable("messages")
    .addColumn("message_id","bigserial",(col) => col.primaryKey())
    .addColumn("sender_sub","varchar",(col) => col.notNull().references("users.sub"))
    .addColumn("date_time","timestamp",(col) => col.notNull())
    .addColumn("message_content","varchar",(col) => col.notNull())
    .execute();
}

/**
 * @param {Kysely<any>} db 
 */
export async function down(db) {
    await db.schema.dropTable("messages").execute();
}