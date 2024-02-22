import { Suspense } from "react";
import { redirect } from "next/navigation";
import Submit from "./Submit/page";

async function getUserEmail() {
  //...
}

async function Page() {
  const userEmail = "imightbejan@gmail.com"; //getUserEmail();

<<<<<<< Updated upstream
  redirect("/Submit")
=======
  redirect(`/${userEmail}`)
>>>>>>> Stashed changes
}

export default Page;
