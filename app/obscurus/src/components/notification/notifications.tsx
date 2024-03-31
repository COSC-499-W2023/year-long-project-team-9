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
import { Card, CardContent, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import {
  useHasUnreadNotifications,
  useNotifications,
} from "@/app/hooks/use-notifications";
import { useWebSocket } from "@/app/ws-provider";
import { all } from "axios";
import { set } from "date-fns";

export default function Notifications({
  readNotification,
  deleteNotifications,
  websocketApiEndpoint,
  getNotificationsViaEmail,
}: {
  readNotification: Function;
  deleteNotifications: Function;
  websocketApiEndpoint: string;
  getNotificationsViaEmail: Function;
}) {
  const [notifcations, setNotifications] = useNotifications();
  const [hasUnreadNotifications, setHasUnreadNotifications] =
    useHasUnreadNotifications();
  const ws = useWebSocket();

  useEffect(() => {
    const fetchInitialNotifications = async () => {
      try {
        const data = await getNotificationsViaEmail("imightbejan@gmail.com");
        setNotifications(data.notifications);
        setHasUnreadNotifications(
          data.notifications.some(
            (notification: Notifications) => !notification.isRead
          )
        );
      } catch (error) {
        console.error("Error fetching initial notifications:", error);
      }
    };

    if (!ws) return;

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.action === "newNotification") {
        const newNotification = data.data.notification;
        setNotifications((prevNotifications: any) => [
          newNotification,
          ...prevNotifications,
        ]);
        setHasUnreadNotifications(true);
      }
    };

    fetchInitialNotifications();

    return () => {
      ws.onmessage = null;
      ws.onerror = null;
      ws.onclose = null;
    };
  }, [ws, getNotificationsViaEmail]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="ghost" size="icon" className="p-0 m-0">
            <Bell size={20} />
          </Button>
          {hasUnreadNotifications && (
            <div
              className="absolute top-3 right-16 mt-2 h-2 w-2 rounded-full bg-blue-600  "
              aria-label="Unread Notification"
            ></div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80  shadow-lg rounded-lg">
        <CardTitle>
          <div className="font-semibold text-base p-4">Notifications</div>
          <Separator />
        </CardTitle>
        <div className="overflow-y-auto max-h-96">
          {!notifcations ? (
            <div className="h-full p-4 flex flex-col space-y-4 justify-center items-center text-muted-foreground text-sm">
              <Bell size={20} />
              <Separator />
              <div>No notifications</div>
            </div>
          ) : (
            notifcations.map((value, index) => (
              <>
                <div
                  className="flex items-center gap-2 p-2 rounded-lg transition-all w-full justify-between"
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
                    <Button
                      variant={"ghost"}
                      className="flex items-center justify-between w-full gap-3"
                      onClick={() => readNotification(value.notificationId)}
                    >
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
                  </Link>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      deleteNotifications(value.notificationId);
                      let newNotificationsArray = [...(notifcations as any)];
                      newNotificationsArray.splice(index, 1);
                      setNotifications(newNotificationsArray);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
                {index !== notifcations.length - 1 && <Separator />}
              </>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
