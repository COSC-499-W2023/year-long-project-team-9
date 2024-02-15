// import { json } from "stream/consumers";
// import { SQL } from "./sql";

// export async function getUserViaEmail(payload: any) {
//   const jsonPayload = JSON.parse(payload);
//   const email = jsonPayload.email;
//   let user = SQL.DB.selectFrom("users")
//     .selectAll()
//     .where("email", "=", email)
//     .execute();
//   let jsonUser = {};

//   const returnedUser = await user;
//   returnedUser.forEach((row, index) => {
//     jsonUser[index.toString()] = row;
//   });
//   return { user: jsonUser };
// }
