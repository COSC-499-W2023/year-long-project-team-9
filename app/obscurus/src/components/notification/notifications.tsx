import { Bell } from "lucide-react";
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

export default function Notifications({
  notificationsRead,
  deleteNotifications,
  getNotificationsViaEmail,
}: {
  notificationsRead: Function;
  deleteNotifications: Function;
  getNotificationsViaEmail: Function;
}) {
  const [email, setEmail] = useState("");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getEmail()
      .then((email) => {
        setEmail(email);
        getNotificationsViaEmail(email)
          .then((value: any) => {
            setNotifications(value);
          })
          .catch(setNotifications([]));
      })
      .catch((err) => {
        setEmail("");
      });
  }, []);
  console.log(notifications);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" data-testid="theme-toggle">
          <Bell size={25} className="stroke-primary" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <NotificationSummary
          isRead={false}
          date={"2024-03-02"}
          content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget nunc aliquet nibh aliquet dapibus aliquet et nisi. Proin laoreet quam a leo efficitur bibendum. Aenean consequat porta dolor. Ut ut convallis orci. Integer dignissim massa massa, et congue tellus vestibulum id. Ut tristique, diam ex."
          }
        ></NotificationSummary>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
