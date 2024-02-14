import { GroupingState } from "@tanstack/react-table";

{
  /*Database interace*/
}
export interface Database {
  users: users;
  requests: requests;
  submissions: submissions;
  rooms: rooms;
  messages: messages;
}
{
  /*Users table interace*/
}
export interface users {
  email: string;
  given_name: string;
  family_name: string;
  is_logged_in_with_social_identity_provider: boolean;
  is_admin: boolean;
  profile_image: string;
  preference: string;
}
{
  /*Requests table interace*/
}
export interface requests {
  request_id: string;
  request_title: string;
  requester_email: string;
  is_starred: boolean;
  grouping: string | null;
  description: string;
  blurred: boolean;
  creation_date: Date;
  due_date: Date;
}
{
  /*Submissions table interace*/
}
export interface submissions {
  submission_id: string;
  requestee_email: string;
  status: string | null;
  title: string;
  is_starred: boolean;
  grouping: string | null;
  is_read: boolean;
  submitted_date: Date | null;
  request_id: string;
}
{
  /*Rooms table interace*/
}
export interface rooms {
  room_id: string;
  connection_id: string | null;
  participant_1_email: string | null;
  participant_2_email: string | null;
  participant_1_room_given_name: string | null;
  participant_1_room_family_name: string | null;
  participant_2_room_given_name: string | null;
  participant_2_room_family_name: string | null;
  is_active: boolean;
  creation_date: Date;
}
{
  /*Messages table interace*/
}
export interface messages {
  message_id: string;
  room_id: string;
  sender_email: string;
  creation_date: Date;
  message_content: string;
  is_read: boolean;
}
