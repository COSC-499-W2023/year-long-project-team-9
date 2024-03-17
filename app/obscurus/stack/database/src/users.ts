export * as Users from "./users";

import { SQL } from "./sql";

export function addUser({
  email,
  givenName,
  familyName,
  isLoggedInWithSocialIdentityProvider,
  isAdmin,
  profileImage,
  preference,
  connectionId,
}: {
  email: string;
  givenName: string;
  familyName: string;
  isLoggedInWithSocialIdentityProvider: boolean;
  isAdmin: boolean;
  profileImage: string;
  preference: string;
  connectionId: string | null;
}) {
  return SQL.DB.insertInto("users")
    .values({
      email: email,
      givenName: givenName,
      familyName: familyName,
      isLoggedInWithSocialIdentityProvider:
        isLoggedInWithSocialIdentityProvider,
      isAdmin: isAdmin,
      profileImage: profileImage,
      preference: preference,
      connectionId: connectionId,
    })
    .execute();
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

export interface Users {
  email: string;
  givenName: string;
  familyName: string;
  isLoggedInWithSocialIdentityProvider: boolean;
  isAdmin: boolean;
  profileImage: string;
  preference: string;
}
