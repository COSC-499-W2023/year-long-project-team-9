import { Kysely, sql } from "kysely";

// const uuid = uuidv4()

/**
 * @param {Kysely<any>} db
 */
export async function up(db) {
  await db
    .insertInto("users")
    .values([
      {
        email: "imightbejan@gmail.com",
        givenName: "Jan-Yaeger",
        familyName: "Dhillon",
        isLoggedInWithSocialIdentityProvider: false,
        isAdmin: true,
        profileImage: null,
        preference: "{}",
        connectionId: null,
      },
      {
        email: "soren.is@hotmail.ca",
        givenName: "Soren",
        familyName: "Stenback",
        isLoggedInWithSocialIdentityProvider: false,
        isAdmin: true,
        profileImage: null,
        preference: "{}",
        connectionId: null,
      },
      {
        email: "ansivana@gmail.com",
        givenName: "Baz",
        familyName: "Sivakua",
        isLoggedInWithSocialIdentityProvider: false,
        isAdmin: true,
        profileImage: null,
        preference: "{}",
        connectionId: null,
      },
      {
        email: "bakar.a.muhammad@gmail.com",
        givenName: "Muhammad",
        familyName: "Bakar",
        isLoggedInWithSocialIdentityProvider: false,
        isAdmin: false,
        profileImage: null,
        preference: "{}",
        connectionId: null,
      },
    ])
    .execute();

  await db
    .insertInto("requests")
    .values([
      {
        requestId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
        requestTitle: "Spanish Lesson 1",
        requesterEmail: "imightbejan@gmail.com",

        grouping: null,
        description: "Send video of you speaking section 1 from the textbook",
        blurred: true,
        creationDate: new Date("2023-12-12"),
        dueDate: new Date("2024-04-02"),
      },
      {
        requestId: "092c4718-bde0-4a31-9471-7d5a459b4e22",
        requestTitle: "Math Lesson 2",
        requesterEmail: "imightbejan@gmail.com",

        grouping: null,
        description:
          "Send video of you reading out section 10 from the textbook",
        blurred: true,
        creationDate: new Date("2023-09-09"),
        dueDate: new Date("2024-02-02"),
      },
      {
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
        requestTitle: "AWS Job Interview",
        requesterEmail: "ansivana@gmail.com",

        grouping: null,
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        dueDate: new Date("2024-03-02"),
      },
      {
        requestId: "c2c762f7-80f7-4b06-a3d6-769a07df6793",
        requestTitle: "AWS Job Interview Stage 2",
        requesterEmail: "ansivana@gmail.com",

        grouping: null,
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        creationDate: new Date("2024-01-01"),
        dueDate: new Date("2024-03-02"),
      },
      {
        requestId: "df6a3872-7210-49fc-b4d8-fc78631d95f5",
        requestTitle: "AWS Job Interview Stage 3",
        requesterEmail: "ansivana@gmail.com",

        grouping: null,
        description:
          "What are you looking for from a new position? Are you considering other positions in other companies? What is the professional achievement you're most proud of? What kind of working environment do you work best in?",
        blurred: true,
        dueDate: new Date("2024-05-02"),
      },
      {
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
        requestTitle: "Test",
        requesterEmail: "bakar.a.muhammad@gmail.com",

        grouping: null,
        description: "This is a test",
        blurred: false,
        dueDate: new Date("2024-01-02"),
      },
    ])
    .execute();

  await db
    .insertInto("submissions")
    .values([
      {
        submissionId: "6b82a368-dd60-49f4-93fe-c6f8c9a05e1b",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "TODO",

        isRead: false,
        submittedDate: null,
        requestId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
      },
      {
        submissionId: "0c49d690-a96f-445a-bcbe-a964dc0e7e21",
        requesteeEmail: "ansivana@gmail.com",
        status: "PROCESSING",

        isRead: true,
        submittedDate: null,
        requestId: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
      },
      {
        submissionId: "674b2c03-210e-46e3-b71a-dccbb4d5a079",
        requesteeEmail: "ansivana@gmail.com",
        status: "ARCHIVED",

        isRead: false,
        submittedDate: null,
        requestId: "092c4718-bde0-4a31-9471-7d5a459b4e22",
      },
      {
        submissionId: "b8807202-e0b8-4e3f-aa22-d8b8264139a5",
        requesteeEmail: "bakar.a.muhammad@gmail.com",
        status: "COMPLETED",

        isRead: false,
        submittedDate: null,
        requestId: "092c4718-bde0-4a31-9471-7d5a459b4e22",
      },
      {
        submissionId: "8224741d-a388-4bf9-ba35-6a00c01a5ad8",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "FAILED",

        isRead: false,
        submittedDate: null,
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submissionId: "e1e25c2a-0a02-4cc6-9922-414755eb5e7f",
        requesteeEmail: "bakar.a.muhammad@gmail.com",
        status: "PROCESSING",

        isRead: true,
        submittedDate: null,
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submissionId: "bc94f9bd-dd57-4a7a-a935-6c76f3113212",
        requesteeEmail: "imightbejan@gmail.com",
        status: "TODO",

        isRead: true,
        submittedDate: null,
        requestId: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submissionId: "2c48358c-b0bf-4826-bd28-aa4e54a67b4a",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "PROCESSING",

        isRead: false,
        submittedDate: null,
        requestId: "c2c762f7-80f7-4b06-a3d6-769a07df6793",
      },
      {
        submissionId: "ce03c21a-a659-412e-b25a-baa4a3d1b5e8",
        requesteeEmail: "bob@gamil.com",
        status: "TODO",

        isRead: false,
        submittedDate: null,
        requestId: "df6a3872-7210-49fc-b4d8-fc78631d95f5",
      },
      {
        submissionId: "ac837adb-2994-4769-9d84-d34581b24ad4",
        requesteeEmail: "soren.is@hotmail.ca",
        status: "TODO",

        isRead: true,
        submittedDate: null,
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
      {
        submissionId: "cf780978-c459-406b-b6fc-a11ab5d1500a",
        requesteeEmail: "imightbejan@gmail.com",
        status: "COMPLETED",

        isRead: false,
        submittedDate: null,
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
      {
        submissionId: "37594b67-e2da-4a87-b97b-c86f65b3c731",
        requesteeEmail: "ansivana@gmail.com",
        status: "PROCESSING",

        isRead: true,
        submittedDate: null,
        requestId: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
    ])
    .execute();

  await db
    .insertInto("rooms")
    .values([
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        participant1Email: "imightbejan@gmail.com",
        participant2Email: "soren.is@hotmail.ca",
        participant1RoomGivenName: "Jan-Yaeger",
        participant1RoomFamilyName: "Dhillon",
        participant2RoomGivenName: "Soren",
        participant2RoomFamilyName: "Stenback",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        participant1Email: "imightbejan@gmail.com",
        participant2Email: "ansivana@gmail.com",
        participant1RoomGivenName: "Jan-Yaeger",
        participant1RoomFamilyName: "Dhillon",
        participant2RoomGivenName: "Baz",
        participant2RoomFamilyName: "Sivakua",
        creationDate: new Date("2023-12-12"),
        isActive: true,
      },
      {
        roomId: "bd240dd9-5ff4-46df-9273-d216685b3683",
        participant1Email: "imightbejan@gmail.com",
        participant2Email: "bakar.a.muhammad@gmail.com",
        participant1RoomGivenName: "Jan-Yaeger",
        participant1RoomFamilyName: "Dhillon",
        participant2RoomGivenName: "Muhammad",
        participant2RoomFamilyName: "Bakar",
        creationDate: new Date("2023-09-09"),
        isActive: true,
      },
      {
        roomId: "dac6ccb4-d0a2-43cc-a2a5-d0d04205ab99",
        participant1Email: "ansivana@gmail.com",
        participant2Email: "bob@gamil.com",
        participant1RoomGivenName: "Baz",
        participant1RoomFamilyName: "Sivakua",
        participant2RoomGivenName: null,
        participant2RoomFamilyName: null,
        isActive: false,
      },
    ])
    .execute();

  await db
    .insertInto("messages")
    .values([
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        messageId: "bf6687d7-a0a2-408a-83ec-a61fd2c2dbd1",
        senderEmail: "imightbejan@gmail.com",
        creationDate: new Date("2024.01.30 00:00:01"),
        messageContent: "Hello",
        isRead: true,
      },
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        senderEmail: "soren.is@hotmail.ca",
        messageId: "3a939655-202f-4208-8a14-0a27eb3c56a6",
        creationDate: new Date("2024.01.30 00:00:59"),
        messageContent: "Hello",
        isRead: true,
      },
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        senderEmail: "imightbejan@gmail.com",
        messageId: "763a3bc3-a2ce-42fb-814d-8c3f7845a9a0",
        creationDate: new Date("2024.01.30 00:01:49"),
        messageContent: "Bey",
        isRead: true,
      },
      {
        roomId: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        senderEmail: "soren.is@hotmail.ca",
        messageId: "c23da8c8-2886-4c7f-8d01-fa8becf2d4bd",
        creationDate: new Date("2024.01.30 00:40:01"),
        messageContent: "Bey",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "ansivana@gmail.com",
        messageId: "68dd44a1-e7c4-4737-a9b8-244e8d8a0611",
        creationDate: new Date("2024.02.3 00:40:01"),
        messageContent: "Hey",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "ansivana@gmail.com",
        messageId: "3f24294a-ce65-40a1-af7d-94b63a2a605b",
        creationDate: new Date("2024.02.3 00:41:01"),
        messageContent: "How are you?",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "imightbejan@gmail.com",
        messageId: "e4e086c4-813b-442c-82e7-8803e98433bc",
        creationDate: new Date("2024.02.3 00:42:01"),
        messageContent: "good",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "imightbejan@gmail.com",
        messageId: "f3d17592-2262-4082-927d-259793795377",
        creationDate: new Date("2024.02.3 00:43:01"),
        messageContent: "hbu?",
        isRead: true,
      },
      {
        roomId: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        senderEmail: "ansivana@gmail.com",
        messageId: "9fa8f751-d3ba-4701-87b7-cb0ec9094ad3",
        creationDate: new Date("2024.02.3 00:44:01"),
        messageContent: "fine",
        isRead: false,
      },
    ])
    .execute();
}

/**
 * @param {Kysely<any>} db
 */
export async function down(db) {
  // Order matters
  const deleteFromMessages = await db.deleteFrom("messages").execute();
  const deleteFromRoom = await db.deleteFrom("rooms").execute();
  const deleteFromSubmissions = await db.deleteFrom("submissions").execute();
  const deleteFromRequests = await db.deleteFrom("requests").execute();
  const deleteFromUsers = await db.deleteFrom("users").execute();

  deleteFromUsers()
  deleteFromRequests()
  deleteFromSubmissions()
  deleteFromRoom()
  deleteFromMessages()
}
