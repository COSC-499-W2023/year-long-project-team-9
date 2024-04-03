import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Inbox } from "lucide-react";

export default function CreateHeader() {
  return (
    <div>
      <div className="flex justify-between items-center pt-2 px-4">
        <h1 className="text-xl font-semibold">Create</h1>
        <a href="/request">
          <Button variant="ghost">
            <Inbox className="mr-2 h-4 w-4" />
            Request
          </Button>
        </a>
      </div>
      <div className="mt-2 mb-2">
        <Separator />
      </div>
    </div>
  );
}
