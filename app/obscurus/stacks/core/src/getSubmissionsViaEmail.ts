import { SQL } from "./sql";

export async function getSubmissionsViaEmail(event: any) {
  // getting email and grouping
  const email = event.body();
  let submissions = SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "submissions.request_id", "requests.request_id")
    .selectAll()
    .where("submissions.requestee_email", "=", email)
    .where("submissions.grouping", "is", grouping)
    .execute();

  const returnedSubmissions = JSON.stringify(await submissions);
  return { returnedSubmissions };
}
