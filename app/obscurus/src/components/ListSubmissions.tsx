import MailList from "@/components/request-list"
import Nav from "@/components/nav"
import { Input } from "@/components/ui/input"

import { Separator } from "@radix-ui/react-dropdown-menu"
import { Tabs, TabsContent } from "@radix-ui/react-tabs"
import { Send, Search } from "lucide-react"
import router from "next/router"
import { Api } from "sst/node/api"
import { Requests, Submissions } from "stacks/core/src/sql.generated"
import SubmissionList from "./submission-list"


export const  ListSubmissions = ({ submissions }: {submissions: Submissions[]}) => {
    return (
        <Tabs defaultValue="all">
              <div className="flex items-center px-4">
                <h1 className="text-xl font-bold"></h1>
                <div
                  className="ml-auto"
                  onClick={() => router.push("/CreateRequest")}
                >
                  <Nav
                    isCollapsed={false}
                    links={[
                      {
                        title: "Create Request",
                        icon: Send,
                        variant: "ghost",
                        href: "/CreateRequest"
                      },
                    ]}
                  />
                </div>
              </div>
              <Separator />
              <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <TabsContent value="all" className="m-0">
                <SubmissionList submissions={submissions} />
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                {/* <MailList items={requests.filter((item) => !item.read)} /> */}
              </TabsContent>
            </Tabs>
    )
}

