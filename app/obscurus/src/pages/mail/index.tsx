import { cookies } from "next/headers"
import Image from "next/image"

import { Mail } from "./components/mail"
import { accounts, mails } from "./data"

export default function MailPage() {
  // const layout = cookies().get("react-resizable-panels:layout")
  // const collapsed = cookies().get("react-resizable-panels:collapsed")

  // const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  // const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      
      <div className=" flex-col flex">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={[1,2,3]}
          defaultCollapsed={false}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
