import { Bell, FileText, Trash2 } from "lucide-react";
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

export default function NotificationsComponent({
  readNotification,
  deleteNotifications,
  notifications,
}: {
  readNotification: Function;
  deleteNotifications: Function;
  notifications: Notification[];
}) {
  console.log(notifications);
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
        <Button
          onClick={() => {
            readNotification("01ae65a9-aa87-4c8d-b61a-7d468f04ab4e");
          }}
        ></Button>
        <NotificationSummary
          isRead={true}
          content={""}
          type={"REQUEST"}
          referenceId={"f50a22fb-f9ce-4c83-8954-60d6aa4dba3b"}
          deleteNotifications={deleteNotifications}
          readNotification={readNotification}
          id="82f4c6bc-aa01-4b70-ab38-ea00b3d5eae8"
        ></NotificationSummary>
        <NotificationSummary
          isRead={true}
          content={""}
          type={"Profile"}
          referenceId={"f50a22fb-f9ce-4c83-8954-60d6aa4dba3b"}
          deleteNotifications={deleteNotifications}
          readNotification={readNotification}
          id="d14e0786-01d9-4da2-9372-618b08edf863"
        ></NotificationSummary>
        <NotificationSummary
          isRead={false}
          content={
            "fk;djaksdjf klsdjfk; jsadlk ahdlf ah.d hashsjkdfh cjksdah jksagh asjlgh lsaghlska"
          }
          type={"CHAT"}
          referenceId={"f50a22fb-f9ce-4c83-8954-60d6aa4dba3b"}
          deleteNotifications={deleteNotifications}
          readNotification={readNotification}
          id="d14e0786-01d9-4da2-9372-618b08edf863"
        ></NotificationSummary>
        <NotificationSummary
          isRead={true}
          content={""}
          type={"SUBMIT"}
          referenceId={"f50a22fb-f9ce-4c83-8954-60d6aa4dba3b"}
          deleteNotifications={deleteNotifications}
          readNotification={readNotification}
          id="d14e0786-01d9-4da2-9372-618b08edf863"
        ></NotificationSummary>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
