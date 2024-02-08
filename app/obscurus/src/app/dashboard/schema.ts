import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const videoSchema = z.object({
  submission_id: z.string(),
  requestee_email: z.string(),
  is_completed: z.string(),
  submitted_date: z.null(),
  request_id: z.string(),
});

export type Video = z.infer<typeof videoSchema>;
