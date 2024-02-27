import { Button } from "@/components/ui/button";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function PasswordInput({
  form,
  userPassword,
}: {
  form: any;
  userPassword: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  function modifyChangingPassword(userPassword: string, newPassword: string) {
    if (userPassword === newPassword) {
      setChangingPassword(false);
      form.clearErrors("confirmPassword");
      form.resetField("confirmPassword");
    } else {
      setChangingPassword(true);
    }
  }
  return (
    <>
      <FormItem>
        <FormLabel>Password</FormLabel>
        <div className="flex flex-col-2 gap-1 mb-1">
          {/* TODO: Make the dots much smaller */}
          <Input
            maxLength={25}
            {...form.register("password")}
            type={showPassword === true ? "text" : "password"}
            onInput={(e) => {
              modifyChangingPassword(userPassword, e.currentTarget.value);
            }}
          ></Input>
          {showPassword === true ? (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setShowPassword(false)}
            >
              <EyeOff className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setShowPassword(true)}
            >
              <Eye className="h-4 w-4" />
            </Button>
          )}
        </div>
        <FormDescription>
          Your password (Baz: come up with something better)
        </FormDescription>
        {form.getFieldState("password").error && (
          <FormMessage>
            {form.getFieldState("password").error.message}
          </FormMessage>
        )}
      </FormItem>
      {changingPassword === true ? (
        <FormItem>
          <FormLabel>Confirm Password</FormLabel>
          <div className="flex flex-col-2 gap-1 mb-1">
            {/* TODO: Make the dots much smaller */}
            <Input
              maxLength={25}
              {...form.register("confirmPassword")}
              type={showConfirmPassword === true ? "text" : "password"}
            ></Input>
            {showConfirmPassword === true ? (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setShowConfirmPassword(false)}
              >
                <EyeOff className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setShowConfirmPassword(true)}
              >
                <Eye className="h-4 w-4" />
              </Button>
            )}
          </div>
          <FormDescription>
            Your password (Baz: come up with something better)
          </FormDescription>
          {form.getFieldState("confirmPassword").error && (
            <FormMessage>
              {form.getFieldState("confirmPassword").error.message}
            </FormMessage>
          )}
        </FormItem>
      ) : (
        <></>
      )}
    </>
  );
}
