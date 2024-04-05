export * as Users from "./users";

import { SQL } from "./sql";

export interface Users {
  email: string;
  givenName: string;
  familyName: string;
  profileImage: string;
  joinedDate: Date;
}

export function addUser({
  email,
  givenName,
  familyName,
}: {
  email: string;
  givenName: string;
  familyName: string;
}) {
  return SQL.DB.insertInto("users")
    .values({
      email: email,
      givenName: givenName,
      familyName: familyName,
      profileImage: null,
      joinedDate: new Date(),
    })
    .execute();
}

export function list() {
  return SQL.DB.selectFrom("users").selectAll().execute();
}

export async function getUserDataByEmail(email: string) {
  const requests = await SQL.DB.selectFrom("requests")
    .selectAll()
    .where("requesterEmail", "=", email)
    .execute();
  const submissions = await SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "requests.requestId", "submissions.requestId")
    .selectAll()
    .where("requests.requesterEmail", "=", email)
    .execute();

  return [requests, submissions];
}

export function getUserNames() {
  return SQL.DB.selectFrom("users")
    .select(["email", "givenName", "familyName", "profileImage"])
    .execute();
}

export interface Users {
  email: string;
  givenName: string;
  familyName: string;
  isLoggedInWithSocialIdentityProvider: boolean;
  isAdmin: boolean;
  profileImage: string;
  preference: string;
}

export function setUser(
  email: string,
  givenName: string,
  familyName: string,
  profileImage: string,) {
  return SQL.DB.updateTable("users")
    .set({
      givenName: givenName,
      familyName: familyName,
      profileImage: profileImage,
    })
    .where("email", "=", email)
    .executeTakeFirst();
}