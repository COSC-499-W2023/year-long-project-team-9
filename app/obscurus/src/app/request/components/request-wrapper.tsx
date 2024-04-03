"use client";
import {
  Requests,
  Submissions,
  Users,
} from "@obscurus/database/src/sql.generated";
import Wrapper from "@/app/wrapper";
import RequestList from "./request-list";
import hello from "@/app/functions/hello";
import RequestDisplay from "./request-display";
import { useState } from "react";
import { createFormSchema } from "./create/form/createFormSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CreateForm from "./create/components/create-form";
import CreateDisplay from "./create/components/create-display";
import SubmitStatusAlert from "./create/components/create-submit-status-alert";

export default function RequestWrapper({
  defaultLayout,
  defaultCollapsed,
  request,
  submissions,
  userData,
  archiveRequest,
  unarchiveRequest,
  trashRequest,
  createRequest,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  request: Requests[];
  submissions: Submissions[];
  userData: Users;
  archiveRequest: Function;
  unarchiveRequest: Function;
  trashRequest: Function;
  createRequest: Function;
}) {
  const [showCreate, setShowCreate] = useState<boolean>(false);

  // Request
  const [requests, setRequests] = useState<Requests[]>(request);
  const handleTimezoneOffset = (date: Date) => {
    const messageDateTime = new Date(date).getTime();
    const userTimezoneOffset = -new Date().getTimezoneOffset() * 60 * 1000;
    return new Date(messageDateTime + userTimezoneOffset);
  };

  // Create
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      userEmail: userData.email,
      videoProcessing: true,
      clientEmail: [{ email: "" }],
      firstName: userData.givenName,
      lastName: userData.familyName,
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
          showCreate === true ? (
            <CreateForm
              form={form}
              onSubmit={onSubmit}
              userData={userData}
              setShowCreate={setShowCreate}
            ></CreateForm>
          ) : (
            <RequestList
              requests={requests}
              submissions={submissions}
              handleTimezoneOffset={handleTimezoneOffset}
              setShowCreate={setShowCreate}
            />
          )
        }
        secondPanel={
          showCreate === true ? (
            <CreateDisplay form={form} userData={userData}></CreateDisplay>
          ) : (
            <RequestDisplay
              requests={requests}
              submissions={submissions}
              userData={userData}
              setRequests={setRequests}
              archiveRequest={archiveRequest}
              unarchiveRequest={unarchiveRequest}
              trashRequest={trashRequest}
              handleTimezoneOffset={handleTimezoneOffset}
            />
          )
        }
      />
      {showCreate === true ? <SubmitStatusAlert></SubmitStatusAlert> : <></>}
    </>
  );
}
