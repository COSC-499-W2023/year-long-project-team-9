import { SQL } from "./sql";
import { Users } from "./sql.generated";

export async function getUserViaEmail(email: string) {
  return await SQL.DB.selectFrom("users")
    .selectAll()
    .where("email", "=", email)
    .executeTakeFirst();
}
