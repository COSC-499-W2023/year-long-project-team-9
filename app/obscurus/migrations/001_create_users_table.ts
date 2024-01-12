import { Kysely } from "kysely";

export async function up(db:Kysely<any>) {
    await db.schema
    .createTable("user")
    .addColumn("sub","text",(col) => col.primaryKey())
    .addColumn("email","text",(col) => col.notNull())
    .execute();
}

export async function down(db:Kysely<any>) {
    await db.schema.dropTable("user").execute();
}