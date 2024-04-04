import { addUser, list } from "@obscurus/database/src/users";
import { Users as UserType } from "@obscurus/database/src/sql.generated";

export async function main(event: any) {
  // Step 2: Set all rooms where new user is participant 1 and participant 2 is in users table to active
  // Step 3: Set all rooms where new user is participant 2 and participant 1 is in users table to active

  const { userAttributes } = event.request;
  const email = userAttributes.email;
  const givenName = userAttributes.given_name;
  const familyName = userAttributes.family_name;
  const usersList: UserType[] = await list();
  const existingUser = usersList.filter((user) => user.email === email);
  if (existingUser.length < 1) {
    const newUser = await addUser({
      email: email,
      givenName: givenName,
      familyName: familyName,
    });
    return event;
  } else {
    return event;
  }
}