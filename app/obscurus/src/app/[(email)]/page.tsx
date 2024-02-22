import { redirect } from "next/navigation";
import Submit from "./submit/page";

async function GenerateDashboard({ params }: { params: { email: string } }) {
  console.log("Email", params.email);
  return <Submit />;
}

export default GenerateDashboard;
