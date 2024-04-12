import { addUser, list } from "@obscurus/database/src/users";
import { activateRooms } from "@obscurus/database/src/rooms";
import { Users as UserType } from "@obscurus/database/src/sql.generated";

export async function main(event: any) {
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
    const activatedRooms = await activateRooms(email);
    return event;
  } else {
    return event;
  }
}
