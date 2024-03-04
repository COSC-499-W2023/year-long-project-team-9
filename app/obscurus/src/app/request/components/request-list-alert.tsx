import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/modified-shadcn-ui-components/modified-alert";
import { Inbox, Megaphone } from "lucide-react";

export function RequestListAlert() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <Inbox className="h-20 w-20" color="#111827" />
      <AlertTitle className="text-gray-900" color="#111827">
        No requests!
      </AlertTitle>
      <AlertDescription className="text-gray-900" color="#111827">
        You can make a request any time.
      </AlertDescription>
    </div>
  );
}
