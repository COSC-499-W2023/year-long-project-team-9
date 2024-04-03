"use client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "../modified-shadcn-ui-components/modified-alert-dialog";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { X } from "lucide-react";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import UpdatePasswordForm from "./authentication-update-password-form";
import { useState } from "react";

export default function AuthenticationSignedIn({
  updateUserPassword,
  signOutUser,
  userEmail,
  userName,
}: {
  updateUserPassword: Function;
  signOutUser: Function;
  userEmail: string;
  userName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
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
          <AlertDialog open={isOpen} onOpenChange={() => setIsOpen(true)}>
            <AlertDialogTrigger asChild>
              <span className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                Change Password
              </span>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[30%] max-h-[90%] flex flex-col">
              <AlertDialogHeader className="flex items-end">
                <AlertDialogCancel>
                  <X />
                </AlertDialogCancel>
              </AlertDialogHeader>
              <AlertDialogDescription className="justify-center w-full max-h-full overflow-auto">
                <Label className="flex justify-start text-2xl font-black">
                  Update Password
                </Label>
                <Separator className="mt-1 mb-2" />
                <UpdatePasswordForm
                  updateUserPassword={updateUserPassword}
                  setIsOpen={setIsOpen}
                  userEmail={userEmail}
                />
              </AlertDialogDescription>
            </AlertDialogContent>
          </AlertDialog>
          <DropdownMenuItem onClick={handleLogOut}>Log out</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
