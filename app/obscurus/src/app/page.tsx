"use server";
import Home from "./landing-page/page";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "./utils/amplifyServerUtils";
import { cookies } from "next/headers";
import { getUserViaEmail } from "./functions/getUserViaEmail";
import { redirect } from "next/navigation";

async function Page() {
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


  const userData = await getUserViaEmail(email);


  if (userData) {
    redirect("/request");
  }
  return <Home />;
}

export default Page;
