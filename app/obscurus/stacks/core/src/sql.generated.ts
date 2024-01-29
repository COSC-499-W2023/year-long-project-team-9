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
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  birthdate: Date;
  timezone: string;
  language: string;
  is_logged_in_with_social_identity_provider: boolean;
  is_admin: boolean;
  profile_image: string;
}
{
  /*Requests table interace*/
}
export interface requests {
  request_id: number;
  request_title: string;
  requester_sub: string;
  description: string;
  video_processing: boolean;
  due_date: Date;
  video_language: string;
  creation_date: Date;
}
{
  /*Submissions table interace*/
}
export interface submissions {
  submission_id: number;
  requestee_email: string;
  is_completed: string;
  due_date: Date;
  submitted_date: Date;
  request_id: number;
}
{
  /*Rooms table interace*/
}
export interface rooms {
  room_id: number;
  connection_id: number;
  participant1_email: string;
  participant1_sub: string;
  participant2_email: string;
  participant2_sub: string;
  participant1_room_name: string;
  participant2_room_name: string;
  is_active: boolean;
  creation_date: Date;
}
{
  /*Messages table interace*/
}
export interface messages {}
