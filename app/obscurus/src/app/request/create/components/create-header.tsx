import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Inbox, RotateCcw } from "lucide-react";

export default function CreateHeader() {
  return (
    <div>
      <div className="flex items-center">
        <div className="font-semibold text-xl">Create Request</div>
        <Button className="ml-auto" type="reset" variant="outline" size="icon">
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      <div className="py-2">
        <Separator />
      </div>
    </div>
  );
}
