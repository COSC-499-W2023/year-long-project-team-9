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
        given_name: "Jan-Yaeger",
        family_name: "Dhillon",
        is_logged_in_with_social_identity_provider: false,
        is_admin: true,
        profile_image: null,
        preference: "{}",
      },
      {
        email: "soren.is@hotmail.ca",
        given_name: "Soren",
        family_name: "Stenback",
        is_logged_in_with_social_identity_provider: false,
        is_admin: true,
        profile_image: null,
        preference: "{}",
      },
      {
        email: "ansivana@gmail.com",
        given_name: "Baz",
        family_name: "Sivakua",
        is_logged_in_with_social_identity_provider: false,
        is_admin: true,
        profile_image: null,
        preference: "{}",
      },
      {
        email: "bakar.a.muhammad@gmail.com",
        given_name: "Muhammad",
        family_name: "Bakar",
        is_logged_in_with_social_identity_provider: false,
        is_admin: false,
        profile_image: null,
        preference: "{}",
      },
    ])
    .execute();

  await db
    .insertInto("requests")
    .values([
      {
        request_id: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
        request_title: "Spanish Lesson 1",
        requester_email: "imightbejan@gmail.com",
        is_starred: false,
        grouping: null,
        description: "Send video of you speaking section 1 from the textbook",
        blurred: true,
        creation_date: new Date("2023-12-12"),
        due_date: new Date("2024-04-02"),
      },
      {
        request_id: "092c4718-bde0-4a31-9471-7d5a459b4e22",
        request_title: "Math Lesson 2",
        requester_email: "imightbejan@gmail.com",
        is_starred: false,
        grouping: null,
        description:
          "Send video of you reading out section 10 from the textbook",
        blurred: true,
        creation_date: new Date("2023-09-09"),
        due_date: new Date("2024-02-02"),
      },
      {
        request_id: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
        request_title: "AWS Job Interview",
        requester_email: "ansivana@gmail.com",
        is_starred: true,
        grouping: null,
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        due_date: new Date("2024-03-02"),
      },
      {
        request_id: "c2c762f7-80f7-4b06-a3d6-769a07df6793",
        request_title: "AWS Job Interview Stage 2",
        requester_email: "ansivana@gmail.com",
        is_starred: true,
        grouping: null,
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        creation_date: new Date("2024-01-01"),
        due_date: new Date("2024-03-02"),
      },
      {
        request_id: "df6a3872-7210-49fc-b4d8-fc78631d95f5",
        request_title: "AWS Job Interview Stage 3",
        requester_email: "ansivana@gmail.com",
        is_starred: true,
        grouping: null,
        description:
          "What are you looking for from a new position? Are you considering other positions in other companies? What is the professional achievement you're most proud of? What kind of working environment do you work best in?",
        blurred: true,
        due_date: new Date("2024-05-02"),
      },
      {
        request_id: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
        request_title: "Test",
        requester_email: "bakar.a.muhammad@gmail.com",
        is_starred: true,
        grouping: null,
        description: "This is a test",
        blurred: false,
        due_date: new Date("2024-01-02"),
      },
    ])
    .execute();

  await db
    .insertInto("submissions")
    .values([
      {
        submission_id: "6b82a368-dd60-49f4-93fe-c6f8c9a05e1b",
        requestee_email: "soren.is@hotmail.ca",
        status: "todo",
        is_starred: true,
        is_read: false,
        submitted_date: null,
        request_id: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
      },
      {
        submission_id: "0c49d690-a96f-445a-bcbe-a964dc0e7e21",
        requestee_email: "ansivana@gmail.com",
        status: "todo",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: "f50a22fb-f9ce-4c83-8954-60d6aa4dba3b",
      },
      {
        submission_id: "674b2c03-210e-46e3-b71a-dccbb4d5a079",
        requestee_email: "ansivana@gmail.com",
        status: "todo",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: "092c4718-bde0-4a31-9471-7d5a459b4e22",
      },
      {
        submission_id: "b8807202-e0b8-4e3f-aa22-d8b8264139a5",
        requestee_email: "bakar.a.muhammad@gmail.com",
        status: "todo",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: "092c4718-bde0-4a31-9471-7d5a459b4e22",
      },
      {
        submission_id: "8224741d-a388-4bf9-ba35-6a00c01a5ad8",
        requestee_email: "soren.is@hotmail.ca",
        status: "todo",
        is_starred: true,
        is_read: false,
        submitted_date: null,
        request_id: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submission_id: "e1e25c2a-0a02-4cc6-9922-414755eb5e7f",
        requestee_email: "bakar.a.muhammad@gmail.com",
        status: "todo",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submission_id: "bc94f9bd-dd57-4a7a-a935-6c76f3113212",
        requestee_email: "imightbejan@gmail.com",
        status: "todo",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: "7eca082e-7286-4e49-a5f0-0d2cf4264326",
      },
      {
        submission_id: "2c48358c-b0bf-4826-bd28-aa4e54a67b4a",
        requestee_email: "soren.is@hotmail.ca",
        status: "todo",
        is_starred: true,
        is_read: false,
        submitted_date: null,
        request_id: "c2c762f7-80f7-4b06-a3d6-769a07df6793",
      },
      {
        submission_id: "ce03c21a-a659-412e-b25a-baa4a3d1b5e8",
        requestee_email: "bob@gamil.com",
        status: "todo",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: "df6a3872-7210-49fc-b4d8-fc78631d95f5",
      },
      {
        submission_id: "ac837adb-2994-4769-9d84-d34581b24ad4",
        requestee_email: "soren.is@hotmail.ca",
        status: "todo",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
      {
        submission_id: "cf780978-c459-406b-b6fc-a11ab5d1500a",
        requestee_email: "imightbejan@gmail.com",
        status: "todo",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
      {
        submission_id: "37594b67-e2da-4a87-b97b-c86f65b3c731",
        requestee_email: "ansivana@gmail.com",
        status: "todo",
        is_starred: true,
        is_read: true,
        submitted_date: null,
        request_id: "be4b5ba1-777d-4a7e-a54a-8fc5f2f14c92",
      },
    ])
    .execute();

  await db
    .insertInto("rooms")
    .values([
      {
        room_id: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        connection_id: null,
        participant_1_email: "imightbejan@gmail.com",
        participant_2_email: "soren.is@hotmail.ca",
        participant_1_room_given_name: "Jan-Yaeger",
        participant_1_room_family_name: "Dhillon",
        participant_2_room_given_name: "Soren",
        participant_2_room_family_name: "Stenback",
        creation_date: new Date("2023-12-12"),
        is_active: true,
      },
      {
        room_id: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        connection_id: null,
        participant_1_email: "imightbejan@gmail.com",
        participant_2_email: "ansivana@gmail.com",
        participant_1_room_given_name: "Jan-Yaeger",
        participant_1_room_family_name: "Dhillon",
        participant_2_room_given_name: "Baz",
        participant_2_room_family_name: "Sivakua",
        creation_date: new Date("2023-12-12"),
        is_active: true,
      },
      {
        room_id: "bd240dd9-5ff4-46df-9273-d216685b3683",
        connection_id: null,
        participant_1_email: "imightbejan@gmail.com",
        participant_2_email: "bakar.a.muhammad@gmail.com",
        participant_1_room_given_name: "Jan-Yaeger",
        participant_1_room_family_name: "Dhillon",
        participant_2_room_given_name: "Muhammad",
        participant_2_room_family_name: "Bakar",
        creation_date: new Date("2023-09-09"),
        is_active: true,
      },
      {
        room_id: "dac6ccb4-d0a2-43cc-a2a5-d0d04205ab99",
        connection_id: null,
        participant_1_email: "ansivana@gmail.com",
        participant_2_email: "bob@gamil.com",
        participant_1_room_given_name: "Baz",
        participant_1_room_family_name: "Sivakua",
        participant_2_room_given_name: null,
        participant_2_room_family_name: null,
        is_active: false,
      },
    ])
    .execute();

  await db
    .insertInto("messages")
    .values([
      {
        room_id: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        message_id: "bf6687d7-a0a2-408a-83ec-a61fd2c2dbd1",
        sender_email: "imightbejan@gmail.com",
        creation_date: new Date("2024.01.30 00:00:01"),
        message_content: "Hello",
        is_read: true,
      },
      {
        room_id: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        sender_email: "soren.is@hotmail.ca",
        message_id: "3a939655-202f-4208-8a14-0a27eb3c56a6",
        creation_date: new Date("2024.01.30 00:00:59"),
        message_content: "Hello",
        is_read: true,
      },
      {
        room_id: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        sender_email: "imightbejan@gmail.com",
        message_id: "763a3bc3-a2ce-42fb-814d-8c3f7845a9a0",
        creation_date: new Date("2024.01.30 00:01:49"),
        message_content: "Bey",
        is_read: true,
      },
      {
        room_id: "01b3f0b0-2c27-4ad7-86e5-ce04bcd9cd48",
        sender_email: "soren.is@hotmail.ca",
        message_id: "c23da8c8-2886-4c7f-8d01-fa8becf2d4bd",
        creation_date: new Date("2024.01.30 00:40:01"),
        message_content: "Bey",
        is_read: true,
      },
      {
        room_id: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        sender_email: "ansivana@gmail.com",
        message_id: "68dd44a1-e7c4-4737-a9b8-244e8d8a0611",
        creation_date: new Date("2024.02.3 00:40:01"),
        message_content: "Hey",
        is_read: true,
      },
      {
        room_id: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        sender_email: "ansivana@gmail.com",
        message_id: "3f24294a-ce65-40a1-af7d-94b63a2a605b",
        creation_date: new Date("2024.02.3 00:41:01"),
        message_content: "How are you?",
        is_read: true,
      },
      {
        room_id: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        sender_email: "imightbejan@gmail.com",
        message_id: "e4e086c4-813b-442c-82e7-8803e98433bc",
        creation_date: new Date("2024.02.3 00:42:01"),
        message_content: "good",
        is_read: true,
      },
      {
        room_id: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        sender_email: "imightbejan@gmail.com",
        message_id: "f3d17592-2262-4082-927d-259793795377",
        creation_date: new Date("2024.02.3 00:43:01"),
        message_content: "hbu?",
        is_read: true,
      },
      {
        room_id: "8c0ea510-5870-41a0-a01a-dbf5cf2b7b3b",
        sender_email: "ansivana@gmail.com",
        message_id: "9fa8f751-d3ba-4701-87b7-cb0ec9094ad3",
        creation_date: new Date("2024.02.3 00:44:01"),
        message_content: "fine",
        is_read: false,
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
}
