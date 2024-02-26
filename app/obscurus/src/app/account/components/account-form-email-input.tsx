import { FormDescription, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export default function EmailInput({ email }: { email: string }) {
  return (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <Input disabled={true} value={email}></Input>
      <FormDescription>
        One cannot change their email once an account has been created.
      </FormDescription>
    </FormItem>
  );
}
