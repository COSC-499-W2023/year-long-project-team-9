{
  /*Database interace*/
}
export interface Database {
  users: Users;
  requests: Requests;
  submissions: Submissions;
  rooms: Rooms;
  messages: Messages;
}
{
  /*Users table interace*/
}
export interface Users {
  sub: string;
  email: string;
  given_name: string;
  family_name: string;
  timezone: string;
  language: string;
  is_logged_in_with_social_identity_provider: boolean;
  is_admin: boolean;
  profile_image: string;
}
{
  /*Requests table interace*/
}
export interface Requests {
  request_id: string;
  request_title: string;
  requester_sub: string;
  description: string;
  video_processing: boolean;
  due_date: Date;
  video_language: string;
  creation_date: Date;
  read: boolean;
}
{
  /*Submissions table interace*/
}
export interface Submissions {
  submission_id: number;
  requestee_email: string;
  is_completed: string;
  submitted_date: Date;
  request_id: number;
}
{
  /*Rooms table interace*/
}
export interface Rooms {
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
export interface Messages {}
