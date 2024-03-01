"use client";
import Wrapper from "@/app/wrapper";
import CreateForm from "./create-form";
import CreateDisplay from "./create-display";
import { z } from "zod";
import { endOfDay } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
interface CreaterWeapperProps {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  // createRequest: Function;
  email: string;
}

const createFormSchema = z
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

export default function CreaterWeapper({
  defaultLayout,
  defaultCollapsed,
  // createRequest,
  email,
}: CreaterWeapperProps) {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      userEmail: email,
      videoProcessing: true,
      clientEmail: [{ email: "" }],
    },
  });

  async function onSubmit(values: z.infer<typeof createFormSchema>) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(values);
  }

  return (
    <Wrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      navCollapsedSize={4}
      firstPanel={
        <CreateForm
          form={form}
          submit={onSubmit}
          userEmail={email}
        ></CreateForm>
      }
      secondPanel={
        <CreateDisplay form={form} userEmail={email}></CreateDisplay>
      }
    />
  );
}
