import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Inbox } from "lucide-react";

export default function CreateHeader() {
  return (
    <div>
      <div className="flex items-center">
        <div className="font-semibold text-xl">Create</div>
        <div className="ml-auto">
          <a href="/request">
            <Button variant="ghost">
              <Inbox className="mr-2 h-4 w-4" />
              Request
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
