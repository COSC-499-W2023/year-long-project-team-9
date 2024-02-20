import { Inbox } from "lucide-react";
import { Button } from "./ui/button";

export default function CreateHeader() {
  return (
    <div className="flex items-center px-4 py-2">
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
