import { z } from 'zod';

export const EnrichedSubmissionsSchema = z.object({
  submissionId: z.string(),
  title: z.string().nullable(),
  grouping: z.string().nullable(),
  requesteeEmail: z.string(),
  status: z.enum(['IN PROGRESS', 'COMPLETED', 'FAILED', 'TODO', 'PROCESSING', 'ARCHIVED']),
  isRead: z.boolean(),
  submittedDate: z.date().nullable().or(z.string().nullable()),
  requestId: z.string(),
  requestDetails: z.object({
    requestId: z.string(),
    requestTitle: z.string(),
    requesterEmail: z.string(),
    description: z.string(),
    blurred: z.boolean(),
    grouping: z.string().nullable(),
    creationDate: z.date().or(z.string()),
    dueDate: z.date().or(z.string()),
  }),
});

export type SubmissionsZodType = z.infer<typeof EnrichedSubmissionsSchema>;
