// import { promises as fs } from "fs";
// import path from "path";
// import { Metadata } from "next";
// import Image from "next/image";
// import { z } from "zod";

// import { columns } from "./components/columns";
// import { DataTable } from "./components/data-table";
// import { UserNav } from "./components/user-nav";
// import { Task, taskSchema } from "./data/schema";
// import IndexPage from "../page";
// import { Api } from "sst/node/api";
// import { Submissions, Requests, Users } from "stacks/core/src/sql.generated";
// import { ReactNode } from "react";

// // export async function getServerSideProps() {
// //   const fetchData = async (route: string) => {
// //     try {
// //       const apiURL = Api.Api.url;
// //       const response = await fetch(apiURL + route);
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! Status: ${response.status}`);
// //       } else {
// //         return response.json();
// //       }
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //   const requests: Requests[] = await fetchData("/getRequests");
// //   const submissions: Submissions[] = await fetchData("/getSubmissions");
// //   const users: Users[] = await fetchData("/getUsers");
// //   return {
// //     props: { requests, submissions, users }, // pass the data as a prop
// //   };
// // }

// export const metadata: Metadata = {
//   title: "Tasks",
//   description: "A task and issue tracker build using Tanstack Table.",
// };

// async function getTasks() {
//   // const data = await fs.readFile(
//   //   path.join(process.cwd(), "./src/app/tasks/data/tasks.json")
//   // )

//   // const tasks = JSON.parse(data.toString())

//   const fetchData = async (route: string) => {
//     try {
//       const apiURL = Api.Api.url;
//       const response = await fetch(apiURL + route);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       } else {
//         return response.json();
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const submissions: Submissions[] = await fetchData("/getSubmissions");
//   const requests: Requests[] = await fetchData("/getRequests");
//   const users: Users[] = await fetchData("/getUsers");

//   return {
//     id: submissions[0].submission_id,
//     title: submissions[0].requestee_email,
//     status: "status",
//     label: "label", //
//     priority: "priority",
//   };

//   // return z.array(taskSchema).parse(formattedSubmissions(submissions))
// }



// export default async function Wrapper() {

//   const submissions:Task[] = await getTasks()

//   return (
//     <>
//       <div className="md:hidden">
//         <Image
//           src="/examples/tasks-light.png"
//           width={1280}
//           height={998}
//           alt="Playground"
//           className="block dark:hidden"
//         />
//         <Image
//           src="/examples/tasks-dark.png"
//           width={1280}
//           height={998}
//           alt="Playground"
//           className="hidden dark:block"
//         />
//       </div>
//       <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
//         <div className="flex items-center justify-between space-y-2">
//           <div>
//             <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
//             <p className="text-muted-foreground">
//               Here&apos;s a list of your tasks for this month!
//             </p>
//           </div>
//           <div className="flex items-center space-x-2">
//             <UserNav />
//           </div>
//         </div>
//         <DataTable data={submissions} columns={columns} />
//       </div>
//     </>
//   )
// }
