{/*Database interace*/}
export interface Database {
    users: Users;
    requests: Requests;
    rooms: Rooms;
    images: Images;
    messages: Messages;
}
{/*Users table interace*/}
export interface Users {
    sub: string;
    email: string;
    given_name: string;
    family_name: string;
    birthday: Date;
    timezone: string;
    language: string;
    is_logged_in_with_social_identity_provider: boolean;
    is_admin: boolean;
}
{/*Requests table interace*/}
export interface Requests {
    request_id: number;
    request_title: string;
    requester_sub: string;
    requestees_email: string;
    description: string;
    video_processing: boolean;
    due_date: Date;
    video_language: string;
    creation_date: Date;
}
{/*Rooms table interace*/}
export interface Rooms {
    room_id: number;
    request_id: number;
    room_name: string;
    connection_id: string;
    number_of_participants: number;
    participants_subs: string;
    creation_date: Date;
}
{/*Images table interace*/}
export interface Images {
    sub: string;
    image: string;
}
{/*Messages table interace*/}
export interface Messages {
    message_id: number;
    chatroom_id: number;
    sender_sub: string;
    date_time: Date;
    message_content: string;
}