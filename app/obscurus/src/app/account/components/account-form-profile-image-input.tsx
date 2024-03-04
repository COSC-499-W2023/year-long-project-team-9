import { Button } from "@/components/ui/button";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FileUp } from "lucide-react";

export default function ProfileImageInput({ form }: any) {
  return (
    <FormItem>
      <FormLabel>Profile Image</FormLabel>
      <div className="grid w-full max-w-sm items-center gap-1.5 ">
        <Input
          id="picture"
          type="file"
          className="hover:text-accent-foreground"
        />
      </div>
      <FormDescription className="text-justify">
        Other users you decided to interact with will see you profile image.
        Profile picture must be a .jpeg, .png, or .jpg.
      </FormDescription>
      {form.getFieldState("profileImage").error && (
        <FormMessage>
          {form.getFieldState("profileImage").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
