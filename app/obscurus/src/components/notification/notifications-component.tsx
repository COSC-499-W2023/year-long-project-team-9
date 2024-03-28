import {
  Bell,
  BellPlus,
  Inbox,
  MessageCircle,
  Trash2,
  UploadCloud,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { Notifications } from "@obscurus/database/src/sql.generated";
import Link from "next/link";
import { Card, CardTitle } from "../ui/card";
import { useState } from "react";
import { Separator } from "../ui/separator";

export default function NotificationsComponent({
  readNotification,
  deleteNotifications,
  notifications,
}: {
  readNotification: Function;
  deleteNotifications: Function;
  notifications: Notifications[];
}) {
  const [notificationsArray, setNotificationsArray] =
    useState<Notifications[]>(notifications);
  let allRead = notificationsArray.every((notification) => notification.isRead);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="ghost" size="icon">
            {allRead ? <Bell size={20} /> : <BellPlus size={20} />}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <Card>
        <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto p-4shadow-lg rounded-lg">
          <CardTitle>
            <div className="font-semibold text-base my-2 p-4">Notifications</div>
          </CardTitle>
          <Separator className="my-2" />
          {notificationsArray.length <= 0 ? (
            <div className="h-full flex flex-col space-y-4 justify-center items-center">
              <Bell className="h-6 w-6" />
              <p>No notifications</p>
            </div>
          ) : (
            notificationsArray.map((value, index) => (
              <div
                className="flex items-center gap-4 p-2 rounded-lg transition-all w-full justify-between"
                key={value.notificationId}
              >
                <Link
                  href={
                    value.type === "REQUEST"
                      ? `/request?requestId=${value.referenceId}`
                      : value.type === "SUBMIT"
                      ? `/submit?submissionId=${value.referenceId}`
                      : value.type === "CHAT"
                      ? `/chat?roomId=${value.referenceId}`
                      : `/profile`
                  }
                  passHref
                >
                  <div
                    className="flex-1"
                    onClick={() => readNotification(value.notificationId)}
                  >
                    <Button variant={"ghost"} className="flex items-center justify-between w-full gap-3">
                      <div>
                        {value.type === "REQUEST" ? (
                          <Inbox size={15} />
                        ) : value.type === "SUBMIT" ? (
                          <UploadCloud size={15} />
                        ) : value.type === "CHAT" ? (
                          <MessageCircle size={15} />
                        ) : (
                          <User size={15} />
                        )}
                      </div>
                      <div className="text-left w-full text-xs line-clamp-2">
                        {value.content}
                      </div>
                      {!value.isRead && (
                        <span className="flex p-1 rounded-full bg-blue-600"></span>
                      )}
                    </Button>
                  </div>
                </Link>
                <Button
                  variant={"outline"}
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
      </Card>
    </DropdownMenu>
  );
}
