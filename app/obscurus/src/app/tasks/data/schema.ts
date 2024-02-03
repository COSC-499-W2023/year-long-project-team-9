import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  request_id: z.string(),
  request_title: z.string(),
  requester_sub: z.string(),
  description: z.string(),
  video_processing: z.boolean(),
  due_date: z.string(),
  video_language: z.string(),
  creation_date: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
