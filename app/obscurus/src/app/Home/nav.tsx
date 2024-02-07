import { useState } from "react";
import Nav from "@/app/nav";
import { Inbox, FileUp, Youtube, MessageCircle, Sun } from "lucide-react";

export const Nav2 = () => {
    const defaultLayout = [265, 440, 655];
    const defaultCollapsed = false;
    const [activeComponent, setActiveComponent] = useState('mainContent');
    return(
        <Nav
        isCollapsed={false}
        links={[
          {
            title: "Requests",
            icon: Inbox,
            variant: "ghost",

          },
          {
            title: "Submissions",
            icon: FileUp,
            variant: "ghost",
          },
          {
            title: "My Videos",
            icon: Youtube,
            variant: "ghost",
          },
          {
            title: "Chat",
            icon: MessageCircle,
            variant: "ghost",
          },
        ]}
      />
    )
}