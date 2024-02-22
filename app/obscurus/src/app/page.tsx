import { Suspense } from "react";
import { redirect } from "next/navigation";
import Submit from "./submit/page";

async function getUserEmail() {
  //...
}

async function Index() {
  const userEmail = "imightbejan@gmail.com"; //getUserEmail();

  redirect(`/submit`)
}


export default Index;
