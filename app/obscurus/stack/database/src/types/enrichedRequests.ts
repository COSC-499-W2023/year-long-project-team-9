import { GroupingState } from "@tanstack/react-table";
import { Grouping, Status } from "./status";

export interface UserData {
  givenName: string;
  familyName: string;
  profileImage: string | null;
}

export interface SubmissionData {
  submissionId: string;
  requesteeEmail: string;
  status: Status;
  title: string | null;
  grouping: GroupingState | null;
  isRead: boolean;
  submittedDate: Date | null;
  requestId: string;
  requestee: UserData;
}

export interface RequestData {
  requestId: string;
  requestTitle: string;
  requesterEmail: string;
  description: string;
  blurred: boolean;
  grouping: Grouping;
  creationDate: Date;
  dueDate: Date;
  submissions: SubmissionData[];
  requester: UserData;
}

export type EnrichedRequests = RequestData;
