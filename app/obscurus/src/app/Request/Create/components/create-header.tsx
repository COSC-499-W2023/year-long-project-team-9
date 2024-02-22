import { Button } from "@/components/ui/button";
import { Inbox } from "lucide-react";

export default function CreateHeader() {
  return (
    <div className="flex items-center">
      <div className="font-semibold text-xl">Request</div>
      <div className="ml-auto">
        <a href="/Request">
          <Button variant="ghost">
            <Inbox className="mr-2 h-4 w-4" />
            Request
          </Button>
        </a>
      </div>
    </div>
  );
}
