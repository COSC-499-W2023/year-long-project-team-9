import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";

export default function RequestHeader() {
  return (
    <div className="flex items-center px-4 py-2">
      <div className="font-semibold text-xl">Request</div>
      <div className="ml-auto">
        <a href="/Request/Create">
          <Button variant="ghost">
            <SquarePen className="mr-2 h-4 w-4" />
            Create
          </Button>
        </a>
      </div>
    </div>
  );
}
