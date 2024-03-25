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
  fieldName,
  label,
  placeHolder,
}: {
  form: any;
  isDisabled: boolean;
  fieldName: string;
  label: string;
  placeHolder: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <div className="flex flex-col-2 gap-1 mb-1">
        {/* TODO: Make the dots much smaller */}
        <Input
          placeholder={placeHolder}
          maxLength={25}
          disabled={isDisabled}
          {...form.register(fieldName)}
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
    </FormItem>
  );
}
