import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Inbox } from "lucide-react";

export default function CreateHeader() {
  return (
    <>
      <div className="flex items-center">
        <div className="font-semibold text-xl">Create Request</div>
      </div>
      <div className="py-2">
        <Separator />
      </div>
    </>
  );
}
