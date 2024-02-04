export * as Requests from "./requests";

import { formSchema } from "@/pages/CreateRequest";
import { SQL } from "./sql";
import { Requests } from "./sql.generated";

export function list() {
    return SQL.DB.selectFrom("requests")
    .selectAll()
    .execute();
}
export function insert(request: Requests) {
    console.log(request.requester_sub)
    return SQL.DB.insertInto("requests").values({
      request_id: request.request_id,
      description: request.description,
      request_title: request.request_title,
      requester_sub: request.requester_sub,
      video_processing: request.video_processing,
      due_date: request.due_date, 
      video_language: request.video_language,
      creation_date: request.creation_date,
      read: false, // Add this line
    })
    .execute();
  }