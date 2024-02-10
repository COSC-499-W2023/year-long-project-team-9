
import { Requests } from "stacks/core/src/sql.generated"
import { Api } from "sst/node/api"
import { cookies } from "next/headers"

const layout = cookies().get("react-resizable-panels:layout");
const collapsed = cookies().get("react-resizable-panels:collapsed");

const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;




export default async function SubmitLayout({
    children, 
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
       {children}
    )
}

