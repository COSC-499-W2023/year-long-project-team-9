"use client";
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

export default function AuthenticationConfirmPasswordInput({ form }: any) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <FormLabel>Confirm Password</FormLabel>
      <FormItem>
        <div className="flex flex-col-2 gap-1 mb-1">
          {/* TODO: Make the dots much smaller ask Baz */}
          <Input
            maxLength={25}
            placeholder="Confirm Password"
            {...form.register("confirmPassword")}
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
        <FormDescription>Must match the password above.</FormDescription>
        {form.getFieldState("confirmPassword").error && (
          <FormMessage>
            {form.getFieldState("confirmPassword").error.message}
          </FormMessage>
        )}
      </FormItem>
    </div>
  );
}