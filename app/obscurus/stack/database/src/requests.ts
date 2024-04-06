export * as Requests from "./requests";

import { formSchema } from "@/components/CreateRequest";
import { GroupingState } from "@tanstack/react-table";
import { SQL } from "./sql";
import {
  Requests,
  Submissions,
  Rooms,
  Notifications,
  Users,
} from "./sql.generated";
import { uuidv7 } from "uuidv7";
import { sendEmailTextBlockViaNoReply } from "@obscurus/ses/src/sendEmailTextBlockViaNoReply";
import { createFormSchema } from "@/app/request/components/create/form/createFormSchema";
import { EnrichedRequests, RequestData, SubmissionData, UserData } from "./types/enrichedRequests";
import { Grouping } from "./types/status";


export function list() {
  return SQL.DB.selectFrom("requests").selectAll().execute();
}
export function insert(request: Requests) {
  return SQL.DB.insertInto("requests")
    .values({
      requestId: request.requestId,
      requestTitle: request.requestTitle,
      requesterEmail: request.requesterEmail,
      grouping: request.grouping,
      description: request.description,
      blurred: request.blurred,
      creationDate: request.creationDate,
      dueDate: request.dueDate,
    })
    .execute();
}

export function get(request: Requests) {
  return SQL.DB.selectFrom("requests")
    .where("requestId", "=", request.requestId)
    .execute();
}


export async function getRequestsAndSubmissionsByEmail(email: string) {
  const submissionsByUserWithRequestsAndUsers = await SQL.DB.selectFrom("submissions")
    .innerJoin("requests", "requests.requestId", "submissions.requestId")
    .innerJoin("users as requestee", "requestee.email", "submissions.requesteeEmail")
    .innerJoin("users as requester", "requester.email", "requests.requesterEmail")
    .select([
      // Submissions data
      "submissions.submissionId",
      "submissions.requesteeEmail",
      "submissions.status",
      "submissions.title as submissionTitle",
      "submissions.grouping as submissionGrouping",
      "submissions.isRead",
      "submissions.submittedDate",
      "submissions.requestId",
      // Requests data
      "requests.requestId",
      "requests.requestTitle",
      "requests.requesterEmail",
      "requests.description",
      "requests.grouping",
      "requests.blurred",
      "requests.creationDate",
      "requests.dueDate",
      // Requestee user data
      "requestee.givenName as requesteeGivenName",
      "requestee.familyName as requesteeFamilyName",
      "requestee.profileImage as requesteeProfileImage",
      // Requester user data
      "requester.givenName as requesterGivenName",
      "requester.familyName as requesterFamilyName",
      "requester.profileImage as requesterProfileImage",
    ])
    .where("submissions.requesteeEmail", "=", email)
    .where("submissions.status", "!=", "ARCHIVED")
    .where("submissions.status", "!=", "TRASHED")
    .execute();

  return {
    submissionsByUserWithRequestsAndUsers,
  };
}

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
      const newSubmissionID = uuidv7();
      const insertSubmission = await SQL.DB.insertInto("submissions")
        .values({
          submissionId: newSubmissionID,
          requesteeEmail:
            validData.data.clientEmail[i].email.toLocaleLowerCase(),
          status: "TODO",
          title: "null",
          grouping: null,
          isRead: false,
          submittedDate: null,
          requestId: requestID,
        })
        .execute();
      sendEmailTextBlockViaNoReply(
        validData.data.clientEmail[i].email.toLocaleLowerCase(),
        "obscurus - New Submission Request",
        `${validData.data.firstName} ${validData.data.lastName} has requested a video from you.`
      );
      const insertNotifications = await SQL.DB.insertInto("notifications")
        .values({
          notificationId: uuidv7(),
          userEmail: validData.data.clientEmail[i].email,
          type: "SUBMIT",
          referenceId: newSubmissionID,
          creationDate: new Date(),
          content: `New request from ${validData.data.firstName} ${validData.data.lastName}`,
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
        const receiver = await SQL.DB.selectFrom("users")
          .selectAll()
          .where("email", "=", validData.data.clientEmail[i].email)
          .executeTakeFirst();
        let active;
        if (!receiver) {
          active = false;
        } else {
          active = true;
        }
        const insertRoom = await SQL.DB.insertInto("rooms")
          .values({
            roomId: uuidv7(),
            participant1Email: validData.data.userEmail,
            participant2Email: validData.data.clientEmail[i].email,
            isActive: active,
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

export async function archiveRequest(id: string) {
  const archive = await SQL.DB.updateTable("requests")
    .set({ grouping: "ARCHIVED" })
    .where("requestId", "=", id)
    .execute();
}

export async function unarchiveRequest(id: string) {
  const unarchive = await SQL.DB.updateTable("requests")
    .set({ grouping: null })
    .where("requestId", "=", id)
    .execute();
}

export async function trashRequest(id: string) {
  const trash = await SQL.DB.updateTable("requests")
    .set({ grouping: "TRASHED" })
    .where("requestId", "=", id)
    .execute();
}


export async function updateGrouping(requestId: string, grouping: Grouping) {
  await SQL.DB.updateTable("requests")
    .set({ grouping: grouping })
    .where("requestId", "=", requestId)
    .execute();
}


export async function getEnrichedRequestsByEmail(email: string): Promise<EnrichedRequests[]> {
  const requests = await SQL.DB.selectFrom("requests")
  .innerJoin('users as requester', 'requester.email', 'requests.requesterEmail')
  .select([
    'requests.requestId',
    'requests.requestTitle',
    'requests.requesterEmail',
    'requests.description',
    'requests.blurred',
    'requests.grouping',
    'requests.creationDate',
    'requests.dueDate',
    'requester.givenName as requesterGivenName',
    'requester.familyName as requesterFamilyName',
    'requester.profileImage as requesterProfileImage'
  ])
  .where('requests.requesterEmail', '=', email)
  .execute();

  const enrichedRequests = await Promise.all(requests.map(async (request) => {
    const submissions = await SQL.DB.selectFrom("submissions")
      .innerJoin("users as requestee", "requestee.email", "submissions.requesteeEmail")
      .select([
        "submissions.submissionId",
        "submissions.requesteeEmail",
        "submissions.status",
        "submissions.title",
        "submissions.grouping",
        "submissions.isRead",
        "submissions.submittedDate",
        "requestee.givenName as requesteeGivenName",
        "requestee.familyName as requesteeFamilyName",
        "requestee.profileImage as requesteeProfileImage",
      ])
      .where("submissions.requestId", "=", request.requestId)
      .execute();

    const mappedSubmissions: SubmissionData[] = submissions.map(sub => ({
      submissionId: sub.submissionId,
      requesteeEmail: sub.requesteeEmail,
      status: sub.status,
      title: sub.title,
      grouping: sub.grouping,
      isRead: sub.isRead,
      submittedDate: sub.submittedDate,
      requestId: request.requestId,
      requestee: {
        givenName: sub.requesteeGivenName,
        familyName: sub.requesteeFamilyName,
        profileImage: sub.requesteeProfileImage,
      }
    }));

    return {
      requestId: request.requestId,
      requestTitle: request.requestTitle,
      requesterEmail: request.requesterEmail,
      description: request.description,
      blurred: request.blurred,
      grouping: request.grouping,
      creationDate: new Date(request.creationDate),
      dueDate: new Date(request.dueDate),
      submissions: mappedSubmissions,
      requester: {
        givenName: request.requesterGivenName,
        familyName: request.requesterFamilyName,
        profileImage: request.requesterProfileImage,
      }
    } as EnrichedRequests;
  }));

  return enrichedRequests;
}
