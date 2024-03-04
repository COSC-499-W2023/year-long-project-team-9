import TermsAndConditions from "@/components/terms-and-conditions";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

export default function AuthenticationTermsInput({ form }: any) {
  return (
    <FormField
      control={form.control}
      name="agreedToTermsAndConditions"
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
          <FormControl>
            <Checkbox checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Accept terms and conditions</FormLabel>
            <FormDescription>
              You agree to our <TermsAndConditions></TermsAndConditions>
            </FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
}
