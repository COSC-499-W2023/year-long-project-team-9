"use server";
import { createFormSchema } from "@/app/request/create/form/createFormSchema";
import { SQL } from "./sql";
import { Requests, Submissions, Rooms, Notifications } from "./sql.generated";
import { uuidv7 } from "uuidv7";

export async function createRequest(data: any) {
  const validData = createFormSchema.safeParse(data);
  if (validData.success === false) {
    console.log(validData.success);
    return false;
  }
  try {
    const requestID = uuidv7();
    console.log();
    const insertRequest = await SQL.DB.insertInto("requests")
      .values({
        requestId: requestID,
        requestTitle: validData.data.title,
        requesterEmail: validData.data.userEmail,
        grouping: null,
        description: validData.data.description,
        blurred: validData.data.videoProcessing,
        creationDate: new Date(),
        dueDate: validData.data.dueDate,
      })
      .execute();
    for (let i = 0; i < validData.data.clientEmail.length; i++) {
      const insertSubmission = await SQL.DB.insertInto("submissions")
        .values({
          submissionId: uuidv7(),
          requesteeEmail: validData.data.clientEmail[i].email,
          status: "TODO",
          title: "null",
          grouping: null,
          isRead: false,
          submittedDate: null,
          requestId: requestID,
        })
        .execute();
      const insertNotifications = await SQL.DB.insertInto("notifications")
        .values({
          notificationId: uuidv7(),
          userEmail: validData.data.clientEmail[i].email,
          type: "Request",
          creationDate: new Date(),
          content: `New request from ${validData.data.userEmail}`,
          isRead: false,
          isTrashed: false,
        })
        .execute();
      const roomOne = await SQL.DB.selectFrom("rooms")
        .selectAll()
        .where("participant1Email", "=", validData.data.userEmail)
        .where("participant2Email", "=", validData.data.clientEmail[i].email)
        .executeTakeFirst();
      const roomTwo = await SQL.DB.selectFrom("rooms")
        .selectAll()
        .where("participant1Email", "=", validData.data.clientEmail[i].email)
        .where("participant2Email", "=", validData.data.userEmail)
        .executeTakeFirst();
      if (!roomOne && !roomTwo) {
        const insertRoom = await SQL.DB.insertInto("rooms")
          .values({
            roomId: uuidv7(),
            participant1Email: validData.data.userEmail,
            participant2Email: validData.data.clientEmail[i].email,
            participant1RoomGivenName: null,
            participant1RoomFamilyName: null,
            participant2RoomGivenName: null,
            participant2RoomFamilyName: null,
            isActive: false,
            creationDate: new Date(),
          })
          .execute();
      }
    }
  } catch (error) {
    return false;
  }
  return true;
}

export async function getRequestsViaEmail(email: string) {
  const requests = await SQL.DB.selectFrom("requests")
    .selectAll()
    .where("requesterEmail", "=", email)
    .execute();
  const submissions = await SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "requests.requestId", "submissions.requestId")
    .select([
      "submissions.submissionId",
      "submissions.requesteeEmail",
      "submissions.status",
      "submissions.title",
      "submissions.grouping",
      "submissions.isRead",
      "submissions.submittedDate",
      "submissions.requestId as requestId",
    ])
    .where("requests.requesterEmail", "=", email)
    .execute();
  return [requests, submissions];
}
