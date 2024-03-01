import { endOfDay } from "date-fns";
import { z } from "zod";

export const createFormSchema = z
  .object({
    userEmail: z.string(),
    title: z.string().trim().min(1).max(100),
    dueDate: z.date().min(endOfDay(new Date())),
    description: z.string().trim().min(1).max(2000),
    clientEmail: z
      .array(
        z.object({
          email: z.string().trim().toLowerCase().min(1).max(320).email(),
        })
      )
      .superRefine((clientEmail, ctx) => {
        for (let i = 0; i < clientEmail.length; i++) {
          for (let j = 0; j < clientEmail.length; j++) {
            if (
              clientEmail[i].email === clientEmail[j].email &&
              i !== j &&
              j < i
            ) {
              ctx.addIssue({
                path: [i, "email"],
                message: "One cannot have duplicate email",
                code: z.ZodIssueCode.custom,
              });
            }
          }
        }
      }),
    videoProcessing: z.boolean().default(true),
  })
  .superRefine((data, ctx) => {
    data.clientEmail.forEach((email, i) => {
      if (email.email === data.userEmail) {
        ctx.addIssue({
          path: ["clientEmail", i, "email"],
          message: "Client email cannot match requester email.",
          code: z.ZodIssueCode.custom,
        });
      }
    });
  });
