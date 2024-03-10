"use server";
import { cookies } from "next/headers";
import { getEmail } from "../functions/authenticationMethods";
import { Users } from "@obscurus/database/src/sql.generated";
import { getUserViaEmail } from "../functions/getUserData";
import ProfileWrapper from "./components/profile-wapper";

async function Account() {
  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");
  console.log("Layout", layout);
  console.log("Collapsed", collapsed?.value);
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
  const defaultCollapsed =
    collapsed && collapsed.value !== "undefined"
      ? JSON.parse(collapsed.value)
      : undefined;
  // Baz: use this and Jan's email for testing: WfgmXE9IhA2vUvADnvy9RqmWaykKSLZwcc487KQA090kSiNOAiNO2japFzcfhoXfi9EFAl3jib0Jrm9O3kBrbzO7aVA69pMb9KtF8PhQFzVXTuTrs24zFAhjzHJG8zXBIMID2m6u10iZBHnPu5GfSmLhvJLPPmTd0jJg4rQMsC811VE0WzPV2F7WKrKkfBI6awIjatWZyGWCGOIOl1jWnkuTkDA480DDJtO1BTP0ffFQiGGnEWd9lzxridsISzjaCNMLhb0AMgLvafvi3eoOCvE1UpmEL8MhvjbCNyr29MBq2A3ztriZ@example.com
  // This other email is supposed to be the user who goes through Google
  const userEmail = await getEmail();
  const userData: Users = await getUserViaEmail(userEmail);
  return (
    <ProfileWrapper
      defaultLayout={defaultLayout}
      defaultCollapsed={defaultCollapsed}
      userData={userData}
    />
  );
}

export default Account;
