import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function EmailInput({
  form,
  isDisabled,
  formDescription,
  fieldName,
}: {
  form: any;
  isDisabled: boolean;
  formDescription: string;
  fieldName: string;
}) {
  return (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <Input
        disabled={isDisabled}
        maxLength={321}
        placeholder="Email"
        {...form.register(fieldName)}
      ></Input>
      <FormDescription className="text-justify">
        {formDescription}
      </FormDescription>
      {form.getFieldState(fieldName).error && (
        <FormMessage>{form.getFieldState(fieldName).error.message}</FormMessage>
      )}
    </FormItem>
  );
}
