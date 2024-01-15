import { axios } from "react";

export function getToken(inputCode: string) {
  const awsCogintotokenEndpoint =
    "https://obscuruslogin.auth.us-west-2.amazoncognito.com/oauth2/token";

  // Client credentials (Base64-encoded)
  const clientI_id = "4fh382tdlodqdcoi0c710fhv7k";
  const client_secret = "";
  const code = inputCode;
  const redirect_uri = "com.myclientapp://myclient/redirect";
}
