export * as Users from "./users";

import { SQL } from "./sql";

export function list() {
  return SQL.DB.insertInto("requests")
    .values({
      request_id: "1",
      description: "Some description",
      request_title: "Some title",
      requester_sub: "Some sub",
      video_processing: false,
      due_date: new Date(),
      video_language: "English",
      creation_date: new Date(),
      read: false,
    })
    .execute();
}

export function addUser({
  sub,
  email,
  given_name,
  family_name,
  timezone,
  language,
  is_logged_in_with_social_identity_provider,
  is_admin,
  profile_image,
}: {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  timezone: string;
  language: string;
  is_logged_in_with_social_identity_provider: boolean;
  is_admin: boolean;
  profile_image: string;
}) {
  return SQL.DB.insertInto("users")
    .values({
      sub: sub,
      email: email,
      given_name: given_name,
      family_name: family_name,
      timezone: timezone,
      language: language,
      is_logged_in_with_social_identity_provider:
        is_logged_in_with_social_identity_provider,
      is_admin: is_admin,
      profile_image: profile_image,
    })
    .execute();
}
