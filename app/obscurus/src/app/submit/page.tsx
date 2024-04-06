"use server";
import { cookies } from "next/headers";
import getPresignedUrl from "../functions/getPresignedUrl";
import { sendToService } from "../functions/sendToService";
import updateStatus from "../functions/updateStatus";
import getDownloadPresignedUrl from "../functions/getDownloadPresignedUrl";
import getStatus from "../functions/getStatus";
import { SubmitWrapper } from "./components/submit-wrapper";
import getRequestsAndSubmissionsByEmail from "../functions/getRequestsAndSubmissionsByEmail";
import { getUserViaEmail } from "../functions/getUserViaEmail";
import setSubmittedDate from "../functions/setSubmittedDate";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "../utils/amplifyServerUtils";
import getUserDataByEmail from "../functions/getUserDataByEmail";
import { Users as UsersType } from "@obscurus/database/src/sql.generated";
import { redirect } from "next/navigation";

async function Submit() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;


      async function getCurrentUserServer() {
        try {
          const currentUser = await runWithAmplifyServerContext({
            nextServerContext: { cookies },
            operation: (contextSpec) => getCurrentUser(contextSpec),
          });
          return {
            signedIn: true,
            email: currentUser.signInDetails?.loginId ?? "",
          };
        } catch (error) {
          console.log(error);
          return { signedIn: false, email: "" };
        }
      }
      const { signedIn, email } = await getCurrentUserServer();


      console.log("Signed in submit", signedIn);
      console.log("Email layout", email);

      const userData = await getUserViaEmail(email);

      console.log("User data in submit", userData);

      if (!userData) {
        redirect("/");
      }


  return (

    <SubmitWrapper
      getPresignedUrl={getPresignedUrl}
      getDownloadPresignedUrl={getDownloadPresignedUrl}
      sendToService={sendToService}
      updateStatus={updateStatus}
      getStatus={getStatus}
      getRequestsAndSubmissionsByEmail={getRequestsAndSubmissionsByEmail}
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      getUserViaEmail={getUserViaEmail}
      setSubmittedDate={setSubmittedDate}
      user={userData?.user}
    />
  );
}

export default Submit;
