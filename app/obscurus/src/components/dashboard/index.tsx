
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Video } from "./schema";
import { Submissions } from "stacks/core/src/sql.generated";



export default function Dashboard({ submissions }: { submissions: Submissions[] }) {
  console.log("Dashboard:", submissions);
  return (
    <>
      {submissions ? (
        <div className="hidden h-full flex-1 flex-col p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <h2 className="relative text-2xl font-bold tracking-tight pb-5">
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
