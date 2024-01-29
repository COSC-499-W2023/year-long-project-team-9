export * as Users from "./users";

import { SQL } from "./sql";

export function list() {
    return SQL.DB.insertInto("requests").values({
        request_id: 1,
        description: 'Some description',
        request_title: 'Some title',
        requester_sub: 'Some sub',
        video_processing: false,
        due_date: new Date(), // replace with the actual due date
        video_language: 'English', // replace with the actual video language
        creation_date: new Date(), // replace with the actual creation date
    })
    .execute();
}