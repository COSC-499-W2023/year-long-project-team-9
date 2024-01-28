export * as Requests from "./requests";

import { OperandValueExpressionOrList } from "kysely";
import { SQL } from "./sql";
import { Database } from "./sql.generated";

export function list() {
    return SQL.DB.selectFrom("requests")
    .selectAll()
    .execute();
}

export function get(requestId:any){
    return SQL.DB.selectFrom("requests").select("request_id").where("request_id", '=', requestId ).execute();
}

export async function getStatus(requestId: any){
    return SQL.DB.selectFrom("requests").select("request_id").where("request_id", '=', requestId ).select("requests.video_processing").execute();
}