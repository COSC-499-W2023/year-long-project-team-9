"use server";
import { cookies } from "next/headers";
import {
  Users,
  Requests,
  Submissions,
} from "@obscurus/database/src/sql.generated";
import getUserDataByEmail from "../functions/getUserDataByEmail";
import { getRequestsViaEmail } from "../functions/getRequestsViaEmail";
import ProfileWrapper from "./components/profile-wapper";
import getPresignedUrl from "../functions/getPresignedUrl";
import getDownloadPresignedUrl from "../functions/getDownloadPresignedUrl";

async function Account() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  console.log("Layout", layout);
  console.log("Collapsed", collapsed?.value);
  console.log("getPresignedUrl", getPresignedUrl);
  console.log("getDownloadPresignedUrl", getDownloadPresignedUrl);

  const wsApi = process.env.NEXT_PUBLIC_WEBSOCKET_API_ENDPOINT;

  console.log("wsApi", wsApi);

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;

  const userEmail = "imightbejan@gmail.com"
  const userData: Users = await getUserDataByEmail(userEmail);


  return (
    <ProfileWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData}
      getPresignedUrl={getPresignedUrl}
      getDownloadPresignedUrl={getDownloadPresignedUrl}
      websocketApiEndpoint={wsApi as string}
    />
  );
}

export default Account;
