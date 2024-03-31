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
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { useNotifications } from "@/app/hooks/use-notifications";

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

  useEffect(() => {
    const ws = new WebSocket(websocketApiEndpoint);

    ws.onopen = () => {
      console.log("WebSocket connection established");
      if (getNotificationsViaEmail) {
        getNotificationsViaEmail("imightbejan@gmail.com").then(
          (data: any) => {
            console.log("Data:", data);
            setNotifications(
              data.notifications
            );
            console.log("Initial data fetched");
          }
        );
      }
    };

    ws.onmessage = (event) => {
      console.log("notification websocket message received:", event.data);
      const data = JSON.parse(event.data);
      console.log("Data:", data);
      if (data.action === "newNotification") {
        const newNotification = data.data.notification;
        console.log("New notification:", newNotification);
        setNotifications((notifications) => [data.data.notification, ...notifications || []]);
      }
      console.log("Notifications:", notifcations);
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      ws.close();
    };
  }, [websocketApiEndpoint]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="ghost" size="icon">
            <Bell size={20} />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <div>
        <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto p-4shadow-lg rounded-lg">
          <CardTitle>
            <div className="font-semibold text-base my-2 p-4">Notifications</div>
          </CardTitle>
          {!notifcations ? (
            <div className="h-full flex flex-col space-y-4 justify-center items-center">
              <Bell className="h-6 w-6" />
              <p>No notifications</p>
            </div>
          ) : (
            notifcations.map((value, index) => (
              <><div
                className="flex items-center gap-4 p-2 rounded-lg transition-all w-full justify-between"
                key={value.notificationId}
              >
                <Link
                  href={value.type === "REQUEST"
                    ? `/request?requestId=${value.referenceId}`
                    : value.type === "SUBMIT"
                      ? `/submit?submissionId=${value.referenceId}`
                      : value.type === "CHAT"
                        ? `/chat?roomId=${value.referenceId}`
                        : `/profile`}
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
                    let newNotificationsArray = [...notifcations as any];
                    newNotificationsArray.splice(index, 1);
                    setNotifications(newNotificationsArray);
                  } }
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div><Separator className="my-2" /></>
            ))
          )}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
