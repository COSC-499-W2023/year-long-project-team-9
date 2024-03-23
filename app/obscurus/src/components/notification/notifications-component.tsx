import {
  Bell,
  BellPlus,
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

  let allRead: boolean = true;
  for (let i = 0; i < notificationsArray.length; i++) {
    if (notificationsArray[i].isRead === false) {
      allRead = false;
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="ghost" size="icon">
            {allRead === false ? <BellPlus size={25} /> : <Bell size={25} />}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 max-h-96 overflow-y-auto">
        <div className="font-semibold text-base my-1">Notifications </div>
        {!notificationsArray ? (
          <div className="h-full flex flex-col space-y-4 justify-center items-center text-muted-foreground">
            <Bell className="h-17 w-17" />
            <p>No notifications</p>
          </div>
        ) : (
          notificationsArray.map((value, index) => (
            <div className="flex flex-col-2 gap-2" key={`${index}`}>
              <div className="w-full">
                <Button
                  onClick={() => {
                    readNotification(value.notificationId).then(
                      () =>
                        (window.location.href =
                          value.type === "REQUEST"
                            ? `/request?requestId=${value.referenceId}`
                            : value.type === "SUBMIT"
                            ? `/submit?submissionId=${value.referenceId}`
                            : value.type === "CHAT"
                            ? `/chat?roomId=${value.referenceId}`
                            : `/profile`)
                    );
                  }}
                  variant={"ghost"}
                  className="flex flex-col-3 w-full mb-1"
                >
                  {value.type === "REQUEST" ? (
                    <span className="mr-auto">
                      <Inbox size={26} className="mt-1" />
                    </span>
                  ) : value.type === "SUBMIT" ? (
                    <span className="mr-auto">
                      <UploadCloudIcon size={26} className="mt-1" />
                    </span>
                  ) : value.type === "CHAT" ? (
                    <span className="mr-auto">
                      <MessageCircle size={26} className="mt-1" />
                    </span>
                  ) : (
                    <span className="mr-auto">
                      <User size={26} className="mt-1" />
                    </span>
                  )}

                  <p className="text-justify w-full ml-2 mr-5 text-xs line-clamp-2">
                    {" "}
                    {value.content}
                  </p>

                  {value.isRead === false ? (
                    <span className="flex p-1 rounded-full bg-blue-600"></span>
                  ) : null}
                </Button>
              </div>
              <div className="ml-auto">
                <Button
                  variant={"outline"}
                  onClick={() => {
                    deleteNotifications(value.notificationId);
                    let newNotificationsArray = [...notificationsArray];
                    newNotificationsArray.splice(index, 1);
                    setNotificationsArray(newNotificationsArray);
                  }}
                >
                  <Trash2 className="h-4 w-4"></Trash2>
                </Button>
              </div>
            </div>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// <Button
//                 className="ml-atuo"
//                 type="button"
//                 variant="outline"
//                 onClick={() => {
//                   deleteNotifications(value.notificationId);
//                   let newNotificationsArray = [...notificationsArray];
//                   newNotificationsArray.splice(index, 1);
//                   // setNotificationsArray(newNotificationsArray);
//                 }}
//               >
//                 <Trash2 className="h-4 w-4" />
//               </Button>
