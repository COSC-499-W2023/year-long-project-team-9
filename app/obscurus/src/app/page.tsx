import { redirect } from "next/navigation";
import Submit from "./submit/page";
// async function getUserEmail() {
//   //...
// }

async function Page() {
  redirect("/submit")
}

export default Page;
