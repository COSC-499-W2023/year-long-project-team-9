{/*IMPORTS*/}
import React, { useState } from "react";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme } from "next-themes";

{/*FUNCTIONS*/}
const Login = () => {
    const { theme } = useTheme();
    const [signedIn, setSignedIn] = useState(false);
    const [showSignInDialog, setShowSignInDialog] = useState(false);
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
                        <div className="flex flex-col items-center gap-2">
                            <div id="googleButton" className="">
                                {theme === "light" && (
                                    <Button variant="outline" className="h-40px min-w-min bg-white stroke-[#747775] stroke-1 text-[#1F1F1F] text-sm font-roboto font-medium px-3 py-2.5" onClick={SignIn}>
                                        <Image
                                            src="/Google_Logo.svg"
                                            alt="google"
                                            width={20}
                                            height={20}
                                        />
                                        <span className="pl-2.5">Sign in with Google</span>
                                    </Button>
                                )}
                                {theme === "dark" && (
                                    <Button className="" onClick={SignIn}>
                                        <Image
                                            src="/Google_Logo.svg"
                                            alt="google"
                                            width={20}
                                            height={20}
                                        />
                                        <span className="">Sign in with Google</span>
                                    </Button>
                                )}
                            </div>
                            <div id="microsoftButton" className="grid items-center gap-4 w-full">
                                <Button className="" onClick={SignIn}>
                                    <span className="">Sign in with Microsoft</span>
                                </Button>
                            </div>
                            <div id="facebookButton" className="grid items-center gap-4 w-full">
                                <Button className="" onClick={SignIn}>
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