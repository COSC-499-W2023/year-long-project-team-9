import React, { useState } from "react";
import { Auth, Amplify } from "aws-amplify";

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
      await Auth.signIn(email, password);
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
