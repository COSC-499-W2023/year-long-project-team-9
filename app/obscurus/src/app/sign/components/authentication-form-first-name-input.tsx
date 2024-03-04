import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function AuthenticationFirstNameInput({ form }: any) {
  return (
    <div>
      <FormLabel>First Name</FormLabel>
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="First Name" {...field} />
            </FormControl>
            <FormDescription>This will be displayed publicly.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
