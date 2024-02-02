//this code was from AI
import { useState } from "react";
import { Auth, Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    region: "us-west-2",
    userPoolId: "us-west-2_Zjw9UuRG5",
    userPoolWebClientId: "g0arfuhrmi7uctc1g07reudp3",
  },
});

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [verifying, setVerifying] = useState(false);

  return (
    <div className="signup">
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {verifying && (
        <input
          type="text"
          placeholder="code"
          onChange={(e) => setCode(e.target.value)}
        />
      )}
      <button
        onClick={() => {
          if (verifying) {
            Auth.confirmSignUp(email, code);
          } else {
            Auth.signUp({
              username: email,
              password,
            })
              .then(() => {
                setVerifying(true);
              })
              .catch((e) => alert(e));
          }
        }}
      >
        {verifying ? "Verify" : "Sign up"}
      </button>
    </div>
  );
}
