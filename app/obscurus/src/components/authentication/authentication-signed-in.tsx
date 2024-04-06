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
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { useUserData } from "@/app/user-provider";
import { Users } from "@obscurus/database/src/sql.generated";


export default function AuthenticationSignedIn({
  updateUserPassword,
  user
}: {
  updateUserPassword: Function;
  user?: Users;
}) {


console.log("User in signed in", user);


  const userEmail = user?.email || "";

  const firstName = user?.givenName || "";

  const lastName = user?.familyName || "";




  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  async function handleLogOut() {
    try {
      await signOut();

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer w-8 h-8 text-xs">
          <AvatarImage alt={firstName + " " + lastName} />
          <AvatarFallback>
            {firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase()}
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
