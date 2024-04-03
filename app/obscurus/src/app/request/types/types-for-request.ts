import { Status } from "@obscurus/database/src/types/status";
import { GroupingState } from "@tanstack/react-table";

export type SubmissionsForRequest = {
  submissionId: string;
  requesteeEmail: string;
  status: Status;
  title: string | null;
  grouping: GroupingState | null;
  isRead: boolean;
  submittedDate: Date | null;
  requestId: string;
  url: string | null;
};
