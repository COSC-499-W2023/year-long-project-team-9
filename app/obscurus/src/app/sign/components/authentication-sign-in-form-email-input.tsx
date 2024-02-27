import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function AuthenticationSignInEmailInput({ form }: any) {
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

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
