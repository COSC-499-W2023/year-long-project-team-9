import { Kysely, sql } from "kysely";

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
        profile_image: "NULL",
        preference: "{}",
      },
      {
        email: "soren.is@hotmail.ca",
        given_name: "Soren",
        family_name: "Stenback",
        is_logged_in_with_social_identity_provider: false,
        is_admin: true,
        profile_image: "NULL",
        preference: "{}",
      },
      {
        email: "ansivana@gmail.com",
        given_name: "Baz",
        family_name: "Sivakua",
        is_logged_in_with_social_identity_provider: false,
        is_admin: true,
        profile_image: "NULL",
        preference: "{}",
      },
      {
        email: "bakar.a.muhammad@gmail.com",
        given_name: "Muhammad",
        family_name: "Bakar",
        is_logged_in_with_social_identity_provider: false,
        is_admin: false,
        profile_image: "NULL",
        preference: "{}",
      },
    ])
    .execute();

  await db
    .insertInto("requests")
    .values([
      {
        request_id: 1,
        request_title: "Spanish Lesson 1",
        requester_email: "imightbejan@gmail.com",
        is_starred: false,
        grouping: "NULL",
        description: "Send video of you speaking section 1 from the textbook",
        blurred: true,
        creation_date: new Date("2023-12-12"),
        due_date: new Date("2024-04-02"),
      },
      {
        request_id: 2,
        request_title: "Math Lesson 2",
        requester_email: "imightbejan@gmail.com",
        is_starred: false,
        grouping: "NULL",
        description:
          "Send video of you reading out section 10 from the textbook",
        blurred: true,
        creation_date: new Date("2023-09-09"),
        due_date: new Date("2024-02-02"),
      },
      {
        request_id: 3,
        request_title: "AWS Job Interview",
        requester_email: "ansivana@gmail.com",
        is_starred: true,
        grouping: "NULL",
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        due_date: new Date("2024-03-02"),
      },
      {
        request_id: 4,
        request_title: "AWS Job Interview Stage 2",
        requester_email: "ansivana@gmail.com",
        is_starred: true,
        grouping: "NULL",
        description:
          "Please answer the following: Tell me about yourself. Walk me through your resume. How did you hear about this position? Why do you want to work at this company? Why do you want this job? Why should we hire you? What can you bring to the company? What are your greatest strengths?",
        blurred: true,
        creation_date: new Date("2024-01-01"),
        due_date: new Date("2024-03-02"),
      },
      {
        request_id: 5,
        request_title: "AWS Job Interview Stage 3",
        requester_email: "ansivana@gmail.com",
        is_starred: true,
        grouping: "NULL",
        description:
          "What are you looking for from a new position? Are you considering other positions in other companies? What is the professional achievement you're most proud of? What kind of working environment do you work best in?",
        blurred: true,
        due_date: new Date("2024-05-02"),
      },
      {
        request_id: 6,
        request_title: "Test",
        requester_email: "bakar.a.muhammad@gmail.com",
        is_starred: true,
        grouping: "NULL",
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
        submission_id: 1,
        requestee_email: "soren.is@hotmail.ca",
        is_completed: "NULL",
        is_starred: true,
        is_read: false,
        submitted_date: null,
        request_id: 1,
      },
      {
        submission_id: 2,
        requestee_email: "ansivana@gmail.com",
        is_completed: "NULL",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: 1,
      },
      {
        submission_id: 3,
        requestee_email: "ansivana@gmail.com",
        is_completed: "NULL",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: 2,
      },
      {
        submission_id: 4,
        requestee_email: "bakar.a.muhammad@gmail.com",
        is_completed: "NULL",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: 2,
      },
      {
        submission_id: 5,
        requestee_email: "soren.is@hotmail.ca",
        is_completed: "NULL",
        is_starred: true,
        is_read: false,
        submitted_date: null,
        request_id: 3,
      },
      {
        submission_id: 6,
        requestee_email: "bakar.a.muhammad@gmail.com",
        is_completed: "NULL",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: 3,
      },
      {
        submission_id: 7,
        requestee_email: "imightbejan@gmail.com",
        is_completed: "NULL",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: 3,
      },
      {
        submission_id: 8,
        requestee_email: "soren.is@hotmail.ca",
        is_completed: "NULL",
        is_starred: true,
        is_read: false,
        submitted_date: null,
        request_id: 4,
      },
      {
        submission_id: 9,
        requestee_email: "bob@gamil.com",
        is_completed: "NULL",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: 5,
      },
      {
        submission_id: 10,
        requestee_email: "soren.is@hotmail.ca",
        is_completed: "NULL",
        is_starred: false,
        is_read: true,
        submitted_date: null,
        request_id: 6,
      },
      {
        submission_id: 11,
        requestee_email: "imightbejan@gmail.com",
        is_completed: "NULL",
        is_starred: false,
        is_read: false,
        submitted_date: null,
        request_id: 6,
      },
      {
        submission_id: 12,
        requestee_email: "ansivana@gmail.com",
        is_completed: "NULL",
        is_starred: true,
        is_read: true,
        submitted_date: null,
        request_id: 6,
      },
    ])
    .execute();

  await db
    .insertInto("rooms")
    .values([
      {
        room_id: 1,
        connection_id: "NULL",
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
        room_id: 2,
        connection_id: "NULL",
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
        room_id: 3,
        connection_id: "NULL",
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
        room_id: 4,
        connection_id: "NULL",
        participant_1_email: "ansivana@gmail.com",
        participant_2_email: "bob@gamil.com",
        participant_1_room_given_name: "Baz",
        participant_1_room_family_name: "Sivakua",
        participant_2_room_given_name: "NULL",
        participant_2_room_family_name: "NULL",
        is_active: false,
      },
    ])
    .execute();

  await db
    .insertInto("messages")
    .values([
      {
        room_id: 1,
        sender_email: "imightbejan@gmail.com",
        creation_date: new Date("2024.01.30 00:00:01"),
        message_content: "Hello",
        is_read: true,
      },
      {
        room_id: 1,
        sender_email: "soren.is@hotmail.ca",
        creation_date: new Date("2024.01.30 00:00:59"),
        message_content: "Hello",
        is_read: true,
      },
      {
        room_id: 1,
        sender_email: "imightbejan@gmail.com",
        creation_date: new Date("2024.01.30 00:01:49"),
        message_content: "Bey",
        is_read: true,
      },
      {
        room_id: 1,
        sender_email: "soren.is@hotmail.ca",
        creation_date: new Date("2024.01.30 00:40:01"),
        message_content: "Bey",
        is_read: true,
      },
      {
        room_id: 2,
        sender_email: "ansivana@gmail.com",
        creation_date: new Date("2024.02.3 00:40:01"),
        message_content: "Hey",
        is_read: true,
      },
      {
        room_id: 2,
        sender_email: "ansivana@gmail.com",
        creation_date: new Date("2024.02.3 00:41:01"),
        message_content: "How are you?",
        is_read: true,
      },
      {
        room_id: 2,
        sender_email: "imightbejan@gmail.com",
        creation_date: new Date("2024.02.3 00:42:01"),
        message_content: "good",
        is_read: true,
      },
      {
        room_id: 2,
        sender_email: "imightbejan@gmail.com",
        creation_date: new Date("2024.02.3 00:43:01"),
        message_content: "hbu?",
        is_read: true,
      },
      {
        room_id: 2,
        sender_email: "ansivana@gmail.com",
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
  const deleteFromUsers = await db.deleteFrom("users").execute();
  const deleteFromRequests = await db.deleteFrom("requests").execute();
  const deleteFromSubmissions = await db.deleteFrom("submissions").execute();
  const deleteFromRoom = await db.deleteFrom("rooms").execute();
  const deleteFromMessages = await db.deleteFrom("messages").execute();
}
