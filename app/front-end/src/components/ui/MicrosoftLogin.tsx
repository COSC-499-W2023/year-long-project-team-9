
import React, { useState } from "react";
import MicrosoftLogin from "react-microsoft-login";
import { Button } from "./button";
import { PublicClientApplication } from "@azure/msal-browser";
import { AuthError } from "@azure/msal-common";

export default (props: any) => {
  const authHandler = (err: any, data: any) => {
    console.log(err, data);
  };

  const [customButton, onCustomButtonChange] = useState(false);
  const [withUserData, onWithUserDataChange] = useState(true);
  const [customClassName, onCustomClassNameChange] = useState("my-button");

  return (
    <MicrosoftLogin
          withUserData={withUserData}
          debug={false}
          clientId={"clientId"}
          forceRedirectStrategy={true}
          children={customButton && <Button>Custom button</Button>}
          useLocalStorageCache={true} authCallback={function (error: AuthError | null, result?: any, instance?: PublicClientApplication | undefined): void {
              throw new Error("Function not implemented.");
          } }  />
  );
};