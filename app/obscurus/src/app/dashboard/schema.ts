import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const videoSchema = z.object({
  submission_id: z.string(),
  requestee_email: z.string(),
  status: z.string(),
  priorities: z.string(),
  title: z.string(),
  is_read: z.boolean(),
  is_starred:  z.boolean(),
  grouping: z.string(),
  submitted_date:  z.date().nullable(),
  request_id: z.string(),
});

export type Video = z.infer<typeof videoSchema>;

