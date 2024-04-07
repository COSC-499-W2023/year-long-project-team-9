import React, { useState } from 'react';
import Wrapper from "@/app/wrapper";
import CreateForm from "./create-form";
import CreateDisplay from "./create-display";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createFormSchema } from "../form/createFormSchema";
import { Users } from "@obscurus/database/src/sql.generated";
import SubmitStatusAlert from "./create-submit-status-alert";

export default function CreateWrapper({
  defaultLayout,
  defaultCollapsed,
  createRequest,
  userData,
  setShowCreate,
}: {
  defaultLayout: number[];
  defaultCollapsed: boolean;
  createRequest: Function;
  userData: Users;
  setShowCreate: Function;
}) {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const form = useForm({
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

  async function onSubmit(values: any) {
    const createSuccess = await createRequest(values);
    if (!createSuccess) {
      setAlertMessage("Failed to create request.");
      setShowAlert(true);
    } else {
      setAlertMessage("Request created successfully!");
      setShowAlert(true);
    }
  }

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

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
            setShowCreate={setShowCreate}
          />
        }
        secondPanel={
          <CreateDisplay form={form} userData={userData} />
        }
      />
      <SubmitStatusAlert
        show={showAlert}
        message={alertMessage}
        onClose={handleCloseAlert}
      />
    </>
  );
}
