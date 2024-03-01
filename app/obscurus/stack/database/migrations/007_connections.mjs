import { Kysely } from "kysely";

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db.schema
    .createTable("connections")
    .addColumn("connectionId", "varchar", (col) => col.primaryKey())
    .addColumn("email", "varchar", (col) =>
      col.notNull().references("users.email")
    )
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  await db.schema.dropTable("connections").execute();
}
