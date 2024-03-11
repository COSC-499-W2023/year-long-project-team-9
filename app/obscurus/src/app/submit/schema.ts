import { z } from "zod";

import { Status } from "stack/database/src/types/status";
import { GroupingState } from "@tanstack/react-table";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const SubmissionSchema = z.object({
  submissionId: z.string(),
  requesteeEmail: z.string().default("NULL"),
  status: z.custom<Status>().default("TODO"),
  title: z.string().nullable(),
  isRead: z.boolean(),
  grouping: z.custom<GroupingState>(),
  submittedDate:  z.date().nullable(),
  requestId: z.string(),
});

export type SubmissionsZodType = z.infer<typeof SubmissionSchema>;
