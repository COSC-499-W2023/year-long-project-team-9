import { Kysely } from "kysely";

export async function up(db:Kysely<any>) {
    await db.schema
    .createTable("Users")
    .addColumn("sub","text",(col) => col.primaryKey())
    .addColumn("email","text",(col) => col.notNull())
    .addColumn("first_name","text",(col) => col.notNull())
    .addColumn("last_name","text",(col) => col.notNull())
    .addColumn("bday","text",(col) => col.notNull())
    .addColumn("requests","text",(col) => col.notNull())
    .addColumn("time_zone","text",(col) => col.notNull())
    .addColumn("language","text",(col) => col.notNull())
    .execute();
}

export async function down(db:Kysely<any>) {
    await db.schema.dropTable("user").execute();
}