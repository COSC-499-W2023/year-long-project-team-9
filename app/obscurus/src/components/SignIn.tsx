"use client"
import React, { useState } from "react";
import { Auth } from "aws-amplify";
import Image from "next/image";
import { useTheme } from "next-themes";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { isEmailValid } from "@/regular-expression/emailRegularExpression";
import { passwordCognitoDefaultRegularExpression } from "@/regular-expression/passwordCognitoDefaultRegularExpression";
import { isSignedIn, signOutUser } from "@/components/auth/authenticationMethods"
import { format } from "date-fns";

{
  /*FUNCTIONS*/
}
const SignIn = () => {
  const router = useRouter();
  const [signedIn, setSignedIn] = useState(false);
  const [showSignInDialog, setShowSignInDialog] = useState(false);
  const [dialogState, setDialogState] = useState(0);

  // SIGN IN FUNCTIONS
  const [signInState, setSignInState] = useState(0);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSignInEmailSubmit = () => {
    const emailValidationCheck = isEmailValid(email);
    setEmailValid(emailValidationCheck);
    if (emailValidationCheck) {
      setSignInState(1);
    }
  };
  const [password, setPassword] = useState("");
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  async function handleSignInSubmit() {
    try {
      await Auth.signIn(email, password);
      setSignedIn(true);
      router.push("/");
    } catch (error) {
      // Prints the full error
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(String(error));
      }
    }
  }
  async function handleSignOutSubmit() {
    try {
      await signOutUser();
      setSignedIn(false);
      router.push("/");
    } catch (error) {
      // Prints the full error
      console.error(error);
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert(String(error));
      }
    }
  }

  // FORGOT PASSWORD FUNCTIONS
  const [forgotPasswordState, setForgotPasswordState] = useState(0);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordEmailExists, setForgotPasswordEmailExists] =
    useState(true);
  const [forgotPasswordEmailValid, setForgotPasswordEmailValid] =
    useState(true);
  const handleForgotPasswordEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForgotPasswordEmail(event.target.value);
  };
  const handleForgotPasswordUserExist = (testEmail: string) => {
    return Auth.signIn(testEmail.toLowerCase(), "123")
      .then((res) => {
        return false;
      })
      .catch((error) => {
        const code = error.code;
        console.log(error);
        switch (code) {
          case "UserNotFoundException":
            return false;
          case "NotAuthorizedException":
            return true;
          case "PasswordResetRequiredException":
            return false;
          case "UserNotConfirmedException":
            return false;
          default:
            return false;
        }
      });
  };
  async function handleForgotPasswordEmailSubmit() {
    var doesUserExist;
    await handleForgotPasswordUserExist(forgotPasswordEmail).then(
      (result) => (doesUserExist = result)
    );
    console.log(doesUserExist);
    if (doesUserExist) {
      try {
        Auth.forgotPassword(forgotPasswordEmail);
        setForgotPasswordState(1);
      } catch (error) {
        console.log(error);
        setForgotPasswordEmailValid(false);
      }
    } else {
      setForgotPasswordEmailExists(false);
    }
  }
  const [forgotPasswordCode, setForgotPasswordCode] = useState("");
  const handleForgotPasswordCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForgotPasswordCode(event.target.value);
  };
  const [forgotPasswordCodeValid, setForgotPasswordCodeValid] = useState(true);
  const handleForgotPasswordCodeSubmit = () => {
    if (forgotPasswordCode.length > 0) {
      setForgotPasswordCodeValid(true);
      setForgotPasswordState(2);
    } else {
      setForgotPasswordCodeValid(false);
    }
  };
  const [forgotPasswordNewPassword, setForgotPasswordNewPassword] =
    useState("");
  const handleForgotPasswordNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForgotPasswordNewPassword(event.target.value);
  };
  const [
    forgotPasswordConfirmNewPassword,
    setForgotPasswordConfirmNewPassword,
  ] = useState("");
  const handleForgotPasswordConfirmNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForgotPasswordConfirmNewPassword(event.target.value);
  };
  const [forgotPasswordNewPasswordValid, setForgotPasswordNewPasswordValid] =
    useState(true);
  const [forgotPasswordNewPasswordMatch, setForgotPasswordNewPasswordMatch] =
    useState(true);

  async function handleForgotPasswordNewPasswordSubmit() {
    if (passwordCognitoDefaultRegularExpression(forgotPasswordNewPassword)) {
      if (forgotPasswordNewPassword === forgotPasswordConfirmNewPassword) {
        try {
          await Auth.forgotPasswordSubmit(
            forgotPasswordEmail,
            forgotPasswordCode,
            forgotPasswordNewPassword
          );
          setForgotPasswordState(3);
        } catch (error) {
          console.log(error);
          setForgotPasswordNewPasswordValid(false);
        }
      } else {
        setForgotPasswordNewPasswordMatch(false);
      }
    } else {
      setForgotPasswordNewPasswordValid(false);
    }
  }
  const handleForgotPasswordFinalSubmit = () => {
    setDialogState(0);
    setForgotPasswordState(0);
  };

  // SIGN UP FUNCTIONS
  const [signUpState, setSignUpState] = useState(0);
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpEmailValid, setSignUpEmailValid] = useState(true);
  const handleSignUpEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpEmail(event.target.value);
  };
  const handleSignUpEmailSubmit = () => {
    const signUpEmailValidationCheck = isEmailValid(signUpEmail);
    setSignUpEmailValid(signUpEmailValidationCheck);
    if (signUpEmailValidationCheck) {
      setSignUpState(1);
    }
  };
  const [signUpGivenName, setSignUpGivenName] = useState("");
  const handleSignUpGivenNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpGivenName(event.target.value);
  };
  const [signUpFamilyName, setSignUpFamilyName] = useState("");
  const handleSignUpFamilyNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpFamilyName(event.target.value);
  };
  const [signUpNamesValid, setSignUpNamesValid] = useState(true);
  const handleSignUpNameSubmit = () => {
    if (signUpGivenName.length > 0 && signUpFamilyName.length > 0) {
      setSignUpNamesValid(true);
      setSignUpState(2);
    } else {
      setSignUpNamesValid(false);
    }
  };
  const [signUpBirthdate, setSignUpBirthdate] = useState<Date | undefined>(
    new Date()
  );
  const [signUpBirthdateString, setSignUpBirthdateString] = useState("");
  const [signUpBirthdateValid, setSignUpBirthdateValid] = useState(true);
  const handleSignUpBirthdateSubmit = () => {
    const currDate = new Date();
    if (signUpBirthdate === undefined) {
      setSignUpBirthdateValid(false);
    } else {
      let age = currDate.getFullYear() - signUpBirthdate?.getFullYear();
      const monthDiff = currDate.getMonth() - signUpBirthdate.getMonth();
      // If the current month is before the birth month, or it's the same month but the day is before the birth day, subtract a year.
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && currDate.getDate() < signUpBirthdate.getDate())
      ) {
        age--;
      }
      if (age < 13) {
        setSignUpBirthdateValid(false);
      } else {
        setSignUpBirthdateValid(true);
        if (signUpBirthdate === undefined) {
          setSignUpBirthdateString("");
        } else {
          setSignUpBirthdateString(format(signUpBirthdate, "yyyy-MM-dd"));
        }
        setSignUpState(3);
      }
    }
  };
  const [signUpPassword, setSignUpPassword] = useState("");
  const handleSignUpPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpPassword(event.target.value);
  };
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const handleSignUpConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpConfirmPassword(event.target.value);
  };
  const [signUpPasswordValid, setSignUpPasswordValid] = useState(true);
  const [signUpPasswordMatch, setSignUpPasswordMatch] = useState(true);
  const handleSignUpPasswordSubmit = () => {
    if (!passwordCognitoDefaultRegularExpression(signUpPassword)) {
      setSignUpPasswordValid(false);
    } else if (signUpPassword != signUpConfirmPassword) {
      setSignUpPasswordMatch(false);
    } else {
      try {
        Auth.signUp({
          username: signUpEmail,
          password: signUpPassword,
          attributes: {
            given_name: signUpGivenName,
            family_name: signUpFamilyName,
            birthdate: signUpBirthdateString,
          },
        });
        setSignUpState(5);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const [signUpVerificationCode, setSignUpVerificationCode] = useState("");
  const handleSignUpVerificationCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSignUpVerificationCode(event.target.value);
  };
  const [signUpVerificationValid, setSignUpVerificationValid] = useState(true);
  const handleSignUpVerificationSubmit = () => {
    try {
      Auth.confirmSignUp(signUpEmail, signUpVerificationCode);
      setSignUpState(6);
    } catch (error) {
      console.log(error);
      setSignUpVerificationValid(false);
    }
  };
  const handleSignUpFinalSubmit = () => {
    setDialogState(0);
    setSignUpState(0);
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
            <DropdownMenuItem onClick={handleSignOutSubmit}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <div className="grid items-center justify-end">
          <Dialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
            <DialogTrigger asChild>
              <Button>
                <span className="font-bold text-base">Sign In</span>
              </Button>
            </DialogTrigger>
            <DialogContent
              id="signInDialog"
              className="sm:max-w-[300px] overflow-hidden"
              onCloseAutoFocus={() => [
                setDialogState(0),
                setSignInState(0),
                setEmail(""),
                setPassword(""),
                setEmailValid(true),
                setForgotPasswordState(0),
                setForgotPasswordEmail(""),
                setForgotPasswordEmailExists(true),
                setForgotPasswordEmailValid(true),
                setForgotPasswordCode(""),
                setForgotPasswordCodeValid(true),
                setForgotPasswordNewPassword(""),
                setForgotPasswordConfirmNewPassword(""),
                setForgotPasswordNewPasswordValid(true),
                setForgotPasswordNewPasswordMatch(true),
                setSignUpState(0),
                setSignUpEmail(""),
                setSignUpEmailValid(true),
                setSignUpGivenName(""),
                setSignUpFamilyName(""),
                setSignUpNamesValid(true),
                setSignUpBirthdate(new Date()),
                setSignUpBirthdateString(""),
                setSignUpBirthdateValid(true),
                setSignUpPassword(""),
                setSignUpConfirmPassword(""),
                setSignUpPasswordMatch(true),
                setSignUpVerificationCode(""),
                setSignUpVerificationValid(true),
              ]}
            >
              {dialogState === 0 && (
                <div>
                  <DialogHeader className="pb-2">
                    <DialogTitle className="text-center">Sign In</DialogTitle>
                  </DialogHeader>
                  {signInState === 0 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="googleSignIn" className="pb-2">
                        <Button className="h-40px bg-white dark:bg-[#131314] border-[#747775] dark:border-[#8E918F] border-[1px] text-[#1F1F1F] dark:text-[#E3E3E3] text-sm font-roboto font-medium px-3 py-2.5 hover:bg-transparent">
                          <Image
                            src="/Google_Logo.svg"
                            alt="google"
                            width={20}
                            height={20}
                          />
                          <span className="pl-2.5">Sign in with Google</span>
                        </Button>
                      </div>
                      <div id="signInSeparator" className="relative pb-2">
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                      </div>
                      <div id="emailSignIn" className="grid gap-1.5">
                        <Input
                          value={email}
                          onChange={handleEmailChange}
                          placeholder="Email Address *"
                        ></Input>
                        {!emailValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Please enter a valid email!
                          </p>
                        )}
                        <Button
                          onClick={handleSignInEmailSubmit}
                          className="w-full"
                        >
                          <span>Sign in with Email</span>
                        </Button>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(1)}
                        >
                          Forgot your password?
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signUpConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(2)}
                        >
                          Create New Account
                        </Button>
                      </div>
                    </div>
                  )}
                  {signInState === 1 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="emailSignIn" className="grid gap-1.5">
                        <Label className="font-bold w-3/4 justify-self-center text-ellipsis overflow-hidden">
                          {email}
                        </Label>
                        <Input
                          value={password}
                          onChange={handlePasswordChange}
                          type="password"
                          placeholder="Password *"
                        ></Input>
                        <Button className="w-full" onClick={handleSignInSubmit}>
                          <span>Sign in</span>
                        </Button>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(1)}
                        >
                          Forgot your password?
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signUpConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(2)}
                        >
                          Create New Account
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {dialogState === 1 && (
                <div>
                  <DialogHeader className="pb-2">
                    <DialogTitle className="text-center">
                      Forgot Password
                    </DialogTitle>
                  </DialogHeader>
                  {forgotPasswordState === 0 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="emailForgotPassword" className="grid gap-1.5">
                        <Input
                          value={forgotPasswordEmail}
                          onChange={handleForgotPasswordEmailChange}
                          placeholder="Email Address *"
                          className="pb-2"
                        ></Input>
                        {!forgotPasswordEmailExists && (
                          <p role="alert" className="text-red-500 text-xs">
                            This email does not have an account!
                          </p>
                        )}
                        {!forgotPasswordEmailValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            An error occurred, please try again later!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleForgotPasswordEmailSubmit}
                        >
                          <span>Send Reset Email</span>
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {forgotPasswordState === 1 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="emailForgotPassword" className="grid gap-1.5">
                        <Input
                          value={forgotPasswordCode}
                          onChange={handleForgotPasswordCodeChange}
                          placeholder="Verification Code *"
                          className="pb-2"
                        ></Input>
                        {!forgotPasswordCodeValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Please enter a valid verification code!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleForgotPasswordCodeSubmit}
                        >
                          <span>Next</span>
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {forgotPasswordState === 2 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="emailForgotPassword" className="grid gap-1.5">
                        <Input
                          type="password"
                          value={forgotPasswordNewPassword}
                          onChange={handleForgotPasswordNewPasswordChange}
                          placeholder="New Password *"
                          className="pb-2"
                        ></Input>
                        <Input
                          type="password"
                          value={forgotPasswordConfirmNewPassword}
                          onChange={
                            handleForgotPasswordConfirmNewPasswordChange
                          }
                          placeholder="Confirm New Password *"
                          className="pb-2"
                        ></Input>
                        {!forgotPasswordNewPasswordValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Password is not valid! Passwords must have a capital
                            letter, a number, and a special character!
                          </p>
                        )}
                        {!forgotPasswordNewPasswordMatch && (
                          <p role="alert" className="text-red-500 text-xs">
                            Passwords do not match!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleForgotPasswordNewPasswordSubmit}
                        >
                          <span>Reset Password</span>
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {forgotPasswordState === 3 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="finalSignUp" className="grid gap-1.5 pb-2">
                        <Label className="font-bold justify-self-center text-ellipsis overflow-hidden pb-1">
                          Your password has been reset!
                        </Label>
                        <Button
                          className="w-full"
                          onClick={handleForgotPasswordFinalSubmit}
                        >
                          <span>Sign in to your account</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {dialogState === 2 && (
                <div>
                  <DialogHeader className="pb-2">
                    <DialogTitle className="text-center">Sign Up</DialogTitle>
                  </DialogHeader>
                  {signUpState === 0 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="googleSignUp" className="pb-2">
                        <Button className="h-40px bg-white dark:bg-[#131314] border-[#747775] dark:border-[#8E918F] border-[1px] text-[#1F1F1F] dark:text-[#E3E3E3] text-sm font-roboto font-medium px-3 py-2.5 hover:bg-transparent">
                          <Image
                            src="/Google_Logo.svg"
                            alt="google"
                            width={20}
                            height={20}
                          />
                          <span className="pl-2.5">Sign up with Google</span>
                        </Button>
                      </div>
                      <div id="signUpSeparator" className="relative pb-2">
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                      </div>
                      <div id="emailSignUp" className="grid gap-1.5 pb-2">
                        <Input
                          value={signUpEmail}
                          onChange={handleSignUpEmailChange}
                          placeholder="Email Address *"
                        ></Input>
                        {!signUpEmailValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Please enter a valid email!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleSignUpEmailSubmit}
                        >
                          <span>Sign up with Email</span>
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {signUpState === 1 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="namesSignUp" className="grid gap-1.5 pb-2">
                        <Input
                          value={signUpGivenName}
                          onChange={handleSignUpGivenNameChange}
                          placeholder="Given Name *"
                        ></Input>
                        <Input
                          value={signUpFamilyName}
                          onChange={handleSignUpFamilyNameChange}
                          placeholder="Family Name *"
                        ></Input>
                        {!signUpNamesValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Please enter valid names!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleSignUpNameSubmit}
                        >
                          <span>Next</span>
                        </Button>
                      </div>
                      <div id="signUpGoBack" className="relative pb-2">
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setSignUpState(signUpState - 1)}
                        >
                          Go Back a Step
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {signUpState === 2 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="birthdateSignUp" className="grid gap-1.5 pb-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant={"outline"} className="w-full">
                              <CalendarIcon className="mr-2 h-4 w-4 flex-wrap" />
                              {signUpBirthdate
                                ? format(signUpBirthdate, "yyyy-MM-dd")
                                : ""}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={signUpBirthdate}
                              onSelect={setSignUpBirthdate}
                              onDayClick={setSignUpBirthdate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {!signUpBirthdateValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Users must be 13 or older to use obscurus!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleSignUpBirthdateSubmit}
                        >
                          <span>Next</span>
                        </Button>
                      </div>
                      <div id="signUpGoBack" className="relative pb-2">
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setSignUpState(signUpState - 1)}
                        >
                          Go Back a Step
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {signUpState === 3 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="checkSignUp" className="grid gap-1.5 pb-2">
                        <Label className="font-bold justify-self-center text-ellipsis overflow-hidden pb-1">
                          Is your information correct?
                        </Label>
                        <Label className="justify-self-center text-ellipsis overflow-hidden pb-1">
                          {signUpEmail}
                        </Label>
                        <Label className="justify-self-center text-ellipsis overflow-hidden pb-1">
                          {signUpGivenName} {signUpFamilyName}
                        </Label>
                        <Label className="justify-self-center text-ellipsis overflow-hidden pb-1">
                          {signUpBirthdate ? (
                            format(signUpBirthdate, "yyyy-MM-dd")
                          ) : (
                            <span></span>
                          )}
                        </Label>
                        <Button
                          className="w-full"
                          onClick={() => setSignUpState(4)}
                        >
                          <span>Next</span>
                        </Button>
                      </div>
                      <div id="signUpGoBack" className="relative pb-2">
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setSignUpState(signUpState - 1)}
                        >
                          Go Back a Step
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {signUpState === 4 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="passwordSignUp" className="grid gap-1.5 pb-2">
                        <Input
                          type="password"
                          value={signUpPassword}
                          onChange={handleSignUpPasswordChange}
                          placeholder="Password *"
                        ></Input>
                        <Input
                          type="password"
                          value={signUpConfirmPassword}
                          onChange={handleSignUpConfirmPasswordChange}
                          placeholder="Confirm password *"
                        ></Input>
                        {!signUpPasswordValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            Password is not valid! Passwords must have a capital
                            letter, a number, and a special character!
                          </p>
                        )}
                        {!signUpPasswordMatch && (
                          <p role="alert" className="text-red-500 text-xs">
                            Passwords do not match!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleSignUpPasswordSubmit}
                        >
                          <span>Next</span>
                        </Button>
                      </div>
                      <div id="signUpGoBack" className="relative pb-2">
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or
                          </span>
                        </div>
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setSignUpState(signUpState - 1)}
                        >
                          Go Back a Step
                        </Button>
                      </div>
                      <hr className="w-3/4 bg-gray-500" />
                      <div id="signInConnector" className="w-3/4 text-center">
                        <Button
                          className="bg-background text-primary text-xs justify-self-center hover:bg-transparent shadow-none h-3/4"
                          onClick={() => setDialogState(0)}
                        >
                          Sign in to your account
                        </Button>
                      </div>
                    </div>
                  )}
                  {signUpState === 5 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="verifySignUp" className="grid gap-1.5 pb-2">
                        <Label className="font-bold justify-self-center text-ellipsis overflow-hidden pb-1">
                          A verification code has been sent to the email you
                          signed up with.
                        </Label>
                        <Input
                          value={signUpVerificationCode}
                          onChange={handleSignUpVerificationCodeChange}
                          placeholder="Verification Code *"
                        ></Input>
                        {!signUpVerificationValid && (
                          <p role="alert" className="text-red-500 text-xs">
                            There was an error in verifying, please try again!
                          </p>
                        )}
                        <Button
                          className="w-full"
                          onClick={handleSignUpVerificationSubmit}
                        >
                          <span>Verify my account</span>
                        </Button>
                      </div>
                    </div>
                  )}
                  {signUpState === 6 && (
                    <div className="flex flex-col w-full items-center">
                      <div id="finalSignUp" className="grid gap-1.5 pb-2">
                        <Label className="font-bold justify-self-center text-ellipsis overflow-hidden pb-1">
                          Your account is now verified!
                        </Label>
                        <Button
                          className="w-full"
                          onClick={handleSignUpFinalSubmit}
                        >
                          <span>Sign in to your account</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

{
  /*EXPORT*/
}
export default SignIn;
