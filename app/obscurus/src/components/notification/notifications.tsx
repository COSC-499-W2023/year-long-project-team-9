import {
  Bell,
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
import { Notifications as NotificationsType, Users } from "@obscurus/database/src/sql.generated";
import Link from "next/link";
import { CardTitle } from "../ui/card";
import { useEffect } from "react";
import { Separator } from "../ui/separator";
import {
  useHasUnreadNotifications,
  useNotifications,
} from "@/app/hooks/use-notifications";
import { useWebSocket } from "@/app/ws-provider";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { motion } from "framer-motion";
import { read } from "fs";
import { useUserData } from "@/app/user-provider";

export default function Notifications({
  readNotification,
  deleteNotifications,
  getNotificationsViaEmail,
  user
}: {
  readNotification: Function;
  deleteNotifications: Function;
  getNotificationsViaEmail: Function;
  user?: Users
}) {
  const [notifcations, setNotifications] = useNotifications();
  const [hasUnreadNotifications, setHasUnreadNotifications] =
    useHasUnreadNotifications();
  const ws = useWebSocket();


  useEffect(() => {
    const fetchInitialNotifications = async () => {
      try {
        const data = await getNotificationsViaEmail(user?.email);
        setNotifications(data.notifications);
        setHasUnreadNotifications(
          data.notifications.some(
            (notification: NotificationsType) => !notification.isRead
          )
        );
      } catch (error) {
        console.error("Error fetching initial notifications:", error);
      }
    };

    if (!ws) return;

    ws.onmessage = (event) => {
      console.log("Received message:", event.data);
      const data = JSON.parse(event.data);
      if (data.action === "newNotification") {
        const newNotification = data.data.notification;
        setNotifications((prevNotifications: any) => [
          newNotification,
          ...prevNotifications,
        ]);
        setHasUnreadNotifications(true);
      } else {
        console.log("Unknown action:", data.action);
        return;
      }
    };

    fetchInitialNotifications();

    return () => {
      ws.onmessage = null;
      ws.onerror = null;
      ws.onclose = null;
    };
  }, [ws, getNotificationsViaEmail]);

  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="ghost" size="icon" className="p-0 m-0">
            <Bell size={20} />
          </Button>
          {hasUnreadNotifications && (
            <div
              className="absolute top-3 right-[105px] mt-2 h-2 w-2 rounded-full bg-blue-600  "
              aria-label="Unread Notification"
            ></div>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80  shadow-lg rounded-lg bg-card p-0 mt-3">
        <CardTitle>
          <div className="font-semibold text-base p-4">Notifications</div>
          <Separator className="bg-accent w-full" />
        </CardTitle>
        <div className="overflow-y-auto max-h-96 h-96">
          {!notifcations || !notifcations.length ? (
            <div className="h-full p-4 flex flex-col space-y-4 justify-center items-center text-muted-foreground text-sm">
              <Bell size={20} />
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
                      className="flex items-center justify-between w-full gap-4 p-2"
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
                      <div className="text-left w-full text-xs line-clamp-2 font-medium">
                        {value.content}
                      </div>
                      {!value.isRead && (
                        <span className="flex p-1 rounded-full bg-blue-600"></span>
                      )}
                    </Button>
                  </Link>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button
                        variant={"outline"}
                        className="hover:bg-destructive"
                        onClick={() => {
                          deleteNotifications(value.notificationId);
                          readNotification(value.notificationId);
                          let newNotificationsArray = [
                            ...(notifcations as any),
                          ];
                          newNotificationsArray.splice(index, 1);
                          setNotifications(newNotificationsArray);
                        }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete</TooltipContent>
                  </Tooltip>
                </div>
                {index !== notifcations.length - 1 && (
                  <Separator className=" bg-accent border-muted-foreground w-full" />
                )}
              </>
            ))
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <></>
  );
}
