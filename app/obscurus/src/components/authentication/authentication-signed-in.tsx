"use client";
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
  const handleLogOut = () => {
    signOutUser();
  };

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
          <DropdownMenuItem>
            <Link href={"/request"} className="w-full">
              Request
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/submit"} className="w-full">
              Submit
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/chat"} className="w-full">
              Chat
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/profile"} className="w-full">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Change Password</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLogOut()}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
