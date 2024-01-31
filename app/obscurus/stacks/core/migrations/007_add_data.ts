import { Kysely, sql } from "kysely";
import { Submissions } from "../src/sql.generated";

/**
 * @param {Kysely<any>} db
 */
export async function up(db: { insertInto: (arg0: string) => { (): any; new(): any; values: { (arg0: { sub: string; email: string; given_name: string; family_name: string; timezone: string; language: string; is_logged_in_with_social_identity_provider: boolean; is_admin: boolean; profile_image: string; }[] | { request_title: string; requester_sub: string; description: string; video_processing: boolean; due_date: Date; video_language: string; }[] | { requestee_email: string; is_completed: string; submitted_date: null; request_id: number; }[]): { (): any; new(): any; execute: { (): any; new(): any; }; }; new(): any; }; }; }) {
  const newDataForUsers = await db
    .insertInto("users")
    .values([
      {
        sub: "sub1",
        email: "doe@gmail.com",
        given_name: "John",
        family_name: "Doe",
        timezone: "PST",
        language: "English",
        is_logged_in_with_social_identity_provider: true,
        is_admin: true,
        profile_image: "profile_image_one",
      },
      {
        sub: "sub2",
        email: "mike@gmail.com",
        given_name: "Mike",
        family_name: "Smith",
        timezone: "PST",
        language: "English",
        is_logged_in_with_social_identity_provider: false,
        is_admin: false,
        profile_image: "profile_image_one",
      },
      {
        sub: "sub3",
        email: "davey@hotmail.com",
        given_name: "Bavey",
        family_name: "Woods",
        timezone: "PST",
        language: "Spanish",
        is_logged_in_with_social_identity_provider: false,
        is_admin: false,
        profile_image: "profile_image_one",
      },
      {
        sub: "sub4",
        email: "richie@hotmail.com",
        given_name: "Richie",
        family_name: "Aprile",
        timezone: "PST",
        language: "German",
        is_logged_in_with_social_identity_provider: false,
        is_admin: false,
        profile_image: "profile_image_one",
      },
      {
        sub: "sub5",
        email: "walter@hotmail.com",
        given_name: "Walter",
        family_name: "White",
        timezone: "PST",
        language: "English",
        is_logged_in_with_social_identity_provider: false,
        is_admin: false,
        profile_image: "profile_image_one",
      },
    ])
    .execute();

  const newDataForRequest = await db
    .insertInto("requests")
    .values([
      {
        request_title: "Spanish Lesson 1",
        requester_sub: "sub3",
        description: "Please send me your video for lesson 1.",
        video_processing: true,
        due_date: new Date("2024-06-06"),
        video_language: "Spanish",
      },
      {
        request_title: "Spanish Lesson 2",
        requester_sub: "sub3",
        description: "Please send me your video for lesson 2.",
        video_processing: true,
        due_date: new Date("2024-06-06"),
        video_language: "Spanish",
      },
      {
        request_title: "Spanish Lesson 2",
        requester_sub: "sub3",
        description: "Please send me your video for lesson 2.",
        video_processing: true,
        due_date: new Date("2024-07-07"),
        video_language: "Spanish",
      },
      {
        request_title: "Musical Auditions",
        requester_sub: "sub4",
        description: "Submit a video with you audition",
        video_processing: false,
        due_date: new Date("2024-08-08"),
        video_language: "Englis",
      },
    ])
    .execute();
  const newDataForSubmission: Submissions = await db
    .insertInto("submissions")
    .values([
      {
        requestee_email: "walter@hotmail.com",
        is_completed: "NULL",
        submitted_date: null,
        request_id: 1,
      },
      {
        requestee_email: "mike@gmail.com",
        is_completed: "NULL",
        submitted_date: null,
        request_id: 1,
      },
      {
        requestee_email: "walter@hotmail.com",
        is_completed: "NULL",
        submitted_date: null,
        request_id: 2,
      },
      {
        requestee_email: "mike@gmail.com",
        is_completed: "NULL",
        submitted_date: null,
        request_id: 2,
      },
      {
        requestee_email: "walter@hotmail.com",
        is_completed: "NULL",
        submitted_date: null,
        request_id: 3,
      },
      {
        requestee_email: "richie@hotmail.com",
        is_completed: "NULL",
        submitted_date: null,
        request_id: 3,
      },
      {
        requestee_email: "doe@gmail.com",
        is_completed: "NULL",
        submitted_date: null,
        request_id: 4,
      },
    ])
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db: { deleteFrom: (arg0: string) => { (): any; new(): any; execute: { (): any; new(): any; }; }; }) {
  const deleteFromUsers = await db.deleteFrom("users").execute();
  const deleteFromRequests = await db.deleteFrom("requests").execute();
  const deleteFromSubmissions = await db.deleteFrom("submissions").execute();
}
