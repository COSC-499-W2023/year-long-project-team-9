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
  const fileRef = form.register("profileImage");
  return (
    <FormItem>
      <FormLabel>Profile Image</FormLabel>
      <div>
        <Button
          type="button"
          variant="outline"
          className="w-full justify-center text-left font-normal text-muted-foreground"
          onClick={() => {
            const button = document.getElementById("profileImageInput");
            button?.click();
          }}
        >
          Browse
          <div className="ml-auto">
            <FileUp className="mr-2 h-4 w-4" />
          </div>
        </Button>
        <input
          type="file"
          id="profileImageInput"
          accept="image/png, image/jpg, image/jpeg"
          hidden
          {...form.register("profileImage")}
        />
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
