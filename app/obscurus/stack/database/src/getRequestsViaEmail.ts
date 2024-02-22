// import { SQL } from "./sql";

// export async function getRequestsViaEmail(payload: any) {
//   const jsonPayload = JSON.parse(payload);
//   const email = jsonPayload.email;
//   const grouping = jsonPayload.grouping;
//   // one cannot use "=" for null
//   // not waiting for async to increase speed
//   let requests;
//   if (grouping === null) {
//     requests = SQL.DB.selectFrom("requests")
//       .selectAll()
//       .where("requester_email", "=", email)
//       .where("grouping", "is", grouping)
//       .execute();
//   } else {
//     requests = SQL.DB.selectFrom("requests")
//       .selectAll()
//       .where("requester_email", "=", email)
//       .where("grouping", "=", grouping)
//       .execute();
//   }
//   let submissions = SQL.DB.selectFrom("submissions")
//     .innerJoin("requests", "submissions.request_id", "requests.request_id")
//     .select([
//       "submissions.submission_id",
//       "submissions.requestee_email",
//       "submissions.status",
//       "submissions.is_starred",
//       "submissions.is_read",
//       "submissions.grouping",
//       "submissions.title",
//       "submissions.submitted_date",
//       "submissions.request_id",
//     ])
//     .where("requests.requester_email", "=", email)
//     .execute();

//   let jsonRequests = {};
//   let jsonSubmissions = {};

//   // adding requests to json
//   const returnedRequests = await requests;
//   returnedRequests.forEach((row, index) => {
//     jsonRequests[index.toString()] = row;
//   });

//   // adding submissions json
//   const returnedSubmissions = await submissions;
//   returnedSubmissions.forEach((row, index) => {
//     jsonSubmissions[index.toString()] = row;
//   });
//   return {
//     requests: jsonRequests,
//     submissions: jsonSubmissions,
//   };
//   //return JSON.parse(returnedRequests, returnedSubmissions);
// }
