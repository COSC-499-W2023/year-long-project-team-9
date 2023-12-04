{/*IMPORTS*/}
import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
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
                        <Button><span className="font-bold text-base">Sign In</span></Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                        <DialogTitle>Sign In</DialogTitle>
                        <DialogDescription>
                            Choose your login provider below.
                        </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col items-center gap-4">
                            <div id="googleButton">
                                <Button className="h-40px min-w-min bg-white dark:bg-[#131314] border-[#747775] dark:border-[#8E918F] border-[1px] text-[#1F1F1F] dark:text-[#E3E3E3] text-sm font-roboto font-medium px-3 py-2.5 hover:bg-transparent" onClick={SignIn}>
                                    <Image
                                        src="/Google_Logo.svg"
                                        alt="google"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="pl-2.5">Log in with Google</span>
                                </Button>
                            </div>
                            <div id="facebookButton">
                                <Button className="h-40px min-w-min bg-[#FFFFFF] dark:bg-[#1877F2] border-[#1877F2] border-[1px] text-[#1877F2] dark:text-[#FFFFFF] text-sm font-medium px-3 py-2.5 hover:bg-transparent" onClick={SignIn}>
                                    {theme === "light" && (
                                        <Image
                                        src="/Facebook_Logo_Light.svg"
                                        alt="facebook"
                                        width={20}
                                        height={20}
                                        />
                                    )}
                                    {theme === "dark" && (
                                        <Image
                                        src="/Facebook_Logo_Dark.svg"
                                        alt="facebook"
                                        width={20}
                                        height={20}
                                        />
                                    )}
                                    <span className="pl-3">Log in with Facebook</span>
                                </Button>
                            </div>
                            <div id="microsoftButton">
                                <Button className="h-41px min-w-min bg-[#FFFFFF] dark:bg-[#2F2F2F] border-[#8C8C8C] dark:border-[#2F2F2F] border-[1px] text-[#5E5E5E] dark:text-[#FFFFFF] text-[15px] font-segoe font-semibold px-3 py-2.5 hover:bg-transparent rounded-none" onClick={SignIn}>
                                    <Image
                                        src="/Microsoft_Logo.svg"
                                        alt="microsoft"
                                        width={20}
                                        height={20}
                                    />
                                    <span className="pl-2.5">Log in with Microsoft</span>
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