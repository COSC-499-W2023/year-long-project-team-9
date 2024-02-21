import { redirect } from "next/navigation"

async function GenerateDashboard({ params }: { params: { email: string } }) {
    console.log("Email", params.email)
    return(<div>{params.email}</div>)

}

export default GenerateDashboard