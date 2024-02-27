import { Button } from "@/components/ui/button";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { FileUp } from "lucide-react";

export default function ProfileImageInput({ form }: any) {
  return (
    <FormItem>
      <FormLabel>Profile Image</FormLabel>
      <Button
        type="button"
        variant="outline"
        className="w-full text-left font-normal"
      >
        <div className="text-muted-foreground">Upload Profile Image</div>
        <div className="ml-auto text-muted-foreground">
          <div>
            <Separator orientation="vertical" />
            <FileUp className="mr-2 h-4 w-4" />
          </div>
        </div>
      </Button>
      <FormDescription>
        Other users you decided to interact with will see you profile image.
      </FormDescription>
      {form.getFieldState("profileImage").error && (
        <FormMessage>
          {form.getFieldState("profileImage").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
