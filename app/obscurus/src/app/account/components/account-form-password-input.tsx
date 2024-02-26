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
      {form.getValues("password") !== userPassword ? (
        <FormItem>
          <FormLabel>Confirm Password</FormLabel>
          {form.setValue("confirmPassword", "")}
          <Input
            maxLength={25}
            placeholder="Password"
            {...form.register("confirmPassword")}
          ></Input>
          {form.getFieldState("confirmPassword").error && (
            <FormMessage>
              {form.getFieldState("confirmPassword").error.message}
            </FormMessage>
          )}
        </FormItem>
      ) : (
        <></>
      )}
      {/* <FormItem>
        <FormLabel>Confirm Password</FormLabel>
        <Input
          maxLength={25}
          placeholder="Password"
          {...form.register("confirmPassword")}
        ></Input>
        {form.getFieldState("confirmPassword").error && (
          <FormMessage>
            {form.getFieldState("confirmPassword").error.message}
          </FormMessage>
        )}
      </FormItem> */}
    </>
  );
}
