import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function AuthenticationEmailInput({ form }: any) {
  return (
    <div>
      <FormLabel>Email</FormLabel>
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Email" {...field} />
            </FormControl>
            <FormDescription>
              Email must be verified. One cannot change their email once a
              acount has been made.
            </FormDescription>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
