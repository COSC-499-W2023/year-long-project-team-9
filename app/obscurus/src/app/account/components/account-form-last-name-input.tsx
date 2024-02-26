import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function LastNameInput({ form }: any) {
  return (
    <FormItem>
      <FormLabel>Last Name</FormLabel>
      <Input
        maxLength={101}
        placeholder="Last Name"
        //TODO: value={"Baz: Last name from database"}
        {...form.register("lastName")}
      ></Input>
      <FormDescription>
        Last name will be displaced other users you decided to interact with.
      </FormDescription>
      {form.getFieldState("lastName").error && (
        <FormMessage>
          {form.getFieldState("lastName").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
