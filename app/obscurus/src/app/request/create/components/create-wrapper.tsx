"use client";
import Wrapper from "@/app/wrapper";
import CreateForm from "./create-form";
import CreateDisplay from "./create-display";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormSchema } from "../form/createFormSchema";
import { Users } from "@obscurus/database/src/sql.generated";
import { useState } from "react";
import SubmitStatusAlert from "./create-submit-status-alert";

export default function CreateWrapper({
  defaultLayout,
  defaultCollapsed,
  createRequest,
  userData,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  createRequest: Function;
  userData: Users;
}) {
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      userEmail: userData.email,
      videoProcessing: true,
      clientEmail: [{ email: "" }],
    },
  });

  async function onSubmit(values: z.infer<typeof createFormSchema>) {
    const createSucess = await createRequest(values);
    if (createSucess === false) {
      const button = document.getElementById("failAlert");
      button?.click();
    } else {
      const button = document.getElementById("successAlert");
      button?.click();
    }
  }
  return (
    <>
      <Wrapper
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
        firstPanel={
          <CreateForm
            form={form}
            onSubmit={onSubmit}
            userData={userData}
          ></CreateForm>
        }
        secondPanel={
          <CreateDisplay form={form} userData={userData}></CreateDisplay>
        }
      />
      <SubmitStatusAlert></SubmitStatusAlert>
    </>
  );
}
