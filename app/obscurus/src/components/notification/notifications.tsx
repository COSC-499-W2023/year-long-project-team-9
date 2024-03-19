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
  return <div>{email}</div>;
}
