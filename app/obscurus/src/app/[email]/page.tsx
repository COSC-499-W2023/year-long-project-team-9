<<<<<<< Updated upstream
import { redirect } from "next/navigation"

async function GenerateDashboard({ params }: { params: { email: string } }) {
    console.log("Email", params.email)
    return(<div>{params.email}</div>)

}

export default GenerateDashboard
=======
import { redirect } from "next/navigation";
import Submit from "../submit/page";

async function GenerateDashboard({ params }: { params: { email: string } }) {
  console.log("Email", params.email);
  return <Submit />;
}

export default GenerateDashboard;
>>>>>>> Stashed changes
