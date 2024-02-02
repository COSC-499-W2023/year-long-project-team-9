// "use client";
// import * as React from "react";
// import {
//   AlertCircle,
//   Archive,
//   ArchiveX,
//   File,
//   Inbox,
//   MessagesSquare,
//   PenBox,
//   Search,
//   Send,
//   ShoppingCart,
//   Trash2,
//   Users2,
//   LogOut,
//   User,
//   MessageCircle,
//   Youtube,
//   FileUp,
// } from "lucide-react";

// import AccountSwitcher from "./account-switcher";
// import MailDisplay from "../components/mail-display";
// import MailList from "../components/mail-list";
// import Nav from "../components/nav";
// import { Mail } from "../data/data";
// import { useMail } from "./hooks/use-mail";
// import { cn } from "@/lib/utils";
// import { Separator } from "@/components/ui/separator";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "@/components/ui/resizable";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import NavBar from "./NavBar";

// interface MailProps {
//   accounts: {
//     label: string;
//     email: string;
//     icon: React.ReactNode;
//   }[];
//   mails: Mail[];
//   defaultLayout: number[] | undefined;
//   defaultCollapsed?: boolean;
//   navCollapsedSize: number;
// }

// export default function Mail({
//   accounts,
//   mails,
//   defaultLayout = [265, 440, 655],
//   defaultCollapsed = false,
//   navCollapsedSize,
// }: MailProps) {
//   const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);
//   const [mail] = useMail();
//   const router = useRouter();

//   return (
//     <div className="flex flex-col">
//       <NavBar />
//       <Nav
//         isCollapsed={false}
//         links={[
//           {
//             title: "Requests",
//             icon: Inbox,
//             variant: "default",
//             href: "/MyRequests",
//           },
//           {
//             title: "Submissions",
//             icon: FileUp,
//             variant: "ghost",
//             href: "/Submissions",
//           },
//           {
//             title: "My Videos",
//             icon: Youtube,
//             variant: "ghost",
//             href: "/MyVideos",
//           },
//           {
//             title: "Chat",
//             icon: MessageCircle,
//             variant: "ghost",
//             href: "/Messages",
//           },
//         ]}
//       />
//       <TooltipProvider delayDuration={0}>
//         <ResizablePanelGroup
//           direction="horizontal"
//           onLayout={(sizes: number[]) => {
//             document.cookie = `react-resizable-panels:layout=${JSON.stringify(
//               sizes
//             )}`;
//           }}
//           className="h-full max-h-[800px] items-stretch"
//         >
//           <ResizablePanel
//             defaultSize={defaultLayout[0]}
//             collapsedSize={navCollapsedSize}
//             collapsible={true}
//             minSize={15}
//             maxSize={20}
//             //   onCollapse={(collapsed: boolean) => {
//             //     setIsCollapsed(collapsed)
//             //     document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
//             //       collapsed
//             //     )}`
//             //   }}
//             className={cn(
//               isCollapsed &&
//                 "min-w-[50px] transition-all duration-300 ease-in-out"
//             )}
//           >
//             {/* <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]': 'px-2')}>
//       <AccountSwitcher isCollapsed={isCollapsed} accounts={accounts} />
//     </div>
//     <Separator /> */}

//             {/* <>
//       <Separator />
//       <Nav isCollapsed={isCollapsed}
//         links={[
          
//           {
//             title: "Profile",
//             label: "",
//             icon: User,
//             variant: "ghost",
//           },
//           {
//             title: "Sign Out",
//             icon: LogOut,
//             variant: "ghost",
//             }
//         ]}/>
//     </> */}
//           </ResizablePanel>
//           <ResizableHandle withHandle />
//           <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
//             <Tabs defaultValue="all">
//               <div className="flex items-center px-4">
//                 <h1 className="text-xl font-bold">Requests</h1>
//                 <div
//                   className="ml-auto"
//                   onClick={() => router.push("/CreateRequest")}
//                 >
//                   <Nav
//                     isCollapsed={isCollapsed}
//                     links={[
//                       {
//                         title: "Create Request",
//                         icon: Send,
//                         variant: "ghost",
//                         href: "/CreateRequest",
//                       },
//                     ]}
//                   />
//                 </div>
//               </div>
//               <Separator />
//               <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//                 <form>
//                   <div className="relative">
//                     <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//                     <Input placeholder="Search" className="pl-8" />
//                   </div>
//                 </form>
//               </div>
//               <TabsContent value="all" className="m-0">
//                 <MailList items={mails} />
//               </TabsContent>
//               <TabsContent value="unread" className="m-0">
//                 <MailList items={mails.filter((item) => !item.read)} />
//               </TabsContent>
//             </Tabs>
//           </ResizablePanel>
//           <ResizableHandle withHandle />
//           <ResizablePanel defaultSize={defaultLayout[2]}>
//             <MailDisplay
//               mail={mails.find((item) => item.id === mail.selected) || null}
//             />
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       </TooltipProvider>
//     </div>
//   );
// }
