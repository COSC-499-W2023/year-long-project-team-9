import { SQL } from "./sql";

export async function getUserViaEmail(payload: any) {
  const jsonPayload = JSON.parse(payload);
  const email = jsonPayload.email;
  let submissions = SQL.DB.selectFrom("users")
    .selectAll()
    .where("email", "=", email)
    .execute();

  const returnedSubmissions = JSON.stringify(await submissions);
  return { returnedSubmissions };
}
