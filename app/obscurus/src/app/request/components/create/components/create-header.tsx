import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Inbox } from "lucide-react";

export default function CreateHeader({
  setShowCreate,
}: {
  setShowCreate: Function;
}) {
  return (
    <div>
      <div className="flex justify-between items-center pt-2 px-4">
        <h1 className="text-xl font-semibold">Create</h1>

        <Button variant="ghost" onClick={() => setShowCreate(false)}>
          <Inbox className="mr-2 h-4 w-4" />
          Request
        </Button>
      </div>
      <div className="mt-2 mb-2">
        <Separator />
      </div>
    </div>
  );
}
