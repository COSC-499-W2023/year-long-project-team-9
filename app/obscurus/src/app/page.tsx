import { Suspense } from "react";
import { redirect } from "next/navigation";
import Submit from "./submit/page";

async function getUserEmail() {
  //...
}

function handleSignedIn(){
  redirect("/submit")
}

async function Page() {
  const userEmail = "imightbejan@gmail.com"; //getUserEmail();
  handleSignedIn()
}

export default Page;
