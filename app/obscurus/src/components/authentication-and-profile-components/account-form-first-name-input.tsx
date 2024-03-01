import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export interface FirstNameInputProps {
  form: any;
}
export default function FirstNameInput({ form }: FirstNameInputProps) {
  return (
    <FormItem>
      <FormLabel>First Name</FormLabel>
      <Input
        maxLength={101}
        placeholder="First Name"
        {...form.register("firstName")}
      ></Input>

      <FormDescription className="text-justify">
        Other users will see you first name.
      </FormDescription>
      {form.getFieldState("firstName").error && (
        <FormMessage>
          {form.getFieldState("firstName").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
