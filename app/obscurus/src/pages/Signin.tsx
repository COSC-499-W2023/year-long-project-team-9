//this code is mainly from AI
import React, { useState } from "react";
import { Auth, Amplify } from "aws-amplify";
import { authMethods } from "../auth/authMethods";

Amplify.configure({
  Auth: {
    region: "us-west-2",
    userPoolId: "us-west-2_Zjw9UuRG5",
    userPoolWebClientId: "g0arfuhrmi7uctc1g07reudp3",
  },
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const user = await Auth.signIn(email, password);
      authMethods.setUserSessionToken(user);
      console.log(authMethods.isAuthenticated());
      console.log(authMethods.getSub());
      console.log(authMethods.getEmail());
      alert("Logged in");
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

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={!validateForm()} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
