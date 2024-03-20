"use client";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AuthenticationSignedIn({
  signOutUser,
  userEmail,
  userName,
}: {
  signOutUser: Function;
  userEmail: string;
  userName: string;
}) {
  const router = useRouter();
  console.log("Test1");
  function pushToRoute(route: string) {
    router.push(route);
  }
  function handleLogOut() {
    // signOutUser();
    router.push("/");
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer">
          <AvatarImage alt={userName} />
          <AvatarFallback>
            {userName
              .split(" ")
              .map((word) => word.charAt(0))
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => pushToRoute("/request")}>
            Request
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => pushToRoute("/submit")}>
            Submit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => pushToRoute("/chat")}>
            Chat
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => pushToRoute("/profile")}>
            Profile
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Change Password</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
