import { Kysely } from "kysely";

async function up(db:Kysely<any>) {
    await db.schema
    .createTable("user")
    .addColumn("sub","text",(col) => col.primaryKey())
    .execute();
}

async function down(db:Kysely<any>) {
    await db.schema.dropTable("user").execute();
}

module.exports = { up,down }