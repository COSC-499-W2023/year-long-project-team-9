"use client";
import Wrapper from "@/app/wrapper";
import CreateForm from "./create-form";
import CreateDisplay from "./create-display";
import { z } from "zod";
import { endOfDay, format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormSchema } from "../form/createFormSchema";
import { Users } from "@obscurus/database/src/sql.generated";

export default function CreaterWeapper({
  defaultLayout,
  defaultCollapsed,
  // createRequest,
  userData,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  userData: Users[];
}) {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      userEmail: userData[0].email,
      videoProcessing: true,
      clientEmail: [{ email: "" }],
    },
  });

  // let email = form.getValues("clientEmail").map((value) => {
  //   value.email;
  // });

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
          userData={userData}
        ></CreateForm>
      }
      secondPanel={
        <CreateDisplay form={form} userData={userData}></CreateDisplay>
      }
    />
  );
}
