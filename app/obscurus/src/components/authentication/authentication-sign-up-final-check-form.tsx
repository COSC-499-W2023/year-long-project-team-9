import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function SignUpFinalCheckForm({
  setSignUpState,
  email,
  firstName,
  lastName,
  triggerSignUp,
}: {
  setSignUpState: Function;
  email: string;
  firstName: string;
  lastName: string;
  triggerSignUp: Function;
}) {
  return (
    <div className="space-y-4">
      <Label>Is this information correct?</Label>
      <div className="flex flex-col space-y-2">
        <div>
          <Label>Email</Label>
          <Input disabled placeholder={email} />
        </div>
        <div>
          <Label>First Name</Label>
          <Input disabled placeholder={firstName} />
        </div>
        <div>
          <Label>Last Name</Label>
          <Input disabled placeholder={lastName} />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Button onClick={() => setSignUpState("emailNames")} className="w-full">
          <ArrowLeft /> No, Go Back
        </Button>
        <Button onClick={() => triggerSignUp()} className="w-full">
          Yes, Sign Up <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
