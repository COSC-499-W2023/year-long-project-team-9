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
  request_id: number;
  request_title: string;
  requester_email: string;
  is_starred: boolean;
  grouping: string;
  description: string;
  blurred: boolean;
  creation_date: Date;
  due_date: Date;
}
{
  /*Submissions table interace*/
}
export interface submissions {
  submission_id: number;
  requestee_email: string;
  is_completed: string;
  is_starred: boolean;
  grouping: string;
  is_read: boolean;
  submitted_date: Date;
  request_id: number;
}
{
  /*Rooms table interace*/
}
export interface rooms {
  room_id: number;
  connection_id: string;
  participant_1_email: string;
  participant_2_email: string;
  participant_1_room_given_name: string;
  participant_1_room_family_name: string;
  participant_2_room_given_name: string;
  participant_2_room_family_name: string;
  is_active: boolean;
  creation_date: Date;
}
{
  /*Messages table interace*/
}
export interface messages {
  message_id: number;
  room_id: number;
  sender_email: string;
  creation_date: Date;
  message_content: string;
  is_read: boolean;
}
