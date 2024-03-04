import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface EmailInputProps {
  form: any;
  isDisabled: boolean;
  maxLength: number;
  formDescription: string;
}

export default function EmailInput({
  form,
  isDisabled,

  formDescription,
}: EmailInputProps) {
  return (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <Input
        disabled={isDisabled}
        maxLength={321}
        placeholder="Email"
        {...form.register("email")}
      ></Input>
      <FormDescription className="text-justify">
        {formDescription}
      </FormDescription>
      {form.getFieldState("email").error && (
        <FormMessage>{form.getFieldState("email").error.message}</FormMessage>
      )}
    </FormItem>
  );
}
