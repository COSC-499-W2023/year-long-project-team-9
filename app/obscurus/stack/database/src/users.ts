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

export interface Users {
  email: string;
  givenName: string;
  familyName: string;
  isLoggedInWithSocialIdentityProvider: boolean;
  isAdmin: boolean;
  profileImage: string;
  preference: string;
}
