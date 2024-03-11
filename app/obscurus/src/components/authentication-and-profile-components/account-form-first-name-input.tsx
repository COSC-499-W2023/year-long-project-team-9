import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FirstNameInput({
  form,
  isDisabled,
  formDescription,
  fieldName,
  label,
  placeHolder,
}: {
  form: any;
  isDisabled: boolean;
  formDescription: string;
  fieldName: string;
  label: string;
  placeHolder: string;
}) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <Input
        disabled={isDisabled}
        maxLength={101}
        placeholder={placeHolder}
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
