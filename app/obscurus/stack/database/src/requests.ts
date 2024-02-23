export * as Requests from "./requests";

import { formSchema } from "@/components/CreateRequest";
import { SQL } from "./sql";
import { Requests } from "./sql.generated";
import { GroupingState } from "@tanstack/react-table";

export function list() {
    return SQL.DB.selectFrom("requests")
    .selectAll()
    .execute();
}
export function insert(request: Requests) {
    return SQL.DB.insertInto("requests").values({
      requestId: request.requestId,
      requestTitle: request.requestTitle,
      requesterEmail: request.requesterEmail,
      grouping: request.grouping,
      description: request.description,
      blurred: request.blurred,
      creationDate: request.creationDate,
      dueDate: request.dueDate,
    })
    .execute();
  }

  export function get(request: Requests){
    return SQL.DB.selectFrom("requests").where("requestId", "=", request.requestId)
    .execute();
  }
