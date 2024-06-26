"use server";
import Home from "./landing-page/page";
import amplifyConfig from "@/app/utils/amplifyConfig";
import { Amplify } from "aws-amplify";

Amplify.configure(amplifyConfig);

async function Page() {
  return <Home />;
}

export default Page;
