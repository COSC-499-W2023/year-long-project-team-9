import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function FirstNameInput({ form }: any) {
  return (
    <FormItem>
      <FormLabel>First Name</FormLabel>
      <Input
        maxLength={101}
        placeholder="First Name"
        //TODO: value={"Baz: Last name from database"}
        {...form.register("firstName")}
      ></Input>

      <FormDescription>
        First name will be displaced other users you decided to interact with.
      </FormDescription>
      {form.getFieldState("firstName").error && (
        <FormMessage>
          {form.getFieldState("firstName").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
