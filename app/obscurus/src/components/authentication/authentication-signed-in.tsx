"use client";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
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
  async function handleLogOut() {
    await signOutUser().then(() => window.location.reload());
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
          <Link href="/request">
            <DropdownMenuItem>Request</DropdownMenuItem>
          </Link>
          <Link href="/submit">
            <DropdownMenuItem>Submit</DropdownMenuItem>
          </Link>
          <Link href="/chat">
            <DropdownMenuItem>Chat</DropdownMenuItem>
          </Link>
          <Link href="/profile">
            <DropdownMenuItem>Profile</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Change Password</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
