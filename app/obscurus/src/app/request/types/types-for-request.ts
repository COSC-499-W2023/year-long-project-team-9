import { Status } from "@obscurus/database/src/types/status";
import { GroupingState } from "@tanstack/react-table";
import { z } from "zod";

export interface SubmissionsForRequest {
  submissionId: string;
  requesteeEmail: string;
  status: Status;
  title: string | null;
  grouping: GroupingState | null;
  isRead: boolean;
  submittedDate: Date | null;
  requestId: string;
  url: string | null;
}

export const SubmissionsForRequestSchema = z.object({
  submissionId: z.string(),
  requesteeEmail: z.string(),
  status: z.string(),
  title: z.string().nullable(),
  grouping: z.string().nullable(),
  isRead: z.boolean(),
  submittedDate: z.string().or(z.date()).nullable(),
  requestId: z.string(),
  url: z.string().nullable(),
});
