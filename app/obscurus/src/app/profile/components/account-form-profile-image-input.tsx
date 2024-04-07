import { Button } from "@/components/ui/button";
import { Users } from "@obscurus/database/src/sql.generated";
import {
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useQueryState } from "nuqs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { FileUp } from "lucide-react";
import { Suspense, useEffect, useRef, useState, ChangeEvent } from "react";

export default function ProfileImageInput({
  userData,
  form,
  getPresignedUrl,
}: {
  userData: Users;
  form: any;
  getPresignedUrl?: (username: string) => Promise<string>;
}) {
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
          {userData.profileImage ? ( userData.profileImage ) : "No file selected"}
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
        Accepted filetypes: jpeg,
        .png, .jpg
      </FormDescription>
      <FormDescription className="text-justify">
        File size limit: 10MB
      </FormDescription>
      {form.getFieldState("profileImage").error && (
        <FormMessage>
          {form.getFieldState("profileImage").error.message}
        </FormMessage>
      )}
    </FormItem>
  );
}
