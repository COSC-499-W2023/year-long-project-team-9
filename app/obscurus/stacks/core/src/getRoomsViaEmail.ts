import { SQL } from "./sql";

export async function getRoomsViaEmail(payload: any) {
  let rooms = SQL.DB.selectFrom("rooms")
    .selectAll()
    .where("participant1Email", "=", payload)
    .orWhere("participant2Email", "=", payload)
    .execute();

  let messages = SQL.DB.selectFrom("messages").selectAll().execute();

  let jsonRooms: Record<string, any> = {};
  let jsonMessages: Record<string, any> = {};

  // Adding rooms to the JSON object
  const returnedRooms = await rooms;
  returnedRooms.forEach((row, index) => {
    jsonRooms[index.toString()] = row;
  });

  // Adding messages to the JSON object
  const returnedMessages = await messages;
  returnedMessages.forEach((row, index) => {
    jsonMessages[index.toString()] = row;
  });

  return {
    rooms: jsonRooms,
    messages: jsonMessages,
  };
}
