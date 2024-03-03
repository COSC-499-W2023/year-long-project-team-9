import { getSubmissions } from "@/app/functions/getSubmissions";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { Submissions } from "@obscurus/database/src/sql.generated";

const Submissions = async () => {
  const submissions: Submissions[] = await getSubmissions();

  return (
    <div>
      <DataTable columns={columns} data={submissions} />
    </div>
  );
};

export default Submissions;
