import { SQL } from "./sql";

export async function getUserViaEmail(event: any) {
  // getting email and grouping
  const email = event.body;
  let submissions = SQL.DB.selectFrom("users")
    .selectAll()
    .where("email", "=", email)
    .execute();

  const returnedSubmissions = JSON.stringify(await submissions);
  return { returnedSubmissions };
}
