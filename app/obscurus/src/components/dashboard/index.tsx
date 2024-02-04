import { Api } from "sst/node/api";
import Image from "next/image";
import { columns } from "./components/columns";
import { UserNav } from "./components/user-nav";
import { DataTable } from "./components/data-table";
import { Video } from "./schema";
import { Submissions } from "stacks/core/src/sql.generated";



export default function Dashboard({ submissions }: { submissions: Submissions[] }) {
  console.log("Dashboard:", submissions[0]);
  return (
    <>
      {submissions ? (
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Submitted Videos
              </h2>
            </div>
          </div>
          <DataTable data={submissions} columns={columns} />
        </div>
      ) : (
        <div>N/A</div>
      )}
    </>
  );
}
