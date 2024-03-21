import {
  Trash2,
  FileText,
  Inbox,
  UploadCloudIcon,
  MessageCircle,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function NotificationSummary({
  isRead,
  content,
  type,
  referenceId,
  deleteNotifications,
  id,
}: {
  isRead: boolean;
  content: string;
  type: string;
  referenceId: string;
  id: string;
  deleteNotifications: Function;
}) {
  let link = "/";
  if (type === "CHAT") {
    link = `/chat?roomId=${referenceId}`;
  } else if (type === "SUBMIT") {
    link = `/submit?submissionId=${referenceId}`;
  } else if (type === "REQUEST") {
    link = `/request?requestId=${referenceId}`;
  } else {
    link = `/profile`;
  }
  return (
    <div className="flex flex-col-2">
      <Link
        href={link}
        className="flex flex-col-3 items-start w-full gap-2 p-3 text-justify text-sm"
      >
        <div className="flex items-center">
          {type === "CHAT" ? (
            <MessageCircle size={26} className="mt-1" />
          ) : type === "SUBMIT" ? (
            <UploadCloudIcon size={26} className="mt-1" />
          ) : type === "REQUEST" ? (
            <Inbox size={26} className="mt-1" />
          ) : (
            <User size={26} className="mt-1" />
          )}
        </div>
        <div>
          <div className="flex items-center">
            <div>
              <div className="break-all text-xs line-clamp-2">{content}</div>
            </div>
            <div className="content-normal ml-2">
              {isRead === false ? (
                <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              ) : null}
            </div>
          </div>
        </div>
      </Link>
      <Button
        className="m-1 mt-3"
        type="button"
        variant="outline"
        onClick={(event) => {
          deleteNotifications(id);
        }}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}

{
  /* <a
      href={link}
      className="flex flex-col-3 items-start w-full gap-2 rounded-lg border p-3 text-justify text-sm"
    >
      <div className="flex items-center">
        {type === "CHAT" ? (
          <MessageCircle size={26} className="mt-1" />
        ) : type === "SUBMIT" ? (
          <UploadCloudIcon size={26} className="mt-1" />
        ) : type === "REQUEST" ? (
          <Inbox size={26} className="mt-1" />
        ) : (
          <User size={26} className="mt-1" />
        )}
      </div>
      <div>
        <div className="flex items-center">
          <div>
            <div className="break-all text-xs line-clamp-2">{content}</div>
          </div>
          <div className="content-normal ml-2">
            {isRead === false ? (
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            ) : null}
          </div>
        </div>
      </div>
      <div className="ml-auto">
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
    </a> */
}
