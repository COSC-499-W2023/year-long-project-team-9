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
    <div className="flex flex-col-3 items-start w-full gap-2 rounded-lg border p-3 text-left text-sm">
      <a href="/request" className="flex w-full flex-col-3 gap-1">
        <div className="flex items-center">
          <div>
            <div className="line-clamp-2 text-xs text-ellipsis">{content}</div>
            <div className="line-clamp-2 text-xs text-muted-foreground text-ellipsis">
              {date}
            </div>
          </div>
          <div className="ml-auto content-normal">
            {isRead === false ? (
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            ) : null}
          </div>
        </div>
      </a>
      <div>
        <Button
          type="button"
          variant="ghost"
          onClick={(event) => {
            event.stopPropagation();
            alert("Hello world");
          }}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
