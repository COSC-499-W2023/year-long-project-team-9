import { Button } from "@/components/ui/button";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FileUp } from "lucide-react";

export default function ProfileImageInput({ form }: any) {
  return (
    <FormItem>
      <FormLabel>Profile Image</FormLabel>
      <div>
        <Button></Button>
      </div>
      <FormDescription className="text-justify">
        Other users will see you profile image. Profile picture must be a .jpeg,
        .png, or .jpg; and no larger than 10 MB.
      </FormDescription>
      {form.getFieldState("profileImage").error && (
        <FormMessage>
          {form.getFieldState("profileImage").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
