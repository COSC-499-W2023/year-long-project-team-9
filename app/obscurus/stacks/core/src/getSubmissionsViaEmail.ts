import { SQL } from "./sql";

export async function getSubmissionsViaEmail(payload: any) {
  // getting email and grouping
  const jsonPayload = JSON.parse(payload);
  const email = jsonPayload.email;
  const grouping = jsonPayload.grouping;
  // one cannot use "=" for null
  let submissions;
  if (grouping === null) {
    submissions = SQL.DB.selectFrom("submissions")
      .innerJoin("requests", "submissions.request_id", "requests.request_id")
      .selectAll()
      .where("submissions.requestee_email", "=", email)
      .where("submissions.grouping", "is", grouping)
      .execute();
  } else {
    submissions = SQL.DB.selectFrom("submissions")
      .innerJoin("requests", "submissions.request_id", "requests.request_id")
      .selectAll()
      .where("submissions.requestee_email", "=", email)
      .where("submissions.grouping", "=", grouping)
      .execute();
  }
  const jsonSubmissions = {};
  const returnedSubmissions = await submissions;
  returnedSubmissions.forEach((row, index) => {
    jsonSubmissions[index.toString()] = row;
  });
  return { submissions: jsonSubmissions };
}
