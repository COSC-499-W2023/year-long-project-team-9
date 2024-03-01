"use client";
import Wrapper from "@/app/wrapper";
import CreateForm from "./create-form";
import CreateDisplay from "./create-display";
import { z } from "zod";
import { endOfDay, format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormSchema } from "../form/createFormSchema";

export default function CreaterWeapper({
  defaultLayout,
  defaultCollapsed,
  // createRequest,
  userEmail,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userEmail: string;
}) {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      userEmail: userEmail,
      videoProcessing: true,
      clientEmail: [{ email: "" }],
    },
  });

  let email = form.getValues("clientEmail").map((value) => {
    value.email;
  });
  function emails(form: any): string[] {
    return [""];
  }
  console.log(email);
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
          userEmail={userEmail}
        ></CreateForm>
      }
      secondPanel={
        <CreateDisplay form={form} userEmail={userEmail}></CreateDisplay>
      }
    />
  );
}
