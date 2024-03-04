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

export interface PasswordInputProps {
  form: any;
  isDisabled: boolean;
}

export default function PasswordInput({
  form,
  isDisabled,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <FormItem>
        <FormLabel>Password</FormLabel>
        <div className="flex flex-col-2 gap-1 mb-1">
          {/* TODO: Make the dots much smaller */}
          <Input
            placeholder="Password"
            maxLength={25}
            disabled={isDisabled}
            {...form.register("password")}
            type={showPassword === true ? "text" : "password"}
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
        <FormDescription className="text-justify">
          Password must a lowercase and uppercase letter. Password must have a
          number and a special character. Password at least 8 characters and no
          more than 24 characters.
        </FormDescription>
        {form.getFieldState("password").error && (
          <FormMessage>
            {form.getFieldState("password").error.message}
          </FormMessage>
        )}
      </FormItem>

      <FormItem>
        <FormLabel>Confirm Password</FormLabel>
        <div className="flex flex-col-2 gap-1 mb-1">
          {/* TODO: Make the dots much smaller */}
          <Input
            maxLength={25}
            placeholder="Confirm Password"
            disabled={isDisabled}
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
        <FormDescription>Confirm your password.</FormDescription>
        {form.getFieldState("confirmPassword").error && (
          <FormMessage>
            {form.getFieldState("confirmPassword").error.message}
          </FormMessage>
        )}
      </FormItem>
    </>
  );
}
