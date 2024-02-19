import { redirect } from "next/navigation"

async function GenerateDashboard({ params }: { params: { slug: string } }) {
    console.log(params.slug)
}

export default GenerateDashboard