export * as Requests from "./requests";

import { SQL } from "../../core/src/sql";

export async function addRequest(data: string, sub: string) {
  const stringData = JSON.parse(data);
  const result = await SQL.DB.insertInto("requests")
    .values({
      request_id: 1,
      description: "Some description",
      request_title: "Some title",
      requester_sub: "Some sub",
      video_processing: false,
      due_date: new Date(), // replace with the actual due date
      video_language: "English", // replace with the actual video language
      creation_date: new Date(), // replace with the actual creation date
    })
    .execute();
}

// export function dataFunction(data) {
//   const stringData = JSON.parse(data);
//   console.log(stringData.title);
//   console.log(stringData.description);
//   console.log(stringData.clients.length);
//   for (let i = 0; i < stringData.clients.length; i++) {
//     console.log(stringData.clients[i].value);
//   }
//   console.log(stringData.blurred);
//   console.log(stringData.language);
//   console.log(stringData.blurred);
//   console.log(stringData.dueDate);
//   console.log(stringData.terms);
// }
/*
{"title":"helloWorld","clients":[{"value":"bob@gmail.com"}],"description":"akdfsk;asfn","blurred":true,"dueDate":"2024-01-29T00:44:46.210Z","language":"English","terms":true}



*/
