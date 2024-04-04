import { addUser } from "@obscurus/database/src/users";

export async function main(event: any) {
  // Step 1: Add user to users table
  // Step 2: Set all rooms where new user is participant 1 and participant 2 is in users table to active
  // Step 3: Set all rooms where new user is participant 2 and participant 1 is in users table to active

  const { userAttributes } = event.request;
  const newUser = await addUser({
    email: userAttributes.email,
    givenName: userAttributes.given_name,
    familyName: userAttributes.family_name,
  });

  return event;
}
