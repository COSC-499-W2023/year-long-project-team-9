import { GroupingState } from "@tanstack/react-table";
import { Grouping, Status, Type } from "./types/status";

// Database interface
export interface Database {
  users: Users;
  requests: Requests;
  submissions: Submissions;
  rooms: Rooms;
  messages: Messages;
  connections: Connections;
  notifications: Notifications;
}

// Users table interface
export interface Users {
  email: string;
  givenName: string;
  familyName: string;
  isLoggedInWithSocialIdentityProvider: boolean;
  isAdmin: boolean;
  profileImage: string;
  preference: string;
  connectionId: string | null;
}

// Requests table interface
export interface Requests {
  requestId: string;
  requestTitle: string;
  requesterEmail: string;
  grouping: Grouping | null;
  description: string;
  blurred: boolean;
  creationDate: Date;
  dueDate: Date;
}

// Submissions table interface
export interface Submissions {
  submissionId: string;
  requesteeEmail: string;
  status: Status;
  title: string | null;
  grouping: GroupingState | null;
  isRead: boolean;
  submittedDate: Date | null;
  requestId: string;
}

// Rooms table interface
export interface Rooms {
  roomId: string;
  participant1Email: string | null;
  participant2Email: string | null;
  participant1RoomGivenName: string | null;
  participant1RoomFamilyName: string | null;
  participant2RoomGivenName: string | null;
  participant2RoomFamilyName: string | null;
  isActive: boolean;
  creationDate: Date;
}

// Messages table interface
export interface Messages {
  messageId: string;
  roomId: string;
  senderEmail: string;
  creationDate: Date;
  messageContent: string;
  isRead: boolean;
}

// Connections table interface
export interface Connections {
  connectionId: string;
}

// Notifications table interface
export interface Notifications {
  notificationId: string;
  userEmail: string;
  type: Type;
  referenceId: string;
  creationDate: Date;
  content: string;
  isRead: boolean;
  isTrashed: boolean;
}
