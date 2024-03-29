import { z } from "zod";

import { Status } from "stack/database/src/types/status";
import { GroupingState } from "@tanstack/react-table";

export const SubmissionSchema = z.object({
  submissionId: z.string(),
  requesteeEmail: z.string().default("NULL"),
  status: z.custom<Status>().default("TODO"),
  title: z.string().nullable(),
  isRead: z.boolean(),
  grouping: z.custom<GroupingState>(),
  submittedDate:  z.date().nullable().or(z.string().nullable()),
  requestId: z.string(),
});

export type SubmissionsZodType = z.infer<typeof SubmissionSchema>;
