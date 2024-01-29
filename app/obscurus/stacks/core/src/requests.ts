export * as Requests from "./requests";

import { SQL } from "../../core/src/sql";

export async function addRequest(data: string) {
  const newData = JSON.parse(data);
  console.log(newData);
  const result = await SQL.DB.insertInto("requests")
    .values({
      description: newData.data.description,
      request_title: newData.data.title,
      requester_sub: newData.sub,
      video_processing: newData.data.blurred,
      due_date: new Date(newData.data.dueDate), // replace with the actual due date
      video_language: newData.data.language, // replace with the actual video language
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
