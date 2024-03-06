import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function LastNameInput({
  form,
  isDisabled,
  formDescription,
  fieldName,
  label,
}: {
  form: any;
  isDisabled: boolean;
  formDescription: string;
  fieldName: string;
  label: string;
}) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Input
        maxLength={100}
        placeholder="Last Name"
        {...form.register("lastName")}
      ></Input>
      <FormDescription className="text-justify">
        Other users will see you last name.
      </FormDescription>
      {form.getFieldState("lastName").error && (
        <FormMessage>
          {form.getFieldState("lastName").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
