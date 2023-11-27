{/*IMPORTS*/}
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

{/*FUNCTIONS*/}
const Login = () => {
    const router = useRouter();
    const [signedIn, setSignedIn] = useState(false);
    const [showSignInDialog, setShowSignInDialog] = useState(false);
    const handleAuth = (route: string) => {
        if (signedIn) {
          router.push(route);
        } else {
          setShowSignInDialog(true);
        }
    };
    const SignIn = () => {
        setSignedIn(true);
    };
    const SignOut = () => {
        setSignedIn(false);
    };
    return (
        <div>
            {signedIn ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Avatar onClick={() => setSignedIn(false)}>
                        <AvatarImage src="https://github.com/jansdhillon.png" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={SignOut}>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                ) : (
                <div className="grid items-center justify-end">
                    <Dialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
                    <DialogTrigger asChild>
                        <Button variant="default"><span className="font-bold text-base">Sign In</span></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogDescription>
                            Choose your login provider below.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div id="googleButton" className="grid grid-cols-4 items-center gap-4 w-full">
                                <Button className="w-full col-span-4" onClick={SignIn}>
                                    <span className="font-bold text-base">Sign in with Google</span>
                                </Button>
                            </div>
                            <div id="microsoftButton" className="grid grid-cols-4 items-center gap-4 w-full">
                                <Button className="w-full col-span-4" onClick={SignIn}>
                                    <span className="font-bold text-base">Sign in with Microsoft</span>
                                </Button>
                            </div>
                            <div id="facebookButton" className="grid grid-cols-4 items-center gap-4 w-full">
                                <Button className="w-full col-span-4" onClick={SignIn}>
                                    <span className="font-bold text-base">Sign in with Facebook</span>
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                    </Dialog>
                </div>
            )}
        </div>
    );
};

{/*EXPORT*/}
export default Login;