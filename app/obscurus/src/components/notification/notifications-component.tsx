import {
  Bell,
  FileText,
  Inbox,
  MessageCircle,
  Trash2,
  UploadCloudIcon,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { getEmail } from "@/app/functions/authenticationMethods";
import { useEffect, useState } from "react";
import { Notifications } from "@obscurus/database/src/sql.generated";
import NotificationSummary from "./notification-summary";
import Link from "next/link";

export default function NotificationsComponent({
  readNotification,
  deleteNotifications,
  notifications,
}: {
  readNotification: Function;
  deleteNotifications: Function;
  notifications: Notifications[];
}) {
  const [notificationsArray, setNotificationsArray] = useState(notifications);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="ghost" size="icon">
            <Bell size={25} />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto">
        <div className="font-semibold text-base my-1">Notifications</div>
        {notificationsArray.length <= 0 ? (
          <div>nothing</div>
        ) : (
          notificationsArray.map((value, index) => (
            <div className="flex flex-col-2" id={`index`}>
              <Link
                onClick={() => {
                  readNotification(value.notificationId);
                }}
                href={
                  value.type === "CHAT"
                    ? `/chat?roomId=${value.referenceId}`
                    : value.type === "SUBMIT"
                    ? `/submit?submissionId=${value.referenceId}`
                    : value.type === "REQUEST"
                    ? `/request?requestId=${value.referenceId}`
                    : `/profile`
                }
                className="flex flex-col-3 items-start w-full gap-2 p-3 text-justify text-sm"
              >
                <div className="flex items-center">
                  {value.type === "CHAT" ? (
                    <MessageCircle size={26} className="mt-1" />
                  ) : value.type === "SUBMIT" ? (
                    <UploadCloudIcon size={26} className="mt-1" />
                  ) : value.type === "REQUEST" ? (
                    <Inbox size={26} className="mt-1" />
                  ) : (
                    <User size={26} className="mt-1" />
                  )}
                </div>
                <div>
                  <div className="flex items-center">
                    <div>
                      <div className="break-all text-xs line-clamp-2">
                        {value.content}
                      </div>
                    </div>
                    <div className="content-normal ml-2">
                      {value.isRead === false ? (
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
                onClick={() => {
                  deleteNotifications(value.notificationId);
                  let newNotificationsArray = [...notificationsArray];
                  newNotificationsArray.splice(index, 1);
                  setNotificationsArray(newNotificationsArray);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
