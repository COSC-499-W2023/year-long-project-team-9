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
        maxLength={321}
        placeholder={placeHolder}
        {...form.register(fieldName)}
      ></Input>
      <FormDescription className="text-justify">
        {formDescription}
      </FormDescription>
    </FormItem>
  );
}
