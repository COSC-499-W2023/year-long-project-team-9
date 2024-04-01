import { Trash2, FileText } from "lucide-react";
import { Button } from "../ui/button";

export default function NotificationSummary({
  isRead,
  date,
  content,
}: {
  isRead: boolean;
  date: string;
  content: string;
}) {
  return (
    <div className="flex flex-col items-start w-full gap-4 rounded-lg border p-2 text-left bg-white shadow-sm hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <a href="/request" className="flex w-full items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-gray-600" />
          <div>
            <div>{content}</div>
            <div className="text-xs">{date}</div>
          </div>
        </div>

        {!isRead && (
          <span className="flex h-2 w-2 rounded-full bg-blue-600" aria-label="Unread Notification"></span>
        )}
      </a>

      <div className="p-2">
        <Button
          type="button"
          variant="outline"
          className="p-2"
          onClick={(event) => {
            event.preventDefault();
            console.log("Action for notification");
          }}
          aria-label="Delete Notification"
        >
          <Trash2 className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </div>
  );
}
