import { redirect } from "next/navigation";
import Submit from "./submit/page";
import Home from "./landing-page/page";
// async function getUserEmail() {
//   //...
// }

async function Page() {
  return <Home />;
}

export default Page;
