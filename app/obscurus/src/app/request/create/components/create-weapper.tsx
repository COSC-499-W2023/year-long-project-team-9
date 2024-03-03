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
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/modified-shadcn-ui-components/modified-alert-dialog";
import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";

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
  const [isInsertSuccessful, setIsInsertSuccessful] = useState(false);

  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      userEmail: userData[0].email,
      videoProcessing: true,
      clientEmail: [{ email: "" }],
    },
  });

  async function onSubmit(values: z.infer<typeof createFormSchema>) {
    setIsInsertSuccessful(true);
    console.log(JSON.stringify(values));
    const button = document.getElementById("submitAlert");
    button?.click();
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
      <AlertDialog>
        <AlertDialogTrigger id="submitAlert"></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            {isInsertSuccessful === true ? (
              <div>
                <AlertDialogTitle>Success!</AlertDialogTitle>
                <AlertDialogDescription>
                  The submission process was a sucess.
                </AlertDialogDescription>
              </div>
            ) : (
              <div>
                <AlertDialogTitle className="text-destructive">
                  Error!
                </AlertDialogTitle>
                <AlertDialogDescription className="text-destructive">
                  An an occurred during the submission process.
                </AlertDialogDescription>
              </div>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter>
            {isInsertSuccessful === true ? (
              <a href="/request">
                <Button variant="ghost">
                  <Inbox className="mr-2 h-4 w-4" />
                  Request
                </Button>
              </a>
            ) : (
              <AlertDialogCancel>Cancel</AlertDialogCancel>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
