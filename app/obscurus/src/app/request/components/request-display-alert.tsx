import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/modified-shadcn-ui-components/modified-alert";
import { FileText, Inbox, Megaphone } from "lucide-react";

export function RequestDisplayAlert() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <FileText className="h-20 w-20" color="#111827" />
      <AlertTitle className="text-gray-900" color="#111827">
        No request selected!
      </AlertTitle>
      <AlertDescription className="text-gray-900" color="#111827">
        To display, make a request or select a request.
      </AlertDescription>
    </div>
  );
}
