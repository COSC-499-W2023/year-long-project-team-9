"use client"
import MailList from "@/app/request-list"
import Nav from "@/app/nav"
import { Input } from "@/components/ui/input"

import { Separator } from "@radix-ui/react-dropdown-menu"
import { Tabs, TabsContent } from "@radix-ui/react-tabs"
import { Send, Search } from "lucide-react"
import router, { useRouter } from "next/navigation"
import { Requests } from "stacks/core/src/sql.generated"



export const  ListRequests = ({ requests }: {requests: Requests[]}) => {
  const router = useRouter();
    return (
        <Tabs defaultValue="all">
              {/* <div className="flex items-center px-4">
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
              </div> */}
              <TabsContent value="all" className="m-0">
                <MailList items={requests} />
              </TabsContent>
              <TabsContent value="unread" className="m-0">
                {/* <MailList items={requests.filter((item) => !item.read)} /> */}
              </TabsContent>
            </Tabs>
    )
}

